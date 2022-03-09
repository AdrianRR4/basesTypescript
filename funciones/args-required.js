"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    //let noName:any
    var name = fullName('Saint', 'Seiya');
    console.log({ name: name });
})();
