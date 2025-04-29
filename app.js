var questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
    // CSS Questions
    {
        question: "What does CSS stand for?",
        option1: "Colorful Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Creative Style Sheets",
        correctOption: "Cascading Style Sheets",
    },
    {
        question: "Which property is used to change the background color?",
        option1: "bgcolor",
        option2: "color",
        option3: "background-color",
        correctOption: "background-color",
    },
    {
        question: "How do you insert a comment in CSS?",
        option1: "// this is a comment",
        option2: "/* this is a comment */",
        option3: "<!-- this is a comment -->",
        correctOption: "/* this is a comment */",
    },
    {
        question: "Which CSS property controls the text size?",
        option1: "font-style",
        option2: "text-size",
        option3: "font-size",
        correctOption: "font-size",
    },
    // JavaScript Questions
    {
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "<javascript>",
        option2: "<js>",
        option3: "<script>",
        correctOption: "<script>",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        option1: "msg('Hello World')",
        option2: "alert('Hello World')",
        option3: "alertBox('Hello World')",
        correctOption: "alert('Hello World')",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        option1: "onmouseclick",
        option2: "onchange",
        option3: "onclick",
        correctOption: "onclick",
    },
    {
        question: "How do you create a function in JavaScript?",
        option1: "function myFunction()",
        option2: "def myFunction()",
        option3: "create function myFunction()",
        correctOption: "function myFunction()",
    }
];


var htmlques = document.getElementById('ques');
var htmlopt1 = document.getElementById('opt1');
var htmlopt2 = document.getElementById('opt2');
var htmlopt3 = document.getElementById('opt3');
var getBtn = document.getElementById('btn');
var timerDisplay = document.getElementById('timer');

var index = 0;
var score = 0;
var totalSeconds = 15 * 60;
var timer;

function startTimer() {
    timer = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            endQuiz("Time's Up!");
        } else {
            totalSeconds--;
            var minutes = Math.floor(totalSeconds / 60);
            var seconds = totalSeconds % 60;
            if (seconds < 10) seconds = "0" + seconds;
            if (minutes < 10) minutes = "0" + minutes;
            timerDisplay.innerHTML = minutes + ":" + seconds;
        }
    }, 1000);
}

function nextQuestion() {
    var getInputs = document.getElementsByName('quiz');
    var selected = "";

    for (var i = 0; i < getInputs.length; i++) {
        if (getInputs[i].checked) {
            selected = getInputs[i].nextElementSibling.innerText;
            if (selected === questions[index - 1].correctOption) {
                score++;
            }
        }
        getInputs[i].checked = false;
    }

    if (index >= questions.length) {
        clearInterval(timer);
        endQuiz("Quiz Completed!");
    } else {
        htmlques.innerText = questions[index].question;
        htmlopt1.innerText = questions[index].option1;
        htmlopt2.innerText = questions[index].option2;
        htmlopt3.innerText = questions[index].option3;
        index++;
    }

    getBtn.disabled = true;
}

function btnWork() {
    getBtn.disabled = false;
}

function endQuiz(title) {
    Swal.fire({
        title: title,
        text: "Your Score: " + score + " / " + questions.length,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Restart"
    }).then(function (result) {
        if (!result.isConfirmed) {
            location.reload();
        }
    });
}

// Initialize
nextQuestion();
startTimer();
