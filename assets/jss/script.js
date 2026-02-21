const startButton = document.getElementById('Start-btn');
const questionElt = document.getElementById('question');
const answerbuttons = document.getElementById('radiocontainer');
const nextButton = document.getElementById('next-btn');
const quizcontainer = document.getElementById('quiz');
const backButton= document.getElementById('back-btn');
let CurrentQuestionIndex = 0;
let correctans = "false"; 
let figure =0;
let shuffledQuestions;  
let selected ;
let PreviousQuestionIndex = 0;
let ans=[];

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () 
{   window.alert("Welcome to the Quiz!");
	document.getElementById('quiz').style.display = "none"
	document.getElementById('next-btn').style.visibility = true;
	startButton.addEventListener('click', StartQuiz);
	backButton.addEventListener('click', () => {
	if(CurrentQuestionIndex>0)
   {
	CurrentQuestionIndex--;
	showQuestion();
   }
   });
	nextButton.addEventListener('click', () => {
	document.getElementById('score').innerText = 'SCORE:' + figure;
    if(ans[CurrentQuestionIndex]==undefined )
	{  	
	document.getElementById('next-btn').style.disabled=true;
	}
	else
    {
	CurrentQuestionIndex++;
    document.getElementById('next-btn').style.disabled=false;
    if(CurrentQuestionIndex < questions.length)
	{ 
	showQuestion();
    }
	else
	{
    ShowScore();
	}
	} 
	 
});
}); 
  
    function ResetQuestion()
	{  
	//Clear The Answer Grid
    while (answerbuttons.firstChild)
    {
    answerbuttons.removeChild(answerbuttons.firstChild);
	}
	} 
    let snapshotQuestion;	
    let currentquestion;
    let questions = [{
        question: 'What does SQL Stand for?',
        answers: [{
                text: 'Structured Question Language',
                correct: false
            },
            {
                text: 'Strong Question Language',
                correct: false
            },
            {
                text: 'Structured Query Language',
                correct: true
            },
            {
                text: 'Structured Question Language',
                correct: false
            },
        ],
		selectval: false
    },
    {
        question: 'Which SQL Statement is used to extract Data from a Database?',
        answers: [{
                text: 'EXTRACT',
                correct: false
            },
            {
                text: 'GET',
                correct: false
            },
            {
                text: 'OPEN',
                correct: false
            },
            {
                text: 'SELECT',
                correct: true
            },
        ],
		selectval: false
    },
	    {
        question: 'Which SQL Statement is used to Delete Data from database?',
        answers: [{
                text: 'DELETE',
                correct: true
            },
            {
                text: 'REMOVE',
                correct: false
            },
            {
                text: 'COLLAPSE',
                correct: false
            },
            {
                text: 'REMOVE',
                correct: false
            },
        ],
		selectval: false
    },
{
        question: 'Which SQL Statement is used to Insert new data in a Database?',
        answers: [{
                text: 'INSERT INTO',
                correct: true
            },
            {
                text: 'ADD RECORD',
                correct: false
            },
            {
                text: 'INSERT NEW',
                correct: false
            },
            {
                text: 'ADD NEW',
                correct: false
            },
        ],
		selectval: false
    },
{
        question: 'How do you select column name FirstName from table Persons?',
        answers: [{
                text: 'SELECT FirstName FROM Persons',
                correct: true
            },
            {
                text: 'EXTRACT FirstName FROM Persons',
                correct: false
            },
            {
                text: 'SELECT Persons.FirstName',
                correct: false
            },
            {
                text: 'SELECT Persons_FirstName',
                correct: false
            },
        ],
		selectval: false
    },
	{
        question: 'How do you select all columns from a table name Persons?',
        answers: [{
                text: 'SELECT * FROM Persons',
                correct: true
            },
            {
                text: 'EXTRACT FirstName FROM Persons',
                correct: false
            },
            {
                text: 'SELECT Persons.FirstName',
                correct: false
            },
            {
                text: 'SELECT Persons_FirstName',
                correct: false
            },
        ],
		selectval: false
    },
	{
        question: 'How can you delete the records where FirstName is Peter in the Persons Table',
        answers: [{
                text: 'DELETE FROM Persons WHERE Firstname = Peter',
                correct: true
            },
            {
                text: 'DELETE ROW FirstName = Peter FROM Persons',
                correct: false
            },
            {
                text: 'Delete FirstName=Peter from Persons',
                correct: false
            },
            {
                text: 'Delete * from Persons',
                correct: false
            },
        ],
		selectval: false
    },
	{
        question: 'Which SQL can return you the number of records in the Person table?',
        answers: [{
                text: 'SELECT NO(*) FROM Persons',
                correct: false
            },
            {
                text: 'SELECT LEN(*) FROM Persons',
                correct: false
            },
            {
                text: 'SELECT COLUMNS(*) FROM Persons',
                correct: false
            },
            {
                text: 'SELECT COUNT(*) FROM Persons',
                correct: true
				
            },
        ],
		selectval: false
	},
		{
        question: 'Which is the most common type of join in SQL?',
        answers: [
		   {
                text: 'INSIDE JOIN',
                correct: false
            },
            {
                text: 'INNER JOIN',
                correct: true
            },
            {
                text: 'JOINED',
                correct: false
            },
            {
                text: 'JOINED TABLE',
                correct: false
            },
        ],
		selectval: false
    },
	{
        question: 'Which operator is used to select values within a range?',
        answers: [
		   {
                text: 'BETWEEN',
                correct: true
            },
            {
                text: 'WITHIN',
                correct: false
            },
            {
                text: 'RANGE',
                correct: false
            },
            {
                text: 'RANGE BETWEEN',
                correct: false
            },
        ],
		selectval: false
    },
	{
        question: 'Which operator is used to search for a particular pattern in a column?',
        answers: [
		   {
                text: 'LIKE',
                correct: true
            },
            {
                text: 'GET',
                correct: false
            },
            {
                text: 'BETWEEN',
                correct: false
            },
            {
                text: 'IN BETWEEN',
                correct: false
            },
        ],
		selectval: false
    },
	];

