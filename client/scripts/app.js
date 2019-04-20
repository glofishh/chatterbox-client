
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    App.addFriend();
    App.addRoom();
    

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
  },

  fetch: function(callback = ()=>{}) {
    
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);// list of obj/messages fromn server
      console.log(data.results[0].text); // first obj/message text
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
  },


  addFriend: function() {
    $('.username').on('click', Friends.toggleStatus());
  },
  
  addRoom: function() {
    $('#rooms').find('button').on('click', Rooms.add);
  }    

};

