var Friends = {

  _data: new Set,

  items: function() {
    return this._data.chain([...Friends._data]);
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = () => {
  }) {
    //function which toggles frindships on and off
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }
};