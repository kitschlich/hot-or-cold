$(document).ready(function(){
	
	var number,
		guess,
		guessLimit,
		guessDifference,
		lastGuessDifference;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(newGame);

  	$("form").submit(function(e) {
  		checkNumber($('input').val());
  		$('input').val('');
  		e.preventDefault();
  	});

  	function generateNumber() {
  		return Math.floor((Math.random() * 100) + 1);
  	}

  	function checkNumber(userNum) {
  		var guessLimit = 20;
  		var guessDifference = Math.max(userNum, number) - Math.min(userNum, number);

  		if (guessDifference == 0) {
  			$('#feedback').html('You got it!');
  		} else if (!lastGuessDifference) {
	  		if (guessDifference > guessLimit) {
	  			$('#feedback').html('Cold!');
	  		} else if (guessDifference < guessLimit) {
	  			$('#feedback').html('Hot!');
	  		}
	  		lastGuessDifference = guessDifference;
  		} else {
  			if (guessDifference > lastGuessDifference) {
  				$('#feedback').html('Colder :(');
  			} else if (guessDifference < lastGuessDifference) {
  				$('#feedback').html('Warmer :)');
  			} else if (guessDifference == lastGuessDifference) {
  				$('#feedback').html('Same guess.');
  			}
  			lastGuessDifference = guessDifference;
  		}
  	  	
  	  	$('#count').html(parseInt($('#count').html())+1);
  	  	$('#guessList').append('<li>' + userNum + '</li>');
  	}

  	function newGame() {
  		number = generateNumber();
  	}

  	newGame();

});
