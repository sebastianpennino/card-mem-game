( function( window, MG, undefined ) {
  
  function MyModule() {

    var rules = {
      'maxReveals' : 2
    }

    this.init = function init() {
      var targetEl = document.getElementById( 'deck' );
      // Adding event handlers
      MG.utils.addEvent(targetEl, "click", function(e){
        // Test for the maximum number of revealed cards
        console.log(  e.target  )

        if(this.checkForReveals() === true){
          this.selectCard(e);
          this.report(e);
        }

      }.bind(this) );
    }

    this.checkForReveals = function checkForReveals(){
      var flips = $('#deck').find('.card.flipped').length;
      if( flips >= rules.maxReveals ) {
        return false
      } else {
        return true
      }
    }
    
    this.report = function report(){
      // will report duplicates
      var flips = $('#deck').find('.flipped').length;
      var founds = $('#deck').find('.found').length;
      console.log('flips: '+flips+' founds: '+founds);
    }

    this.selectCard = function selectCard(evt) {
      console.log(this, evt)
      evt.preventDefault();
      var el = evt.target;
      $(el.parentNode).toggleClass('flipped');
    };
    
  }
  
  // expose access to the constructor
  window.myMemGame.MyModule = MyModule;
  
} )( window, myMemGame );
 
// example usage
var myModule = new myMemGame.MyModule();
myModule.init();
