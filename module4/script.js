/* jshint esversion: 6 */

(function () {
    'use strict';

    let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (let i = 0; i < names.length; ++i) {
        if (names[i].toLowerCase().charAt(0) === 'j') {
            byeSpeaker.speak(names[i]);
        }
        else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
