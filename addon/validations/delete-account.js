import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  currentPassword: validatePresence(true)
};