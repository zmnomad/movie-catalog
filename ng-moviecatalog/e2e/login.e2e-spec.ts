import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Login functionality', () => {
  beforeEach(() => browser.get('/login'));

  it('should navigate to login', () => {
    expect(getPath()).toEqual('/login');
  });

  it('should fail to login with invalid credentials', () => {
    element(by.id('username')).sendKeys('invaliduser1231');
    element(by.id('password')).sendKeys('invalidpw15615');
    element(by.id('loginButton')).click();
    expect(getPath()).toEqual('/login');
  });

  it('should redirect after successful login', () => {
    element(by.id('username')).sendKeys('johnjohn');
    element(by.id('password')).sendKeys('almafa');
    element(by.id('loginButton')).click();
    expect(getPath()).toEqual('/');
  });
});
