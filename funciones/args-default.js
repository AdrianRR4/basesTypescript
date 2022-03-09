"use strict";
(function () {
    var fullName = function (firstName, lastName, uper) {
        if (uper === void 0) { uper = false; }
        return firstName + " " + (lastName || 'no lastName');
    };
    //let noName:any
    var name = fullName('Saint');
    console.log({ name: name });
})();
