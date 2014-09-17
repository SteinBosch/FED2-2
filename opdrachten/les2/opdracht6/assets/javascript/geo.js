/***
* cmdaan.js
*   Bevat functies voor CMDAan stijl geolocatie welke uitgelegd
*   zijn tijdens het techniek college in week 5.
*
*   Author: J.P. Sturkenboom <j.p.sturkenboom@hva.nl>
*   Credit: Dive into html5, geo.js, Nicholas C. Zakas
*
*   Copyleft 2012, all wrongs reversed.
*/

var app = app || {};

(function() {
    app.controller = {
        init: function() {
            console.log ('kickoff app');
            app.gps.init();
            app.map.init();
            app.debug.init();
        }
    }
    app.gps = {
        init: function() {
            console.log('initialized GPS object');
        }
    }
    app.map = {
        init: function() {
            console.log('initialized Map object');
        }
    }
    app.debug = {
        init: function () {
            console.log('initialized Debug object');
        }
    }

    app.controller.init();

})();
