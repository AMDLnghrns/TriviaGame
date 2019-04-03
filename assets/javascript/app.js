// total up scores at the end
// add functionality to "I am finished" button
// set time X to 120 seconds

// Upon button click:
$("#start").on("click", function () {
    // Set timer to run X seconds
    delayButtonAlert = setTimeout(function () {


        //After X seconds, replace div with "Final Values"
        complete()
        // Set X 
    }, 1000 * x);
    $("#Game").html('<div class="container">Question 1: What color is a panda?<br /><br /><input type="radio" id="mc" name="question1" value=0> Brown and White <br /><input type="radio" id="mc" name="question1" value=0> Black and Brown <br /><input type="radio" id="mc" name="question1" value=1> Black and White <br /><input type="radio" id="mc" name="question1" value=0> Black and Yellow <br /><br />Question 2: How many states are there in the United States of America?<br /><br /><input type="radio" id="mc" name="question2" value=0> 13 <br /><input type="radio" id="mc" name="question2" value=0> 25 <br /><input type="radio" id="mc" name="question2" value=1> 50 <br /><input type="radio" id="mc" name="question2" value=0> 52 <br /><br />Question 3: Who invented the telephone?<br /><br /><input type="radio" id="mc" name="question3" value=1> Alexander Graham Bell <br /><input type="radio" id="mc" name="question3" value=0> Leonardo da Vinci <br /><input type="radio" id="mc" name="question3" value=0> Albert Einstein <br /><input type="radio" id="mc" name="question3" value=0> Thomas Edison <br /><br />Question 4: What horoscope sign has a crab?<br /><br /><input type="radio" id="mc" name="question4" value=0> Capricorn <br /><input type="radio" id="mc" name="question4" value=0> Aries <br /><input type="radio" id="mc" name="question4" value=0> Leo <br /><input type="radio" id="mc" name="question4" value=1> Cancer <br /><br />Question 5: What is the name of a famous detective who smoked a pipe and played the violin?<br /><br /><input type="radio" id="mc" name="question5" value=0> Hercule Poirot <br /><input type="radio" id="mc" name="question5" value=1> Sherlock Holmes <br /><input type="radio" id="mc" name="question5" value=0> Veronica Mars <br /><input type="radio" id="mc" name="question5" value=0> Thomas Magnum <br /><br />Question 6: Which ocean is the largest?<br /><br /><input type="radio" id="mc" name="question6" value=1> Pacific Ocean <br /><input type="radio" id="mc" name="question6" value=0> Atlantic Ocean <br /><input type="radio" id="mc" name="question6" value=0> Arctic Ocean <br /><input type="radio" id="mc" name="question6" value=0> Indian Ocean <br /><br />Question 7: How many squares are there on a chess board?<br /><br /><input type="radio" id="mc" name="question7" value=0> 81 <br /><input type="radio" id="mc" name="question7" value=0> 49 <br /><input type="radio" id="mc" name="question7" value=1> 64 <br /><input type="radio" id="mc" name="question7" value=0> 100 <br /><br />Question 8: What is the name of the currency in Japan?<br /><br /><input type="radio" id="mc" name="question8" value=0> Rupee <br /><input type="radio" id="mc" name="question8" value=0> Euro <br /><input type="radio" id="mc" name="question8" value=0> Dollar <br /><input type="radio" id="mc" name="question8" value=1> Yen <br /><br />Question 9: What country gave Florida to the USA in 1891?<br /><br /><input type="radio" id="mc" name="question9" value=0> France <br /><input type="radio" id="mc" name="question9" value=1> Spain <br /><input type="radio" id="mc" name="question9" value=0> Mexico <br /><input type="radio" id="mc" name="question9" value=0> Canada <br /><br />Question 10: Who invented the electric light bulb?<br /><br /><input type="radio" id="mc" name="question10" value=1> Thomas Edison <br /><input type="radio" id="mc" name="question10" value=0> Leonardo da Vinci <br /><input type="radio" id="mc" name="question10" value=0> Albert Einstein <br /><input type="radio" id="mc" name="question10" value=0> Alexander Graham Bell <br /><br />Question 11: What colors mix together to make purple?<br /><br /><input type="radio" id="mc" name="question11" value=0> Red and Yellow <br /><input type="radio" id="mc" name="question11" value=1> Red and Blue <br /><input type="radio" id="mc" name="question11" value=0> Red and Black <br /><input type="radio" id="mc" name="question11" value=0> Red and Orange <br /><br />Question 12: What is the first letter on a typewriter?<br /><br /><input type="radio" id="mc" name="question12" value=0> A <br /><input type="radio" id="mc" name="question12" value=0> Z <br /><input type="radio" id="mc" name="question12" value=1> Q <br /><input type="radio" id="mc" name="question12" value=0> X <br /><br /><center><button type="button" id = "finish" class="btn btn-primary">I am finished!</button></center><br /></div>');

    function complete() {
        var answers = $(".container").children("input:checked");
        clearTimeout(delayButtonAlert);
        $("#Game").html('<center><p>All Done!</p></center><br /><span id = "Score"></span>');
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].value == 0) {
                incorrectAnswers++;

            } else {
                correctAnswers++;
            }
        }
        unanswered = 12 - (correctAnswers + incorrectAnswers);
        $('#Score').html('<p>Correct: ' + correctAnswers + '</p><p>Incorrect: ' + incorrectAnswers + '</p><p>Unanswered: ' + unanswered + '</p>');
    }

    $('#finish').on("click", function () {
        complete();
    });
});


// Build out a place to calculate the score
var incorrectAnswers = 0;
var correctAnswers = 0;
var unanswered = 0;
var x = 120;

