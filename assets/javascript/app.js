$("#start").on("click", function () {
    game.start();
})

$(document).on("click", "#end", function(){
    game.done();
});

var questions = [{
    question: "Which of these is not a PowerPuff Girl?",
    answers: ["Blossom", "Bubbles", "Butterscotch", "Buttercup"],
    correctAnswer: "Butterscotch"
}, {
    question: "What do you call a group of cats?",
    answers: ["Flock", "Gang", "Litter", "Clowder"],
    correctAnswer: "Clowder"
}, {
    question: "How many bones do cats have?",
    answers: ["60", "180", "900", "230"],
    correctAnswer: "Butterscotch"
}, {
    question: "What year did Wayne's World come out?",
    answers: ["1993", "1991", "1990", "1992"],
    correctAnswer: "1992"
}, {
    question: "When did the first man land on the moon?",
    answers: ["July 20, 1969", "July 4, 1969", "July 20, 1956", "July 22, 1956"],
    correctAnswer: "July 20, 1969"
}, {
    question: "What is Garfield's favorite food?",
    answers: ["Spaghetti", "Salad", "Lasagna", "Pizza"],
    correctAnswer: "Lasagna"
}];

// timer = setInterval(game.countdown, 1000); 
const game = {
    correct: 0,
    incorrect: 0,
    counter: 10, //change back to 120
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter == 0) {
            alert("Time's up!");
            game.done();

        }
    },
    start: function () {

        timer = setInterval(game.countdown, 1000); 
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        $("#start").remove();

        for (let i = 0; i < questions.length; i++) {
            $("#subwrapper").append('<h2>' + questions[i].question + '</h2>');

            for (let j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type = 'radio' name = 'question- " + i + " ' value=' " + questions[i].answers[j] + "'>" + questions[i].answers[j])

            }
        }
        $("#subwrapper").append("<br><button id='end'>Done!</button>");
    },

    done: function () {
        
        $.each($("input[name='question-0]':checked"), function() {
            if($(this).val()==questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1]':checked"), function() {
            if($(this).val()==questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2]':checked"), function() {
            if($(this).val()==questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-3]':checked"), function() {
            if($(this).val()==questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4]':checked"), function() {
            if($(this).val()==questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-5]':checked"), function() {
            if($(this).val()==questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },

        result: function(){

            clearInterval(timer);
            $('#subwrapper h2').remove();

            $("#subwrapper").html("<h2>Great Job!</h2>");
            $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
            $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            $("#subwrapper").append("<h3>Unanswered: " + (questions.length-(this.incorrect + this.correct)) + "</h3>")

        }
}
