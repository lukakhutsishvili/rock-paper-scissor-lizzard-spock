const rulesSection = document.querySelector(".rulessection");
const closeButton = document.querySelector(".close");
const choose = Array.from(document.querySelectorAll(".choose"));
const hovercolor = Array.from(document.querySelectorAll(".hover"));
const mainSection = document.querySelector(".mainsection");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const playSection = document.querySelector(".playsection")
const choosedDiv = document.querySelectorAll(".choosed");
const housePicked = document.querySelector(".rightside")
const computerChoice = document.querySelectorAll('.computer');
const final = document.querySelector(".modal");
const drawSection = document.querySelector(".draw");
const winSection = document.querySelector(".win");
const looseSection = document.querySelector(".loose");
const playAgainButton = document.querySelector(".playagain");
const scoreDiv = document.querySelector(".score");
const windivLeft = document.querySelector(".windiv");
const windivRight = document.querySelector(".windivright");
const windivSecond = document.querySelector(".windiv2");
const windivThird = document.querySelector(".windiv3");
const windivSecondRight = document.querySelector("#right2");
const windivThirdRight = document.querySelector("#right3");
let cpChoose;
let randomIndex;
let chooseIndex;
let first;
let second;
let score = 0;
let z = 1;
let screenWidth;



choose.forEach((element, index)=>{

        element.addEventListener("click",()=>{
            mainSection.style.display = "none";
            playSection.style.display = "flex";
            choosedDiv[index].style.display = "grid";

            screenWidth = screen.width;
            if(screenWidth >= 1366){
                playSection.style.margin = "72px 395px 0px 347px";
            }else if(screenWidth < 1366){
                playSection.style.margin = "67px 22px 245px 29px";
            }

            setTimeout(()=>{
                for(let i = 0; i < 5; i++){
                    first = setTimeout(()=>{
                        computerChoice[i].style.display = "grid"
                    }, i * 100);
                }
            },500);

            randomIndex =  Math.floor(Math.random() * 5);
            second = setTimeout(() => {
                hideCpChoosed();
                cpChoose = computerChoice[randomIndex];
                computerChoice[randomIndex].style.display = "grid";
                cpChoose.style.zIndex = 1;
                
                if(screenWidth >= 1366){
                    playSection.style.margin = "72px 203px 0px 250px";
                }else if(screenWidth < 1366){
                    playSection.style.margin = "67px 22px 245px 29px";
                }

                if(index == randomIndex){
                    draw();
                }else if(index == 0){
                    if(randomIndex == 1 || randomIndex == 3){
                        win();
                    }else{
                        loose();
                    }
                }else if(index == 1){
                    if(randomIndex == 2 || randomIndex == 4){
                        win();
                    }else{
                        loose();
                    }
                }else if(index == 2){
                    if(randomIndex == 3 || randomIndex == 0){
                        win();
                    }else{
                        loose();
                    }
                }else if(index == 3){
                    if(randomIndex == 4 || randomIndex == 1){
                        win();
                    }else{
                        loose();
                    }
                }else if(index == 4){
                    if(randomIndex == 0 || randomIndex == 2 ){
                        win();
                    }else{
                        loose();
                    }
                }

            },1000);

            playAgainButton.addEventListener("click",()=>{
                cpChoose.style.display = "none";
                cpChoose.style.zIndex = 0;
                playSection.style.display = "none";
                mainSection.style.display = "flex";
                choosedDiv[index].style.display = "none";
                hideAllChoosed();
                windivLeft.classList.remove("windivanimate");
                windivRight.classList.remove("windivanimate");
                windivSecond.classList.remove("windiv2animate");
                windivThird.classList.remove("windiv3animate");
                windivSecondRight.classList.remove("windiv2animate");
                windivThirdRight.classList.remove("windiv3animate");
                final.classList.remove("animatefinal");
                if(screenWidth >= 1366){
                    playSection.style.margin = "72px 203px 0px 250px";
                }else if(screenWidth < 1366){
                    playSection.style.margin = "67px 22px 245px 29px";
                }        
 
        })
    });
});



const draw = () =>{
    winSection.style.display = "none";
    looseSection.style.display = "none";
    drawSection.style.display = "block";
    final.classList.add("animatefinal");
    final.style.display = "flex";
    score = score;
}
const win = () =>{
    drawSection.style.display = "none";
    looseSection.style.display = "none";
    winSection.style.display = "block";
    final.classList.add("animatefinal");
    final.style.display = "flex";
    windivSecond.classList.add("windiv2animate");
    windivThird.classList.add("windiv3animate");
    windivLeft.classList.add("windivanimate");
    score++;
    scoreDiv.innerHTML = score;
    
}
const loose = () =>{
    drawSection.style.display = "none";
    winSection.style.display = "none";
    looseSection.style.display = "block";
    final.classList.add("animatefinal");
    final.style.display = "flex";
    windivRight.classList.add("windivanimate");
    windivSecondRight.classList.add("windiv2animate");
    windivThirdRight.classList.add("windiv3animate");
    if(score > 0){
        score--;
    }
    scoreDiv.innerHTML = score;
}
choose.forEach((element, index)=>{
    element.addEventListener("mouseover", ()=>{
        hovercolor[index].style.display = "flex";
        hovercolor[index].style.transition = "background-color 0.4s ease"
        hovercolor[index].style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    })
    element.addEventListener("mouseout", ()=>{
        hovercolor[index].style.backgroundColor = "transparent";
    })
})


closeButton.addEventListener("click", ()=>{
    rulesSection.style.display = "none";
})

const rules = () =>{
    rulesSection.style.display = "grid";
}


const hideAllChoosed = () =>{
    for(let i = 0; i < 5;i++){
        choosedDiv[i].style.display = "none";
    }
}

const hideCpChoosed = () =>{
    for(let i = 0; i < 5; i++){
        computerChoice[i].style.display = "none";
    }
}
