var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  $button.on('click', function() {
    console.log('HEY YO')
  });

  initialize: function() {
  },
  
  renderRoom: function(room) {
    var roomTag = `<div class="${room}"></div>`;
    this.$.append(roomTag);
  }

  // $button.on('click', this.renderRoom())

};
