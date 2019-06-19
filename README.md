![npm (scoped)](https://img.shields.io/npm/v/2.svg)

# firstNodeModule
a small function to convert json into array

Install
$ npm install @manishajmera27/firstnodemodule
Usage
const jsonArray = require("@manishajmera27/firstnodemodule");

jsonArray({a:1,b:2});

jsonArray(1337);
//=> Uncaught TypeError: error!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1


