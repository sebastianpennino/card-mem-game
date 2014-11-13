myMemGame.CardsController = (function (window, MG, undefined) {
    "use strict";

    var props = {
      selectors : {
        main : document.getElementById('deck')
      },
      oldcard : {
        cardName : null,  // comparison used by compareCard
        unique   : null   // comparison used by compareCard
      }
    },
    methods = {
      // all methods will be defined later
    };

    methods.shuffleIt = function () {
      var deck = props.selectors.main
          , ul = MG.utils.shuffleDOM( deck );
      deck.innerHTML = '';
      deck.appendChild(ul);
    };

    methods.newGame = function () {
      ///props.selectors.main.querySelectorAll('.card')
      $('#deck').find('.card').removeClass('founded flipped');
      methods.shuffleIt();
    };

    methods.checkWinCondition = function () {
      var win = props.selectors.main.querySelectorAll('.card.founded').length === 30;
      if(win){
        alert('Congratulations!!! A new game will begin in 5 seconds...');
        setTimeout(  methods.newGame.bind(this) , 5000 );
      }
    };

    methods.initialize = function () {
      // 1- Shuffling the cards
      methods.shuffleIt();

      // 2- Adding event handlers
      MG.utils.addEvent( props.selectors.main , "click", function(evt){
        evt.preventDefault();
        
        // 3- Basic event delegation
        if(evt.target && evt.target.nodeName == "A"){
          // 4- If less than 2 "flipped" cards, proceed
          if(methods.checkForReveals() === true){
            methods.selectCard(evt);
            methods.checkWinCondition();
          }
        }

      }.bind(this) );
    };

    methods.checkForReveals = function () {
      var flips = $( props.selectors.main ).not('.founded').length;
      return flips >= 2 ? false : true ;
    };

    methods.deselectAllFlippedCards = function  () {
      $('#deck').find('.flipped').not('.founded').removeClass('flipped');
    };

    methods.compareCard = function ( cardName, cardId ){
      var oldcard = props.oldcard;

      if(oldcard.cardName === null){
        oldcard.cardName = cardName;
        oldcard.unique   = cardId;

      } else {

        if(oldcard.cardName === cardName){
          alert('Good Catch!');
          $('#deck').find('.flipped').not('.founded').addClass('founded');
        } else {
          alert('Sorry, try again!');
          window.setTimeout(  methods.deselectAllFlippedCards.bind(this) , 200 );
        }

        oldcard.cardName = null;
        oldcard.unique = null;
      }

    };

    methods.selectCard = function (evt) {
      var el       = evt.target
        , oldcard  = props.oldcard
        , cardName = el.parentNode.dataset.cardName
        , cardId   = el.parentNode.dataset.cardUnique;

      if(cardId !== oldcard.unique){
        $(el.parentNode).addClass('flipped');
        methods.compareCard(cardName, cardId);
      }

    };

    // Exposed API
    return {
        init: methods.initialize
    };

})(window, myMemGame || {} );

// Initialize
myMemGame.CardsController.init();
