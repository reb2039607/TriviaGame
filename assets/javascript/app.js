$("#start").on("click", function(){
    // $("#subwrapper").remove();
    for(let i = 0; i<questions.length; i++) {
        $("#subwrapper").append('<h2>' + questions[i].question + '</h2>');

        for(let j = 0; j<questions[j].answers.length;j++){
            $("#subwrapper").append("<input type = 'radio' name = 'question- "+i+" ' value=' "+ questions[i].answers[j]+ "'>"+questions[i].answers[j])
        }
    }
})

var questions = [{
    question: "Which of these is not a PowerPuff Girl?",
    answers: ["Blossom", "Bubbles", "Butterscotch", "Buttercup"],
    correctAnswer: "Butterscotch"
},   {
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