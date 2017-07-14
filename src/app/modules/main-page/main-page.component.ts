import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  content: string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.oMessage.subscribe(
      data => {
        this.content = data;
      }
    )
  }

   CBSearchMenuItems: any = [
    {
      'title': 'Jobs & Applications',
      'altTxt': 'Jobs & Applications',
      internalPath: '/jobposting',
      'dropDown': [
        {
          title: 'Post a Job',
          altText: 'Post a Job',
          internalPath: '/jobposting/jobproducts'
        },
        {
          title: 'View My Jobs',
          altText: 'View My Jobs',
          externalPath: 'http://employer.careerbuilder.com/jobposter/jobs/myjobs/default.aspx'
        },
        {
          title: 'Screeners',
          altText: 'Screeners',
          externalPath: 'http://employer.careerbuilder.com/jobposter/questionnaires/myquestionnaires.aspx'
        },
        {
          title: 'Applications',
          altText: 'Applications',
          externalPath: 'http://employer.careerbuilder.com/jobposter/jobs/applicationsearch.aspx'
        },
        {
          title: 'Candidate Controls',
          altText: 'Candidate Controls',
          externalPath: 'http://employer.careerbuilder.com/jobposter/letters/myautoresponsesettings.aspx'
        },
        {
          title: 'My Templates',
          altText: 'My Templates',
          externalPath: 'http://employer.careerbuilder.com/jobposter/templates/mytemplates.aspx'
        }
      ]
    },
    {
      'title': 'Search',
      'altTxt': 'Search',
      'internalPath': '/candidates',
      'dropDown': [
        {
          'title': 'CB Search',
          'altTxt': 'CareerBuilder Search',
          'internalPath': '/candidates'
        },
        {
          'title': 'Lists',
          'altTxt': 'Lists',
          'internalPath': '/candidates/lists'
        },
        {
          title: 'Resume Database',
          altText: 'Resume Database',
          externalPath: 'http://employer.careerbuilder.com/jobposter/resumes/searchresume.aspx'
        },
        {
          title: 'Recruitment Edge',
          altText: 'Recruitment Edge',
          externalPath: 'http://edge.careerbuilder.com/'
        }
      ]
    },
    {
      'title': 'Research',
      'altTxt': 'Research',
      'internalPath': '/analytics',
      'dropDown': [
        {
          'title': 'Supply & Demand',
          'altTxt': 'Supply & Demand Search',
          'internalPath': '/analytics/search'
        },
        {
          title: 'Data Portals',
          altText: 'Data Portals',
          externalPath: 'http://employer.careerbuilder.com/personified/myportalproducts.aspx'
        }
      ]
    },
    {
      'title': 'Account Tools',
      'altTxt': 'Account Tools',
      'dropDown': [
        {
          title: 'My Accounts',
          altTxt: 'My Accounts',
          externalPath: 'http://employer.careerbuilder.com/jobposter/accounts/myaccounts.aspx'
        },
        {
          title: 'User Info',
          altTxt: 'User Info',
          externalPath: 'http://employer.careerbuilder.com/share/userinfo.aspx'
        },
        {
          title: 'Company Profiles',
          altTxt: 'Company Profiles',
          externalPath: 'http://employer.careerbuilder.com/jobposter/companies/default.aspx'
        },
        {
          title: 'Job Branding',
          altTxt: 'Job Branding',
          externalPath: 'http://employer.careerbuilder.com/jobposter/jobskinmgmt/jobskinmgmtstartv2.aspx'
        },
        {
          title: 'My Media',
          altTxt: 'My Media',
          externalPath: 'http://employer.careerbuilder.com/jobposter/mediamanagement/mymedia.aspx'
        },
        {
          title: 'Letters',
          altTxt: 'Letters',
          externalPath: 'http://employer.careerbuilder.com/jobposter/letters/myletters.aspx'
        },
        {
          title: 'Folders',
          altTxt: 'Folders',
          externalPath: 'http://employer.careerbuilder.com/jobposter/folders/myfolders.aspx'
        },
        {
          title: 'Company Address',
          altTxt: 'Company Address',
          externalPath: 'http://employer.careerbuilder.com/jobposter/accounts/companyaddress.aspx'
        },
        {
          title: 'Fraud Analysis',
          altTxt: 'Fraud Analysis',
          externalPath: 'http://employer.careerbuilder.com/jobposter/info/fraud.aspx'
        }
      ]
    },
    {
      'title': 'Intake',
      'altTxt': 'Intake Tool',
      'internalPath': '/intake/project',
      'hidden': true
    },
    {
      'title': 'Feed',
      'altTxt': 'Your Feed',
      'internalPath': '/feed',
      'hidden': true
    },
    {
      'title': 'Campaigns',
      'altTxt': 'Campaign Management',
      'internalPath': '/emailcampaign',
      'hidden': true
    }
  ];

 headerObj = {
    'logoPath': {
      'internalPath': '/'
    },
    'product': {
      'title': 'Recruitment Platform',
      'altTxt': 'Welcome to the Recruitment Platform',
      'internalPath': '/'
    },
    'newFeatures': {
      'isShow': false
    },
    'searchBar': {
      'isShow': false
    },
    'leftNav': [
      ...this.CBSearchMenuItems,
    ],
    // 'appSwitcher': this.APP_SWITCHER,
    'userProfile': {
      'user': {},
      'addUser': {
        'isShow': false
      },
      'editUser': {
        'isShow': false
      },
      'options': [
        {
          'title': 'My Accounts',
          'action': 'MY_ACCOUNT_ACTION'
        },
        {
          'title': 'Switch Accounts',
          'action': 'SWITCH_ACCOUNT_ACTION'
        },
      ]
    }
  };
}
