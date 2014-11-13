/**
 * myMemGame utils
 * Defines commonly used functions. A small "library" of utilities.
 * 
 * Note:
 * Im using the object literal notation because all those methods
 * will be public and shared across the app.
 */
myMemGame.utils = {

    /**
     * Determinates if a given val should be considered as empty
     * 
     * @param {type} val
     * @returns {Boolean}
     */
    isEmptyVal: function (val) {
        'use strict';
        return undefined === val || null === val || "" === val;
        // do not use !val because 0 and false are not empty vals ;)
    },

    /**
     * Determinates if a given val exists
     * Note: typeof allows the identifier to never have been 
     * declared before, so is safer than other methods
     * 
     * @param {type} val
     * @returns {Boolean}
     */
    exists: function (val) {
        'use strict';
        return typeof val !== "undefined" && val !== null;
    },

    /**
     * Adds an event listener using the proper way
     * Im using a form of memoization so after the first use
     * the method will re-write itself using feature detection.
     *
     * Note: this is NOT a good practice, because is not easy
     * to read, but im incluiding it just to show off.
     * Another helpul thing is that starting with MSIE 11 
     * attachEvent is no longer supported, so someday this 
     * trick will not be needed anymore. 
     * 
     * @param {HTMLCollection} el - DOM element
     * @param {string} ev - type of event (ie. "click")
     * @param {function} fn - this will be the callback function
     * @returns {Boolean}
     */
    addEvent : function(el, ev, fn){
        // using feature detection, the method will re-write itself
        if (el.addEventListener) {
            this.addEvent = function (el, ev, fn) {
                el.addEventListener(ev, fn, false);
            };
        } else if (el.attachEvent) {
            this.addEvent = function (el, ev, fn) {
                el.attachEvent('on' + ev, fn);
            };
        } else {
            this.addEvent = function (el, ev, fn) {
                el['on' + ev] =  fn;
            };
        }
        // After rewritten itself on the first execution
        // will be need to be called
        this.addEvent(el, ev, fn);
    },


    /**
     * Shuffles DOM elements and re-introduce them to the DOM.
     *
     * Important: Not from my authorship, this piece of 
     * code belongs to James Paldosey. I've just merely
     * adapted it to use as a method.
     *
     * Source: http://james.padolsey.com/javascript/shuffling-the-dom/ 
     *
     * Notes: it may need to be refactored to use domfragment
     * 
     * @param {HTMLCollection} elems - DOM element collection
     */
    shuffleDOM_OLD: function(elems) {
 
        var allElems = (function(){
            var ret = [], 
                len = elems.length;
            while (len--) { 
                ret[ret.length] = elems[len];
            }
            return ret;
        })();
     
        var shuffled = (function(){
            var len = allElems.length, 
                ret = [];
            
            while (len--) {
                var random = Math.floor(Math.random() * allElems.length),
                    randEl = allElems[random].cloneNode(true);
                allElems.splice(random, 1);
                ret[ret.length] = randEl;
            }
            return ret; 
        })(), 
        len = elems.length;
     
        while (len--) {
            // this may need to be refactored to use domfragment
            // or maybe just return the shuffled array?
            elems[len].parentNode.insertBefore(shuffled[len], elems[len].nextSibling);
            elems[len].parentNode.removeChild(elems[len]);
        }
 
    },

    /**
     * Shuffles a DOM LIST and returns the shuffled version
     *
     * Important: Not from my authorship, this piece of 
     * belongs to "Yair Even Or", te code was adapted from
     * these two sources:
     *
     * Source 1: http://bit.ly/1sG4cAU
     * Source 2: http://jsbin.com/jiboxuru/1/edit?html,css,js,output
     *
     * @param {HTMLCollection} ul - DOM list
     * @returns {HTMLCollection} ul - same element with shuffled children
     */
    shuffleDOM: function( ul ){
        var temp = ul.cloneNode(true),    // clone the list
            i = temp.children.length + 1; // shuffle the cloned list (better performance)
        for (i; i--; ){
            temp.appendChild( temp.children[Math.random() * i |0] );
        }
        return temp;
    },

    fakeMethod : function(){
        console.log('Hi, im just a fake method for the first unit test!');
    }

}