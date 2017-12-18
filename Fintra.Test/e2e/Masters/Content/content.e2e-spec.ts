import { ContentPage } from './content.po';
describe('Content Master', () => {
  let page: ContentPage;
  beforeEach(() => {
    page = new ContentPage();
  });
  it('Login Test', () => {
    page.navigateTo();
    page.clearUsername();
    page.getUsername();
    page.clearPassword();
    page.getPassword();
    page.getLoginClick();
    page.getMenuClick();
    page.getMasterClick();
    page.getContentClick();
    page.getCreateClick();
    page.getField1();
    page.getField2();
    page.getField3();
    page.getFinishClick();
  });
});
