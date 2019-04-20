var RoomsView = {

  $button: $('#rooms button'),
  $select: $('select'),

  // $button.on('click',),
  // $('#rooms button').
  initialize: function() {
  },

  // var roomTest = 'loft',
  
  renderRoom: function(roomName) {
    var roomTag = `<option value="${roomName}">${roomName}</option>`;
    this.$select.append(roomTag);
  },

  // renderRoom(roomTest);

  // $button.on('click', this.renderRoom())
};