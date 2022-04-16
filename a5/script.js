// set up text to print, each item in array is new line
var aText = new Array(
    "Hi and Welcome to The Internet.", 
    "Let's see how the Internet was born.",
    "Who invented the Internet?",
    "No one person invented the internet.",
    "Scientists and engineers created",
    "the ARPANET together.Later, other",
    "inventors’ creations paved the",
    "way for the web as we know it today.",
    "In 1964 Paul Baran proposed a",
    "communication network with no central", 
    "command point. If one point was", 
    "destroyed, all surviving points would",
    "still be able to communicate with",
    "each other in the war. He called",
    "this a distributed network.",




    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    typewriter();
