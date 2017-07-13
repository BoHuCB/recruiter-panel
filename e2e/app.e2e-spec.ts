import { HackDayPage } from './app.po';

describe('hack-day App', () => {
  let page: HackDayPage;

  beforeEach(() => {
    page = new HackDayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
