var EventEmitter=require("node:events").EventEmitter;

let myevent= new EventEmitter();

myevent.addListener("Gautam",function(){
    console.log("Gautham event happend");
})

setTimeout(function(){
    myevent.emit("Gautam")
},2000)