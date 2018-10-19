var exec = require('cordova/exec');

const emptyCallback = function () { }

const nativeContacts = {}

nativeContacts.addContact = function (params) {
  if (typeof params == 'undefined') {
    params = {}
  }

  exec(emptyCallback, emptyCallback, "CordovaNativeContacts", "addContact", [params]);
};

nativeContacts.updateContact = function (params) {
  if (typeof params == 'undefined') {
    params = {}
  }

  exec(emptyCallback, emptyCallback, "CordovaNativeContacts", "updateContact", [params]);
}

module.exports = nativeContacts;

