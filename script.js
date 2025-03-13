const Questions = [
    {
        q: "Fill in the blank: How many Super Bowls did the Raiders win _____.",
        a: [{text: "1.", isCorrect: false},
            {text: "4.", isCorrect: false},
            {text: "3.", isCorrect: true},
            {text: "6.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: When were the Raiders founded _____.",
        a: [{text: "1980.", isCorrect: false},
            {text: "1960.", isCorrect: true},
            {text: "2000.", isCorrect: false},
            {text: "1940.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: How many AFC championships have the Raiders won _____.",
        a: [{text: "4.", isCorrect: true},
            {text: "2.", isCorrect: false},
            {text: "5.", isCorrect: false},
            {text: "0.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: How many seasons do the Raiders have _____.",
        a: [{text: "51.", isCorrect: false},
            {text: "60.", isCorrect: false},
            {text: "40.", isCorrect: false},
            {text: "65.", isCorrect: true},
           ]
    },
    {
        q: "Fill in the blank: What are the Raiders main team colors _____.",
        a: [{text: "Orange and Black.", isCorrect: false},
            {text: "Red and Blue.", isCorrect: false},
            {text: "Silver and Black.", isCorrect: true},
            {text: "Purple and Green.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: Who was their winningest coach _____.",
        a: [{text: "John Madden.", isCorrect: True},
            {text: "Hue Jackson.", isCorrect: false},
            {text: "Tom Flores.", isCorrect: False},
            {text: "Antonio Pierce.", isCorrect: false},
           ]
    },
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
