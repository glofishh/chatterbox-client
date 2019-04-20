
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    this.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    this.startSpinner();
    this.fetch(this.stopSpinner);

  },

  startSpinner: function() {
    this.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    this.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  // send: function(message) {
    
  // },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },


    

};

