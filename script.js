const start = document.querySelector(".start")
const startButton = document.querySelector(".startButton")
const selection = document.querySelector(".selection")
const easyButton = document.querySelector(".easyButton")
const normalButton = document.querySelector(".normalButton")
const hardButton = document.querySelector(".hardButton")
const game = document.querySelector(".game")
const questionNumber = document.querySelector(".number")
const popUp = document.querySelector(".popUp")
const image = document.querySelector(".image")
const end = document.querySelector(".end")
const question = document.querySelector(".question")
const final = document.querySelector(".final")
const againButton = document.querySelector(".againButton")
const homeButton = document.querySelector(".homeButton")

const clickSound = document.getElementById("click")
const clap = document.getElementById("clap")

let totalQuestion
let current;
let choices;
let difficulity;
let tempoArray = [];

let easyQuestions = [
        {broken:"10",
        image1:"empty", image2:"empty", image3:"empty",image4:"empty",
        image5:"pipeAngle2",image6:"pipeAngle1",image7:"pipeStraight", image8:"tap",
        image9:"pipeAngle3",image10:"pipeAngle4B",image11:"empty",image12:"empty",
        image13:"empty",image14:"empty",image15:"empty",image16:"empty"},

        {broken:"9",
        image1:"pipeAngle2", image2:"empty", image3:"empty",image4:"empty",
        image5:"pipeHorizontal",image6:"empty",image7:"empty", image8:"empty",
        image9:"pipeHorizontalB",image10:"empty",image11:"pipeAngle1",image12:"tap",
        image13:"pipeAngle3", image14:"pipeStraight",image15:"pipeAngle4",image16:"empty"},

        {broken:"11",
        image1:"pipeAngle2", image2:"empty", image3:"empty",image4:"empty",
        image5:"pipeThreeway3",image6:"pipeStraight",image7:"pipeAngle2", image8:"empty",
        image9:"pipeAngle3",image10:"pipeStraight",image11:"pipeThreeway1B",image12:"tap",
        image13:"empty", image14:"empty",image15:"empty",image16:"empty"},

        {broken:"5",
        image1:"empty", image2:"pipeAngle3", image3:"pipeStraight",image4:"pipeAngle2",
        image5:"pipeAngle1B",image6:"pipeStraight",image7:"pipeStraight", image8:"pipeAngle4",
        image9:"pipeHorizontal",image10:"pipeAngle1",image11:"pipeAngle2",image12:"empty",
        image13:"pipeAngle3", image14:"pipeAngle4",image15:"pipeAngle3",image16:"tap"},

        {broken:"16",
        image1:"empty", image2:"pipeAngle1", image3:"pipeStraight",image4:"pipeStraight",
        image5:"empty",image6:"pipeAngle3",image7:"pipeAngle2", image8:"empty",
        image9:"empty",image10:"empty",image11:"pipeHorizontal",image12:"empty",
        image13:"empty", image14:"empty",image15:"pipeAngle3",image16:"tapB"},

        {broken:"11",
        image1:"empty", image2:"empty", image3:"empty",image4:"empty",
        image5:"empty",image6:"empty",image7:"empty", image8:"empty",
        image9:"pipeStraight",image10:"pipeStraight",image11:"pipeStraightB",image12:"tap",
        image13:"empty", image14:"empty",image15:"empty",image16:"empty"},

        {broken:"1",
        image1:"pipeThreeway3B", image2:"pipeStraight", image3:"pipeAngle2",image4:"empty",
        image5:"pipeAngle3",image6:"pipeStraight",image7:"pipeThreeway2", image8:"empty",
        image9:"pipeAngle1",image10:"pipeStraight",image11:"pipeAngle4",image12:"empty",
        image13:"pipeAngle3", image14:"tap",image15:"empty",image16:"empty"},

        {broken:"8",
        image1:"empty", image2:"empty", image3:"empty",image4:"pipeHorizontal",
        image5:"pipeAngle1",image6:"pipeStraight",image7:"pipeStraight", image8:"pipeThreeway2B",
        image9:"pipeAngle3",image10:"pipeStraight",image11:"tap",image12:"pipeAngle3",
        image13:"empty", image14:"empty",image15:"empty",image16:"empty"},

        {broken:"5",
        image1:"empty", image2:"empty", image3:"empty",image4:"empty",
        image5:"pipeThreeway4B",image6:"pipeAngle2",image7:"pipeAngle1", image8:"pipeStraight",
        image9:"pipeHorizontal",image10:"pipeAngle3",image11:"pipeAngle4",image12:"empty",
        image13:"pipeAngle3", image14:"pipeStraight",image15:"tap",image16:"empty"},

        {broken:"7",
        image1:"pipeAngle1", image2:"pipeStraight", image3:"pipeStraight",image4:"tap",
        image5:"pipeAngle3",image6:"pipeStraight",image7:"pipeAngle2B", image8:"empty",
        image9:"empty",image10:"empty",image11:"pipeAngle3",image12:"pipeStraight",
        image13:"empty", image14:"empty",image15:"empty",image16:"empty"}]

