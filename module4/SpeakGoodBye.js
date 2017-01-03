/* jshint esversion: 6 */

(function (context) {
    'use strict';

    let speakWord = "Good Bye";
    let byeSpeaker = {
        speak(name) {
            console.log(`${speakWord} ${name}`);
        }
    };

    context.byeSpeaker = byeSpeaker;
})(window);
