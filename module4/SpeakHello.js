/* jshint esversion: 6 */

(function (context) {
    'use strict';

    let speakWord = "Hello";
    let helloSpeaker = {
        speak(name) {
            console.log(`${speakWord} ${name}`);
        }
    };

    context.helloSpeaker = helloSpeaker;
})(window);
