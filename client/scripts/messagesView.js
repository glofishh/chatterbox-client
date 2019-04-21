var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // this.$chats.append(this.renderMessage)
  },

  renderMessage: function (message) { 
    // var htmlTag = `
    // <div class="chat">
    //   <div id="messageNames">
    //     <button type="button" id="${message.username}">${message.username}:</button>
    //   </div>
    //     <div class="${message.username}">${message.text}</div>
    // </div>`;
    // for (var i = 0; i < messages.length; i++) {
  
    var html = MessageView.render(message);
    console.log(html);

    console.log(msgTemplate(message));
    this.$chats.append(msgTemplate(message));
  }
};


var msgTemplate = _.template(
  `<div class ="message">
    <div class ="username">
      <%- username%>
    </div>
    <%- text%>
  </div>`
);