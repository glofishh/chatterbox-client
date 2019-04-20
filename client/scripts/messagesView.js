var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // this.$chats.append(this.renderMessage)
  },

  renderMessage: function (message) { 
    var htmlTag = `
    <div class="chat">
      <div id="messageNames">
        <button type="button" id="${message.username}">${message.username}:</button>
      </div>
        <div class="${message.username}">${message.text}</div>
    </div>`;

    this.$chats.append(htmlTag);
  } 
};