let normalQuestions =[
        {broken:"10",
        image1:"empty", image2:"empty", image3:"empty",image4:"empty",
        image5:"empty",image6:"pipeAngle1",image7:"pipeStraight", image8:"tap",
        image9:"pipeStraight",image10:"pipeThreeway1B",image11:"pipeAngle2",image12:"empty",
        image13:"pipeStraight", image14:"pipeStraightB",image15:"pipeAngle4",image16:"empty"},
        
        {broken:"9",
        image1:"pipeStraight", image2:"pipeStraightB", image3:"pipeStraight",image4:"pipeStraight",
        image5:"empty",image6:"empty",image7:"empty", image8:"empty",
        image9:"pipeAngle2B",image10:"pipeAngle1",image11:"pipeStraight",image12:"tap",
        image13:"pipeAngle3", image14:"pipeAngle4",image15:"empty",image16:"empty"},

        {broken:"1",
        image1:"pipeStraightB", image2:"pipeAngle2", image3:"empty",image4:"empty",
        image5:"pipeStraight",image6:"pipeThreeway1",image7:"pipeStraightB", image8:"tap",
        image9:"empty",image10:"empty",image11:"empty",image12:"empty",
        image13:"empty", image14:"empty",image15:"empty",image16:"empty"},

        {broken:"2",
        image1:"pipeAngle3", image2:"pipeThreeway4B", image3:"pipeAngle2",image4:"empty",
        image5:"empty",image6:"pipeHorizontal",image7:"pipeHorizontal", image8:"empty",
        image9:"empty",image10:"pipeAngle3B",image11:"pipeThreeway1",image12:"tap",
        image13:"empty", image14:"empty",image15:"empty",image16:"empty"},

        {broken:"3",
        image1:"pipeAngle3B", image2:"pipeAngle2", image3:"pipeAngle1B",image4:"pipeAngle4",
        image5:"pipeAngle1",image6:"pipeAngle4",image7:"pipeHorizontal", image8:"empty",
        image9:"pipeAngle3",image10:"pipeAngle2",image11:"pipeAngle3",image12:"tap",
        image13:"empty", image14:"empty",image15:"empty",image16:"empty"},

        {broken:"8",
        image1:"empty", image2:"pipeHorizontal", image3:"empty",image4:"empty",
        image5:"pipeAngle1",image6:"pipeThreeway2",image7:"pipeAngle1", image8:"tapB",
        image9:"pipeHorizontalB",image10:"pipeAngle3",image11:"pipeAngle4",image12:"empty",
        image13:"pipeHorizontal", image14:"empty",image15:"empty",image16:"empty"},

        {broken:"14",
        image1:"pipeAngle2", image2:"empty", image3:"pipeAngle1",image4:"pipeStraightB",
        image5:"pipeHorizontal",image6:"empty",image7:"pipeHorizontal", image8:"empty",
        image9:"pipeAngle3",image10:"pipeThreeway4",image11:"pipeAngle4",image12:"empty",
        image13:"empty", image14:"pipeThreeway3B",image15:"tap",image16:"empty"},

        {broken:"11",
        image1:"empty", image2:"empty", image3:"empty",image4:"pipeAngle1",
        image5:"pipeAngle1B",image6:"pipeStraight",image7:"pipeThreeway4", image8:"pipeAngle4",
        image9:"pipeAngle4",image10:"empty",image11:"pipeAngle3B",image12:"tap",
        image13:"empty", image14:"empty",image15:"empty",image16:"empty"},

        {broken:"7",
        image1:"pipeHorizontal", image2:"pipeAngle1", image3:"pipeAngle2",image4:"empty",
        image5:"pipeHorizontal",image6:"pipeHorizontalB",image7:"pipeThreeway3B", image8:"tap",
        image9:"pipeHorizontal",image10:"pipeThreeway3",image11:"pipeAngle4",image12:"empty",
        image13:"pipeAngle3", image14:"pipeAngle4",image15:"empty",image16:"empty"},

        {broken:"15",
        image1:"empty", image2:"empty", image3:"empty",image4:"empty",
        image5:"pipeAngle2",image6:"pipeAngle1B",image7:"pipeStraight", image8:"pipeStraight",
        image9:"pipeAngle3",image10:"pipeThreeway2",image11:"empty",image12:"empty",
        image13:"empty", image14:"pipeAngle3",image15:"pipeStraightB",image16:"tap"}
]

