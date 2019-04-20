var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // $button.on('click',),
  // $('#rooms button').
  initialize: function() {
  },

  // var roomTest = 'loft',
  
  render: function() {

  },

  renderRoom: function(roomName) {
    var roomTag = `<option>${roomName}</option>`;
    this.$select.append(roomTag);
  },

  // renderRoom(roomTest);

  // $button.on('click', this.renderRoom())
};