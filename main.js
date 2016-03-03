//----- Load nav bar location first into JS--//
//$("#navbar ul").css({top: 0});




$(document).ready(function() {
  $("a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  // --------------------------------------------------------------------------------------------
  // -------------------------------------- begin moving object function ------------------------
  // -------------------------------------------------------------------------------------------
  
  // setup variables to assign the array indexes to.
  var a = 0;
  var b = 0;
  //------------------------------------------
  
  // setup an array to push a dozen of our page offset values to.
  var offsetArray=[];
  // ------------------------
  var navBarLocation=0;
  $(window).scroll(function(){
    console.log("ass" + $("#navbar ul").css('top'));
    // Set the navbar to 10px fully extended and create an array that tracks the last 12 changes to offset.
    offsetArray.push(window.pageYOffset);
    if(offsetArray.length>2){
      offsetArray.shift(); 
    }
    
    
    a = Number(offsetArray[0]);
    b = Number(offsetArray[1]);
   
      
    console.log(offsetArray);
    
    //extend
    if(a>b && navBarLocation<0){
      navBarLocation+= 3
    }
    
    //retract
    if(a<b && navBarLocation>-50){
      navBarLocation=navBarLocation-2.5
    }
    if(window.pageYOffset<100){
      navBarLocation=0
    } 
    $("#navbar ul").css({top: navBarLocation});
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

});