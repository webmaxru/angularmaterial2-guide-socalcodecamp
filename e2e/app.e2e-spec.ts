import { Angularmaterial2GuideSocalcodecampPage } from './app.po';

describe('angularmaterial2-guide-socalcodecamp App', function() {
  let page: Angularmaterial2GuideSocalcodecampPage;

  beforeEach(() => {
    page = new Angularmaterial2GuideSocalcodecampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