function StartQuiz()
{
    document.getElementById('radiocontainer').style.display = "block";
	document.getElementById('quiz').style.display = "block";
    document.getElementById('next-btn').style.display= "inline-block";
	questions.sort(() => Math.random() - 0.5);
    //ResetQuestion(CurrentQuestionIndex);
	CurrentQuestionIndex =0;
	score=0;
	ans=[];
	figure= 0;
	selected=false;
	nextButton.innerHTML="Next";
	document.getElementById('score').innerText = 'SCORE:' + score;
	showQuestion();
}
function showQuestion()
{
	ResetQuestion();
	PreviousQuestionIndex = CurrentQuestionIndex;
	//Get The Question from the Array And Append to the answer grid
	currentquestion = questions[CurrentQuestionIndex];
	questionElt.innerHTML =currentquestion.question;
	currentquestion.answers.forEach((answer,index)=> {
    const label = document.createElement("label");
	const radio = document.createElement("input");
	radio.type = "radio";
	radio.name = "answer";
	radio.value = index;
	const span = document.createElement("span");
	span.textContent= answer.text;
    label.appendChild(radio);
	label.appendChild(span);
	answerbuttons.appendChild(label);
	const breakDiv = document.createElement('div');
    breakDiv.className = 'flex-break';
    answerbuttons.appendChild(breakDiv);
    radio.addEventListener("click",() => selectAnswer(radio,answer));
	});
	document.querySelectorAll('input[name="answer"]')[ans[CurrentQuestionIndex]].checked=true;
    selected=  document.querySelectorAll('input[name="answer"]')[ans[CurrentQuestionIndex]].checked ;
	}
 	
function selectAnswer(radio,answer)
{ 
	selected = document.querySelector('input[name="answer"]:checked');
	const correct = answer.correct;
	if(correct && ans[CurrentQuestionIndex]==undefined)
	 {
    radio.classList.add("ansbtn"); 
    radio.style.backgroundColor="#003A8F";
    questions[selected.value].selectval= true;
	ans[CurrentQuestionIndex]= selected.value;
	correctans = "true";
	figure++;
	}
	else if (!correct && ans[CurrentQuestionIndex]==undefined)
	{ 
    questions[selected.value].selectval= true;
	ans[CurrentQuestionIndex]= selected.value;
    radio.classList.add("ansbtn");
	radio.style.backgroundColor="#dc3545";
	correctans = "false";
	}
	Array.from(answerbuttons.children).forEach((btn)=>{
	radio.classList.add("ansbtn");
	btn.disabled=true;
	if(btn.innerText===questions[CurrentQuestionIndex].answers.find(a=>a.correct).text)
    {
	btn.style.backgroundColor= "#003A8F";
	}
	});
 } 
	 
   function previousQuestion()
{
	ResetQuestion();
	//Get The Question from the Array And Append to the answer grid
	let currentquestion = questions[CurrentQuestionIndex];
	questionElt.innerHTML =currentquestion.question;
	currentquestion.answers.forEach((answer,index)=> {
    const label = document.createElement("label");
	const radio = document.createElement("input");
	radio.type = "radio";
	radio.name = "answer";
	radio.value = index;
	const span = document.createElement("span");
	span.textContent= answer.text;
	label.appendChild(radio);
	radio.checked =currentquestion.selectval;
	label.appendChild(span);
	answerbuttons.appendChild(label);
	const breakDiv = document.createElement('div');
    breakDiv.className = 'flex-break';
    answerbuttons.appendChild(breakDiv);
	document.querySelectorAll('input[name="answer"]').forEach(r=>r.checked = false);
    if(answers[CurrentQuestionIndex] !== undefined)
	{
		document.querySelectorAll('input[name="answer"]')[answers[CurrentQuestionIndex]].checked=true;
	}
	});	
}

      
	 
  function ShowScore()
   {  
    ResetQuestion();
	let TEXT = "YOU SCORED   " + figure;
   	document.getElementById('question').innerHTML = TEXT  +  " OUT OF "  +  CurrentQuestionIndex +" CLICK "+"START "+" AGAIN !!" ;
	//document.getElementById('answer-buttons').innerText = " CLICK "+"START TO"+" PLAY AGAIN " ;
    document.getElementById('next-btn').style.display = "none";
	document.getElementById('radiocontainer').style.display = "none";
	//document.getElementById('question').innerHTML = "  ";
    //("You Scored " + score + "in the Quiz Today out of 10");
    }

		






	