let hardQuestions =[
    {broken:"10",
    image1:"pipeAngle2", image2:"empty", image3:"pipeAngle1",image4:"pipeStraightB",
    image5:"pipeAngle3",image6:"pipeThreeway4",image7:"pipeAngle4B", image8:"empty",
    image9:"empty",image10:"pipeAngle3B",image11:"tap",image12:"empty",
    image13:"empty", image14:"empty",image15:"empty",image16:"empty"},
    
    {broken:"11",
    image1:"pipeAngle2B", image2:"empty", image3:"empty",image4:"empty",
    image5:"pipeThreeway3",image6:"pipeStraight",image7:"pipeAngle2", image8:"empty",
    image9:"pipeHorizontalB",image10:"empty",image11:"pipeThreeway3B",image12:"tap",
    image13:"pipeHorizontal", image14:"empty",image15:"pipeHorizontal",image16:"empty"},

    {broken:"3",
    image1:"pipeStraightB", image2:"pipeStraight", image3:"pipeThreeway1B",image4:"tap",
    image5:"empty",image6:"empty",image7:"empty", image8:"empty",
    image9:"pipeAngle1",image10:"pipeStraight",image11:"pipeAngle2",image12:"empty",
    image13:"pipeAngle3B", image14:"pipeAngle2",image15:"pipeHorizontal",image16:"empty"},

    {broken:"11",
    image1:"pipeThreeway4", image2:"pipeThreeway2", image3:"pipeThreeway3",image4:"empty",
    image5:"pipeThreeway2",image6:"pipeThreeway3",image7:"pipeThreeway2", image8:"empty",
    image9:"pipeThreeway3B",image10:"pipeThreeway2",image11:"pipeThreeway3B",image12:"tap",
    image13:"pipeThreeway1", image14:"pipeThreeway1B",image15:"pipeThreeway2",image16:"empty"},

    {broken:"10",
    image1:"empty", image2:"pipeAngle1", image3:"tap",image4:"empty",
    image5:"pipeAngle2B",image6:"pipeHorizontal",image7:"empty", image8:"empty",
    image9:"pipeThreeway2",image10:"pipeHorizontalB",image11:"empty",image12:"empty",
    image13:"pipeAngle3B", image14:"pipeThreeway1",image15:"pipeAngle2",image16:"empty"},

    {broken:"8",
    image1:"empty", image2:"empty", image3:"pipeHorizontal",image4:"empty",
    image5:"pipeAngle1",image6:"pipeAngle2",image7:"pipeAngle3", image8:"pipeAngle2B",
    image9:"pipeThreeway2B",image10:"pipeThreeway3B",image11:"pipeThreeway4",image12:"pipeAngle4",
    image13:"pipeAngle3", image14:"pipeAngle4",image15:"pipeAngle3",image16:"tap"},

    {broken:"6",
    image1:"pipeAngle3", image2:"pipeAngle2", image3:"pipeAngle3",image4:"pipeAngle2",
    image5:"pipeAngle1",image6:"pipeAngle4B",image7:"pipeAngle1", image8:"pipeAngle4B",
    image9:"pipeAngle3",image10:"pipeThreeway4",image11:"pipeAngle4B",image12:"empty",
    image13:"empty", image14:"pipeAngle3",image15:"tap",image16:"empty"},

    {broken:"9",
    image1:"pipeThreeway3", image2:"pipeStraight", image3:"pipeStraightB",image4:"pipeAngle2",
    image5:"pipeThreeway3",image6:"pipeStraight",image7:"pipeStraight", image8:"pipeAngle4",
    image9:"pipeThreeway3B",image10:"pipeStraight",image11:"pipeAngle2",image12:"empty",
    image13:"pipeThreeway3", image14:"pipeAngle2B",image15:"pipeAngle3",image16:"tap"},

    {broken:"1",
    image1:"pipeAngle1B", image2:"pipeStraight", image3:"pipeAngle2",image4:"empty",
    image5:"pipeHorizontal",image6:"pipeAngle1",image7:"pipeThreeway1", image8:"tap",
    image9:"pipeHorizontal",image10:"pipeAngle3B",image11:"pipeThreeway4",image12:"pipeAngle2",
    image13:"pipeHorizontal", image14:"empty",image15:"pipeAngle3B",image16:"pipeAngle4"},

    {broken:"16",
    image1:"empty", image2:"pipeAngle3", image3:"pipeStraightB",image4:"pipeAngle2",
    image5:"pipeThreeway4",image6:"pipeThreeway4",image7:"pipeThreeway4", image8:"pipeThreeway1",
    image9:"pipeHorizontal",image10:"pipeThreeway3",image11:"pipeThreeway2",image12:"empty",
    image13:"pipeAngle3", image14:"pipeAngle4B",image15:"pipeAngle3",image16:"tapB"},
]

