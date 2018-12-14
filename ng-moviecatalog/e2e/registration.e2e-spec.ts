import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Registration', () => {
  beforeEach(() => {
    browser.get('/register');
  });

  it('should navigate to registration', () => {
    expect(getPath()).toEqual('/register');
  });

  it('should fail to register with empty form', () => {
    element(by.id('submitRegistration')).click();
    expect(getPath()).toEqual('/register');
  });

  it('should fail to register with invalid email', () => {
    element(by.id('username')).sendKeys('new_user_1231');
    element(by.id('password')).sendKeys('almafa1123');
    element(by.id('email')).sendKeys('not_an_email');
    element(by.id('submitRegistration')).click();
    expect(getPath()).toEqual('/register');
  });

  it('should fail to register with short password', () => {
    element(by.id('username')).sendKeys('new_user3ó841');
    element(by.id('password')).sendKeys('pw');
    element(by.id('email')).sendKeys('not_an_email');
    element(by.id('submitRegistration')).click();
    expect(getPath()).toEqual('/register');
  });

  it('should redirect after successful registration', () => {
    element(by.id('username')).sendKeys('new_user4249');
    element(by.id('password')).sendKeys('almafa987');
    element(by.id('email')).sendKeys('my_email@address.com');
    element(by.id('submitRegistration')).click();
    expect(getPath()).toEqual('/login');
  });
});
