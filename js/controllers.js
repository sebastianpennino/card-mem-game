( function( window, MG, undefined ) {
  "use strict";
  
  function CardsController() {

    this.init = function init() {
      var targetEl = document.getElementById( 'deck' );
      // Adding event handlers
      MG.utils.addEvent(targetEl, "click", function(evt){
        // Test for the maximum number of revealed cards
        evt.preventDefault();

        console.log(  evt.target.nodeName  );
        if(evt.target && evt.target.nodeName == "A"){
          if(this.checkForReveals() === true){
            this.selectCard(evt);
            this.stats();
          }
        }

      }.bind(this) );
    };

    this.checkForReveals = function checkForReveals(){
      var flips = $('#deck').find('.card.flipped').not('.founded').length;
      if( flips >= 2 ) {
        return false;
      } else {
        return true;
      }
    };

    var cardHistory = [];
    //var cardCache = [];
    var playerStats = {
      pairs        : 0, // Number of pairs
      misses       : 0, // Number of misses
      streak       : 0, // Continuous matchs
      inStreak     : 0, // Currently in a streak?
      maxStreak    : 0  // Max score of steak
    };
    
    this.stats = function stats(){
      console.log( playerStats );
      /*
      var flips = $('#deck').find('.flipped').length;
      var founds = $('#deck').find('.founded').length;
      console.log('flips: '+flips+' founds: '+founds);
      */
    };

    this.deselectAllFlippedCards = function(){
       $('#deck').find('.card.flipped').not('.founded').removeClass('flipped');
    };

    this.compareCard = function compareCard( cardName, cardId ){
      console.log('comparing: '+cardName+' with: '+oldcard.cardName);
      cardHistory.push( cardId+':'+cardName );

      if(oldcard.cardName === null){
        oldcard.cardName = cardName;
        oldcard.unique = cardId;
      } else {
        if(oldcard.cardName === cardName){
          /*
          playerStats.pairs++;
          if(playerStats.inStreak){
            playerStats.streak++;
            if(playerStats.streak < 3){
              alert('Excelent Match, you are in a streak of '+playerStats.streak+'!');
            } else {
              alert('You are on fire! (Streak of '+playerStats.streak+'!)');
            }
          } else {
            alert('Good Match!');
            playerStats.streak++;
            playerStats.inStreak = 1;
          }
          */
          $('#deck').find('.card.flipped').not('.founded').addClass('founded');
        } else {
          alert('Sorry, try again!');
          /*
          if(playerStats.streak > playerStats.maxStreak) {
            playerStats.maxStreak = playerStats.streak;
            alert('What a bummer, that was your max streak until now. ('+playerStats.maxStreak+' hits in a row)');
          }
          playerStats.misses++;
          playerStats.inStreak = 0;
          playerStats.streak = 0;
          */
          setTimeout(  this.deselectAllFlippedCards.bind(this) , 200 );
        }
        oldcard.cardName = null;
        oldcard.unique = null;
      }
      //cardCache[ cardId ] = cardName;
      //console.log( 'cardCache['+cardId+'] = '+cardName);
    };


    var oldcard = {
      cardName : null,
      unique : null
    };

    this.selectCard = function selectCard(evt) {
      //console.log(this, evt)

      var el = evt.target;
      var cardName = $(el.parentNode).data('cardName');
      var cardId = $(el.parentNode).data('cardUnique');

      if(cardId !== oldcard.unique){
        $(el.parentNode).addClass('flipped');
        this.compareCard(cardName, cardId);
        console.log(cardName, cardId);
      } else {
        console.log('same card clicked!');
      }
      
    };

    
  }
  
  // expose access to the constructor
  window.CardsController = CardsController;
  
} )( window, myMemGame );
 
// example usage
var cardsController = new CardsController();
cardsController.init();
