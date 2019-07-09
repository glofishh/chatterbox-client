
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10).replace(/%20/g, ' ');

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    App.addFriend();
    App.addRoom();
    

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //poll for new messages every 3 seconds
    setInterval(App.fetch, 3000);
    
  },

  fetch: function(callback = ()=>{}) {
    
    Parse.readAll((data) => {
      //dont bother updating if we don't have messages
      if (!data.results || !data.results.length) { return; }

      Rooms.update(data.results, RoomsView.render);
      Messages.update(data.results, MessagesView.render);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

