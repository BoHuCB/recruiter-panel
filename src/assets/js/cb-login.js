(function($, global) {
    var CB = global.CB = (global.CB || {});
    var LOGIN_URL_BASE = 'https://accounts.careerbuilder.com/share/hybrid/cbloginrelay.aspx';
    var AUTH_URL_BASE = 'https://accounts.careerbuilder.com/share/oauth2/auth.aspx';
    if (CB.Auth) {
        throw new Error('CB.Auth is already defined.');
    }
    CB.Auth = {
        initialize: initializeAuthClient
    };

    function initializeAuthClient(params) {
        var clientId = params.clientId;
        validateClientId(clientId);
        return {
            getLoginStatus: getLoginStatus,
            login: login
        };

        function getLoginStatus(params) {
            params = params || {};
            var deferred = $.Deferred();
            var useCookies = params.useCookies || false;
            var socket = initSocket({
                url: LOGIN_URL_BASE,
                clientId: clientId,
                useCookies: useCookies,
                done: function onMessage(results) {
                    deferred.resolve(results);
                },
                error: function onError(err) {
                    deferred.reject(err);
                }
            });
            return { 'socket': socket, 'promise': deferred.promise() };
        }

        function login(params) {
            params = $.extend({
                redirectUri: window.location.href,
                doRedirect: true,
                data: {}
            }, params);
            var queryString = buildQueryString($.extend(params.data, {
                scope: 'default',
                state: 'tempstate',
                response_type: 'id_token',
                client_id: clientId,
                redirect_uri: encodeURIComponent(params.redirectUri)
            }));
            var loginUrl = [AUTH_URL_BASE, queryString].join('?');
            if (params.doRedirect) {
                window.location.replace(loginUrl);
            } else {
                return loginUrl;
            }
        }
    }

    function initSocket(params) {
        var socket, doneCb, errorCb;
        errorCb = params.error || noopFn;
        doneCb = params.done || noopFn;
        socket = new easyXDM.Socket({
            remote: params.url,
            onReady: onReady,
            onMessage: onMessage
        });
        return socket;

        function onReady() {
            try {
                socket.postMessage(formatPostMessage(params.clientId, params.useCookies));
            } catch (err) {
                errorCb(err);
            }
        }

        function onMessage(msg) {
            if (hasError(msg)) return errorCb(new Error(msg));
            try {
                doneCb(JSON.parse(msg));
            } catch (err) {
                console.error('Invalid JSON message', err);
                errorCb(err);
            }
        }
    }

    function buildQueryString(query) {
        return $.map(query, function(value, key) {
            return [key, value].join('=');
        }).join('&');
    }

    function formatPostMessage(clientId, useCookies) {
        return ['cid=', clientId, ';', 'cookie=', useCookies].join('');
    }

    function noopFn() {
        console.log('doing noop');
    }

    function validateClientId(cid) {
        if (cid === null || isUndefined(cid) || cid === '') {
            throw new Error('Missing or invalid client ID');
        }
    }

    function hasError(msg) {
        return msg.toLowerCase().indexOf('error:') === 0;
    }

    function isUndefined(val) {
        return typeof val === 'undefined';
    }
})(jQuery, window || {});