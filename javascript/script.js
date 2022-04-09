let holder1 = document.getElementById("num1");
let holder2 = document.getElementById("num2");
let answer_holder = document.getElementById("ans");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let scoreDiv = document.getElementById("score");
let main = document.getElementById("main");
let overlay = document.getElementById("overlay");

let answer = 0; 
let num1 = 0;
let num2 = 0; 
let dummy_answer1 = 0;
let dummy_answer2 = 0;
let score = 0;

function Play(){
    main.classList.toggle("hideMain");
    overlay.classList.toggle("showOverlay");
    generate_equation();
}

function generate_equation(){  //This Function will generate equation (1 + 1 = 2) and Options
    // let allAnswers = []; //Empty Array to store all options 
    // let randomAllAnswers = []; // Empty Array to store the random allAnswers (for Options to become random)
   
    //Creating random Num1 and Num2 for equation
    num1 = Math.floor(Math.random() * 11); 
    num2 = Math.floor(Math.random() * 11); 

    //Creating Random Dummy Option 
    dummy_answer1 = Math.floor(Math.random() * 21); 
    dummy_answer2 = Math.floor(Math.random() * 21); 
    //Correct Answer 
    answer = num1 + num2; 

    //Displaying The Number to the Html (num1 and num2)
    holder1.innerHTML = num1;
    holder2.innerHTML = num2;

    //This will check if the dummy answer is the same to the correct answer
    // if(dummy_answer1 === answer && dummy_answer2 === answer){ // If true it will generate another random numbers
    //     dummy_answer1 = Math.floor(Math.random() * 21); 
    //     dummy_answer2 = Math.floor(Math.random() * 21); 

    // }else{ //False 
    //    //It will store all the option (answers) to AllAnswers 
    //    allAnswers = [dummy_answer1, answer, dummy_answer2];

    //    for(i = allAnswers.length; i--;){ //This will randomize the elements of allAnswer elements and store the randomize elemnt to randomAllAnswer variable
    //        randomAllAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i+1)), 1) [0]);
    //    }
    //    //Display the random option (answers) to html (option1-3)
    //    option1.innerHTML = randomAllAnswers[0];
    //    option2.innerHTML = randomAllAnswers[1]; 
    //    option3.innerHTML = randomAllAnswers[2];
    // }
    console.log(dummy_answer1);
    console.log(dummy_answer2);
    console.log(answer);
    repeatChecker(answer,dummy_answer1,dummy_answer2);
}

function repeatChecker(answer1, dummy1, dummy2) { //This will check if the dummy answer is the same to the correct answer
   
    let allAnswers = []; //Empty Array to store all options 
    let randomAllAnswers = []; // Empty Array to store the random allAnswers (for Options to become random)


    if((dummy1 === answer1 || dummy2 === answer1) || (dummy1===dummy2)){ // If true it will generate another random numbers
        dummy_answer1 = Math.floor(Math.random() * 21); 
        dummy_answer2 = Math.floor(Math.random() * 21); 
        repeatChecker(answer1,dummy_answer1,dummy_answer2);
    } else { //False 
         //It will store all the option (answers) to AllAnswers 
         allAnswers = [dummy_answer1, answer, dummy_answer2];

         for(i = allAnswers.length; i--;){ //This will randomize the elements of allAnswer elements and store the randomize elemnt to randomAllAnswer variable
             randomAllAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i+1)), 1) [0]);
         }
         //Display the random option (answers) to html (option1-3)
         option1.innerHTML = randomAllAnswers[0];
         option2.innerHTML = randomAllAnswers[1]; 
         option3.innerHTML = randomAllAnswers[2];
    }
}




// It will Check If the User clicked the correct answer 
option1.addEventListener("click", function(){
    if(option1.innerHTML== answer){ //If True this will add 1 point to score and generate another equation
        correctAnswer();
        score++;
        scoreDiv.innerHTML = "Score: " + score;
        generate_equation();
    }else{
        wrongAnswer();
        // wrong()
    }
})

option2.addEventListener("click", function(){ //If True this will add 1 point to score and generate another equation
    if(option2.innerHTML== answer){
        correctAnswer();
        score++;
        scoreDiv.innerHTML = "Score: " + score;
        generate_equation();
    }else{
        wrongAnswer();
        // wrong()
    }
})

option3.addEventListener("click", function(){ //If True this will add 1 point to score and generate another equation
    if(option3.innerHTML== answer){
        correctAnswer();
        score++;
        scoreDiv.innerHTML = "Score: " + score;
        generate_equation();
    }else{
        wrongAnswer();
        // wrong()
    }
})

let video = document.getElementById("vid");

function wrong(){
    video.currentTime = 0;
    video.play(); 
    overlay.classList.toggle("showOverlay");
    document.getElementById("vid-div").classList.toggle("showVideo"); 
    score = 0; 
    scoreDiv.innerHTML = "Score: " + score;
}

function closed(){
    video.pause();
    document.getElementById("vid-div").classList.remove("showVideo"); 
    main.classList.toggle("hideMain");   
}


//For Audio

let track = document.createElement('audio');



//Audio Track Elements
let audioTrack = [
    {
        path: "media/correct.mp3"
    },

    {
        path: "media/wrong.mp3"
    },

];

function correctAnswer(){
    track.src = audioTrack[0].path;
    track.play();
}

function wrongAnswer(){
    track.src = audioTrack[1].path;
    track.play();
}
