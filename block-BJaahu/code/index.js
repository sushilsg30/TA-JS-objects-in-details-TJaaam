// ### For single question we need the following data and methods:

// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
// - Create using class
// - Write test by creating two objects also test both methods.

// ### To test use the following data

// You can use the data given below. You will also have to change the name of the function while calling them.

// ```js
// let firstQuestion = new Question(
//   'Where is the capital of Jordan',
//   ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   1
// );
// let secondQuestion = new Question(
//   'Where is the capital of Jamaica',
//   ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//   2
// );
// ```
//Factory Pattern
// function createQuestion(title, options, correctAnswerIndex){
//     let question = {};
//     question.title = title;
//     question.options = options;
//     question.correctAnswerIndex = correctAnswerIndex;

//     question.isAnswerCorrect = function(index){
//         return index === correctAnswerIndex;
        
//     };

//     question.getCorrectAnswer = function(){
//         return options[correctAnswerIndex];
//     }

//     return question;
// }

//ProtoTypal Pattern

// function CateQuestion(title, options, correctAnswerIndex){

//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
// }

// CreateQuestion.prototype = {
//     isAnswerCorrect: function(index){
//         return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer: function(){
//         return this.options[this.correctAnswerIndex];
//     },
// }
//
//Class Pattern

class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }

    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}



//Test

let firstQuestion  = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);

let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

// Test For QuestionOne
console.group(firstQuestion.title);
console.log(firstQuestion.title);
console.log(firstQuestion.options);
console.log(firstQuestion.isAnswerCorrect(2));
console.log(firstQuestion.getCorrectAnswer());

console.group(secondQuestion.title);
console.log(secondQuestion.title);
console.log(secondQuestion.options);
console.log(secondQuestion.isAnswerCorrect(2));
console.log(secondQuestion.getCorrectAnswer());


