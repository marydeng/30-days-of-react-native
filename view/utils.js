// obtained from react native tutorials

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  PixelRatio
} = React;

var Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => {
      return response.json() 
    })
    .then((responseData) => {
      callback(responseData);
    });
  },

  key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE'

};

module.exports = Util;