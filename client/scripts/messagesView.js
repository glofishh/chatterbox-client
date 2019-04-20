var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  renderMessage: function (message) {
    /*message
    username
    text
    roomname
    */
 
    var htmlTag = `
    <div class="chat">
      <button>${message.username}</button>
      <div class="${message.username}">${message.text}</div>
    </div>`;

    this.$chats.append(htmlTag);
  } 
};
