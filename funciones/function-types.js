"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "hola " + name; };
    var saveTheWorld = function () { return "El mundo esta salvado!"; };
    var myFunction;
    //myFunction=10;
    // console.log(myFunction);
    //myFunction=addNumbers;  //Con tipo number
    //console.log(myFunction(3,5));
    // myFunction=greet;/// con tipo string
    // console.log(myFunction('que hay'));
    myFunction = saveTheWorld; //sin argumento
    console.log(myFunction());
})();
