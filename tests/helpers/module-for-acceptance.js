import { module } from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

const { RSVP: { Promise } } = Ember;

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments);
      }
    },

    async afterEach() {
      let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
      await Promise.resolve(afterEach);
      destroyApp(this.application);
    }
  });
}
