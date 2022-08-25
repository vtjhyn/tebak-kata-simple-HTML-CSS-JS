const wordText = document.querySelector(".words");
const hintText = document.querySelector(".hint span");
const inputField = document.querySelector("input");
const refb = document.querySelector(".refresh-word");
const checkb = document.querySelector(".check-word");
const timet = document.querySelector(".time b")
let correctword,timer ;

const Timer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() =>{
        if(maxTime>0){
            maxTime--;
            return timet.innerText = maxTime;
        }
        clearInterval(timer);
        alert ('WAKTU HABIS !!!');
        initGame();
    },1000)
}

const initGame = () => {
    Timer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for ( let i=wordArray.length-1; i>0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText =randomObj.hint;
    correctword = randomObj.word.toLocaleLowerCase();
    
}   
initGame();

const cbtn =() => {
    let inp = inputField.value.toLocaleLowerCase();
    if( inp !== correctword) return alert('WOYY SALAH !!!');
        alert('BENARRR')
        initGame();
    
}

refb.addEventListener("click", initGame);
checkb.addEventListener("click",cbtn)
