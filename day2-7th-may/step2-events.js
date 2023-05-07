var EventEmitter = require("node:events").EventEmitter;

// create a new instance of event class
var myevent = new EventEmitter();
console.log("log from line 5");
// attach a listener for the event vijayevent
myevent.addListener("vijayevent", function(){
    console.log("Vijay Event Happened", "line 8");
});
console.log("log from line 10");
// dispatch the event vijayevent
setTimeout(function(){
    console.log("log from line 13");
    myevent.emit("vijayevent");
}, 2000);