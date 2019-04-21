var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    console.log(Messages);
    console.log(window.location.search);
    event.preventDefault();
    Messages.testMessage.text = $('#message').val();
    Parse.create(Messages.testMessage);
    Messages.testMessage.text = '';
    $('#message').val('');
    MessagesView.initialize();

  },

  setStatus: function ( active ) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

};