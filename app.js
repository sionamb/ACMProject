const moment  = require('moment')
const timer = require("moment-timer")

let minutes = 30

var time = moment.duration(minutes, "seconds").timer({loop: true}, function() {
    
    // Callback
});

console.log(time)
