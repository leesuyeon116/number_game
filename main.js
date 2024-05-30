let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 7; //남은 기회
let userValueList = []; //유저가 입력한 숫자들 리스트

chanceArea.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
    //랜덤 숫자 뽑기
    computerNumber = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNumber);
}

function play() {
    //숫자 추축하기
    const userValue = userInput.value; 
    if(userValue < 1 || userValue > 100) {
        resultText.textContent = "1과 100사이 숫자를 입력";

        return; //함수 종료
    } 
    
    if(userValueList.includes(userValue)) { //이미 입력한 숫자인 경우 에러 메시지 출력 후 함수 종료
        resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
        
        return;
    }

    chances -- ;
    chanceArea.textContent = `남은기회:${chances}`; //텍스트가 아니라 변수 값이 들어옴
    userValueList.push(userValue);
    if (userValue < computerNumber) {
        resultAreaImg.src = 
            "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnB6ODhnMTkwanFzYXpkM3BqeXRvOXljODhjaDUxZHBsZTI5cjdrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9Ie9mRoRs0w3C0/giphy.gif";
        resultText.textContent = "Up!";
       
    } else if (userValue > computerNumber) {
        resultAreaImg.src = 
            "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZ0amV1dGR0bmRqZXZkdDY0ZmQzNTJ1dXp6MHRxYmZ1a3Foa3N0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9QHP4ADiUoc4Ao/giphy.gif";
        resultText.textContent = "Down!";
        
    } else {
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenMwNGR3d2Y2Y2EweXZncmZucnA2cmdyaDVtdXE0aGZzdWptaDV3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YFis3URdQJ6qA/giphy.gif"
        resultText.textContent = "와우~정답!";
        gameOver = true; 
    }

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function focusInput() {
    userInput.value = "";
}

function reset() {
    //리셋
    pickRandomNumber();
    userInput.value = "";
    resultAreaImg.src = "images/up&down.gif";
    resultText.textContent = "숫자를 맞추세요.";
    gameOver = false;
    playButton.disabled = false;
    chances = 7;
    chanceArea.innerHTML = `남은 기회:${chances}`;
    userValueList = [];
  }
  
  pickRandomNumber();
