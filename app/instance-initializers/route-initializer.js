import Ember from 'ember';
import config from '../config/environment';


const DEFAULT_CONFIG = {
    hardDelete: false,
    links: {
      'account.email': 'Email',
      'account.password': 'Password',
      'account.delete': 'Delete'
    },
    messages: {
      successfulLogin: 'You have logged in successfully!',
      unsuccessfulLogin: 'You were unable to log in.',
      successfulUpdateAccount: 'You have successfully updated your account information!',
      unsuccessfulUpdateAccount: 'We were unable to update your account information.',
      successfulUpdateEmail: 'You have successfully updated your email!',
      unsuccessfulUpdateEmail: 'We were unable to update your email.',
      successfulUpdatePassword: 'You have successfully updated your password!',
      usuccessfulUpdatePassword: 'We were unable to update your password.',
      successfulDeleteAccount: 'You have successfully deleted your account!',
      unsuccessfulDeleteAccount: 'We were unable to delete your account.',
      successfulLogout: 'You are now logged out!',
      unsuccessfulLogout: 'We were unable to log out of your account.'
    }
};

const { merge, set } = Ember;

export function initialize( appInstance ) {
  let configService = appInstance.lookup('service:account-config');

  let efConfig = {};

  Object.keys(DEFAULT_CONFIG).forEach((key) => {
      efConfig = merge(DEFAULT_CONFIG, config['emberfire-account']);
  });


  Object.keys(efConfig).forEach((key) => {
    set(configService, key, efConfig[key]);
  });
  window.service = configService;
}

export default {
  name: 'route-initializer',
  initialize
};

