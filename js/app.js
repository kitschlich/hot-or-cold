
$(document).ready(function(){
	
	var number;

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
  		e.preventDefault();
  	});

  	function newGame() {
  		number = generateNumber();
  		console.log('New game started with secret number: ' + number);
  	}

  	function generateNumber() {
  		return Math.floor((Math.random() * 100) + 1);
  	}

  	function checkNumber(userNum) {
  		var guessLimit = 20;
  		var guessDistance = Math.max(userNum, number) - Math.min(userNum, number);

  		console.log(guessDistance);

  		if (guessDistance == 0) {
  			$('#feedback').html('You got it!');
  		}
  		else if (guessDistance > guessLimit) {
  			$('#feedback').html('Cold!');
  		} else if (guessDistance < guessLimit) {
  			$('#feedback').html('Hot!');
  		}
  	  	
  	  	$('#count').html(parseInt($('#count').html()+1));
  	  	$('#guessList').append('<li>' + userNum + '</li>');
  	}

  	newGame();

});


