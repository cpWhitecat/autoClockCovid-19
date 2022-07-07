const robot = require('robotjs');
const {date} = require('./meta');
const EventEmitter = require('events');

class events extends EventEmitter {
    
}

const newArr = [];

for (const iterator of date) {
    console.log(iterator)
}



var mouse = robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y)