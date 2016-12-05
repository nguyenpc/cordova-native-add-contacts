var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.getElementById('button').addEventListener('click', this.buttonClicked, false);
    },
    buttonClicked: function() {
        window.cordova.plugins.cordovaAddContact.
            addContact({phone: '+123456789', name:'John', email:'john@john.com'})
    },
};

app.initialize();
