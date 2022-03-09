"use strict";
(function () {
    var fullName = function (firstName, lastName, uper) {
        if (uper === void 0) { uper = false; }
        if (uper) {
            return (firstName + " " + (lastName || 'no lastName')).toUpperCase();
        }
        else {
        }
        return firstName + " " + (lastName || 'no lastName');
    };
    //let noName:any
    var name = fullName('Saint', 'Seiya', true);
    console.log({ name: name });
})();
