$(document).ready(function(){
	var yourScore = 0;
	var randomNumber = 0;
	var counter = 0;
	var crystals= [];

	// console.log("I'm in the game now")

	var randomNumber = Math.floor((Math.random() * 10) + 1);
		$("#randomNumber").append(randomNumber);


	function crystalNumber(){
		for (var i = 0; i < 4; i++) {
			crystals[i]= Math.floor((Math.random() * 10) + 1)
			console.log(crystals[i]);
		}
	};
	crystalNumber();

	function newRound(){
		randomNumber = Math.floor((Math.random() * 10) + 1);
		$("#randomNumber").empty();
		$("#randomNumber").append("Random Number: " + randomNumber);
		counter = 0;
		$("#yourScore").text("Your Score: " + counter);
	};	
	newRound();

	function testScore(){
	    console.log("test1");

	    if (counter == randomNumber){
	        alert("You Won!");
	        wins++;
	       $("#score").text("wins: " + wins);
	        newGame();
	    }else if (counter > randomNumber){
	       alert("you lose!");
	       loses++;
	        $("#score").text("Loses: " + loses);
	        newGame();
		}
	        
	};

	$(document).on('click','#lightpink',function(){
		// alert('it works');
		console.log('clicked light pink')

		$("#lightpink").data('num',crystals[0]);

		counter = counter + crystals[0];
		$("#yourScore").text("Your Score: " + counter);
		testScore(); 
	})

});




//}
 //  function newRound(){
   //     randomNumber = Math.floor((Math.random() * 10) + 1);
     //   $("#randomNumber").empty();
       // $("#randomNumber").append("Random Number: " + randomNumber);
       //var counter = 0;
        //$("#yourScore").text("Your Score: " + counter);
   // };


    //function testScore(){
      //  console.log("test1");

        //if (counter == randomNumber){
          //  alert("You Won!");
            //wins++;
           // $("#score").text("wins: " + wins);
        //    newGame();
       //  }else if (counter > randomNumber){
        //    alert("you lose!");
         //   loses++;
        //    $("#score").text("Loses: " + loses);
         //   newGame();
        
      //  }
        
   // };
//testScore();
//newRound();

//function randomNumberGenerator(stone) {
//var stone =Math.floor((Math.random()*10)+1);
//console.log(stone);}



//for (i = 0; i < crystals.length; i++) { 
  //  randomNumberGenerator() = crystals[i];
//}

//randomNumberGenerator() = crystal1
//console.log(crystal1)

//}

 