var addSection = require('./addSection')
var textGroup = require('./config')


var $ = require('jquery')

$.ajax({
  url: '',
  success: function (data) {
    var textGroup = data
  }
})


function init () {
  textGroup.forEach(function (item) {
    addSection(item.text, item.backgroundColor)
  })
}

init()