import { browser, by, element } from 'protractor';
const params = browser.params;
export class ContentPage {
  navigateTo() {
    return browser.get('/login');
  }
  getTitle() {
    return element(by.css('h3')).getText();
  }
  clearUsername() {
    return element(by.name('username')).clear();
  }

  getUsername() {
    return element(by.name('username')).sendKeys(params.login.username);
  }

  clearPassword() {
    return element(by.name('password')).clear();
  }

  getPassword() {
    return element(by.name('password')).sendKeys(params.login.password);
  }

  getLoginClick() {
    return  element(by.buttonText('Login')).click();
  }
  getMenuClick() {
    return element(by.id('menu-toggle')).click();
  }
  getMasterClick() {
    return element(by.id('menu')).all(by.linkText('MASTERS')).click();
  }
  getContentClick() {
    return element(by.css('[routerLink="/filterContent"]')).click();
  }
  getCreateClick() {
    return element(by.buttonText('Create New')).click();
  }
  getFinishClick() {
    return element(by.buttonText('Finish')).click();
  }
  getField1() {
    return element(by.name('moduleName')).all(by.tagName('option')).get(2).click();
  }
  getField2() {
    return element(by.name('contentName')).sendKeys('abcd');
  }
  getField3() {
    return element(by.name('contentDescriptionName')).sendKeys('abcd');
  }
}
