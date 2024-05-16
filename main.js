let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
//포커스 주면 입력한 숫자 사라짐
userInput.addEventListener("focus", function() { 
    userInput.value = "";
});

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value; 

    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요.";
        return; //함수 종료
    } 
    
    if(history.includes(userValue)) { //이미 입력한 숫자인 경우 에러 메시지 출력 후 함수 종료
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
        return;
    }

    chances -- ;
    chanceArea.textContent = `남은기회:${chances}번`; //텍스트가 아니라 변수 값이 들어옴
    console.log("chance", chances);

    if (userValue < computerNum) {
        resultArea.textContent = "Up!";
       
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!";
        
    } else {
        resultArea.textContent = "맞췄습니다~";
        gameOver = true; 
    }

    history.push(userValue);
    console.log(history);

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = "";

    pickRandomNum();

    resultArea.textContent = "결과값이 여기 나옵니다!";
}

pickRandomNum(); //함수 호출