startButton.addEventListener("click", () => {
    playClickSound()
    let daley = setTimeout(() =>{
        start.classList.add("hide")
        selection.classList.remove("hide")
    }, 200)
})

easyButton.addEventListener("click", () => {
    playClickSound()
    let daley = setTimeout(() =>{
        choices = 1
        difficulity = easyQuestions
        Start()
    }, 200)
})

normalButton.addEventListener("click", () => {
    playClickSound()
    let daley = setTimeout(() =>{
        choices = 2
        difficulity = normalQuestions
        Start()
    }, 200)
})

hardButton.addEventListener("click", () => {
    playClickSound()
    let daley = setTimeout(() =>{
        choices = 3
        difficulity = hardQuestions
        Start()
    }, 200)
})

againButton.addEventListener("click", () =>{
    playClickSound()
    let daley = setTimeout(() =>{
        final.classList.add("hide")
        start.classList.remove("hide")
        tempoArray = []
    }, 200)
})

homeButton.addEventListener("click", ()=>{
    let daley = setTimeout(() =>{
        location.assign('https://gimme.sg/activations/dementia/');
    }, 200)
})

function Start(){
    tempoArray = []
    selection.classList.add("hide")
    game.classList.remove("hide")
    current = 0
    totalQuestion = 7
    for(let c = 0; c < difficulity.length; c++){
        tempoArray.push(difficulity[c])
    }

    Question()
}

function Question(){
    
    console.log(current, totalQuestion)
    if(current == totalQuestion){
        clap.currentTime = 0
        clap.play()
        game.classList.add("hide")
        final.classList.remove("hide");
        return
    }

    current +=1
    questionNumber.innerHTML = current + "/" + totalQuestion;

    console.log(tempoArray)
    let randomQuestion = Math.floor(Math.random() * tempoArray.length)

    for(let x = 0; x < 16; x++){
        let buttonclass = "image" + (x+1)
        let button = document.querySelector(`.${buttonclass}`)
        
        button.classList.remove("empty")
        button.classList.remove("broken")

        console.log(randomQuestion)
        button.src = `./img/${tempoArray[randomQuestion][buttonclass]}.png`
        if(tempoArray[randomQuestion][buttonclass] == "empty"){
            button.classList.add("empty")
        }
    }

    let borkenclass = "image" + tempoArray[randomQuestion].broken
    let broken = document.querySelector(`.${borkenclass}`)

    broken.classList.add("broken")
    tempoArray.splice(randomQuestion,1)
}

for(let x = 0; x < 16; x++){
    let buttonclass = "image" + (x+1)
    let button = document.querySelector(`.${buttonclass}`)
    
    button.addEventListener("click", () =>{
        playClickSound()
        if(!button.classList.contains("empty")){
            if(button.classList.contains("broken")){
                popUp.classList.remove("hide")
                popUp.style.backgroundColor = "#67D155"
                image.src = "./img/right.png"
                end.innerHTML = "Right pipe!"
                let delay = setTimeout(() => {
                    Question()
                  }, 700);
            }
            if(!button.classList.contains("broken")){
                popUp.classList.remove("hide")
                popUp.style.backgroundColor = "#FF6161"
                image.src = "./img/wrong.png"
                end.innerHTML = "Wrong pipe!"
            }
            let delay = setTimeout(() => {
                popUp.classList.add("hide")
              }, 700);
        }
    })
}

function playClickSound(){
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
    event.preventDefault();
    }, { passive: false });