let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
    return index === correctAnswerIndex;
}


function getCorrectAnswer() {
    return options[correctAnswerIndex];
}

let question = {
    title:'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,

    isAnswerCorrect(index) {
        return index === quetion.correctAnswerIndex;
    },
    getCorrectAnswer() {
        return question.options[correctAnswerIndex];
    },
}; 

let question2 = {
    title:'Where is the capital of Jamaica',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,

    isAnswerCorrect(index) {
        return index === quetion2.correctAnswerIndex;
    },
    getCorrectAnswer() {
        return question2.options[correctAnswerIndex];
    },
}; 

function createQuestion(title, options, correctAnswerIndex) {
    let question ={};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    question.isAnswerCorrect = function(index) {
        return index === question.correctAnswerIndex;
    };
    question.getCorrectAnswer = function(){
        return question.options[question.correctAnswerIndex]
    };
    return question;
}

const firstQuestion = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);

const secondQuestion = createQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    2
);