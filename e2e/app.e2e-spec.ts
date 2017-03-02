import { SECIntroToAngularWorkshopPage } from './app.po';

describe('sec-intro-to-angular-workshop App', function() {
  let page: SECIntroToAngularWorkshopPage;

  beforeEach(() => {
    page = new SECIntroToAngularWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
