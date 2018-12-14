import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Route guard - authentication check', () => {
  it('should redirect GUEST to login page', () => {
    browser.get('/directors').then(() => {
      element(by.id('newDirector')).click();
      expect(getPath()).toEqual('/login');
    });
  });

  it('should allow USER to access route/feature', () => {
    browser.get('/login').then(() => {
      element(by.id('username')).sendKeys('johnjohn');
      element(by.id('password')).sendKeys('almafa');
      element(by.id('loginButton')).click();
      browser.get('/directors').then(() => {
        element(by.id('newDirector')).click();
        expect(getPath()).toEqual('/director/new');
      });
    });
  });

  it('should allow ADMIN to access route/feature', () => {
    browser.get('/login').then(() => {
      element(by.id('username')).sendKeys('bob');
      element(by.id('password')).sendKeys('alma');
      element(by.id('loginButton')).click();
      browser.get('/directors').then(() => {
        element(by.id('newDirector')).click();
        expect(getPath()).toEqual('/director/new');
      });
    });
  });
});
