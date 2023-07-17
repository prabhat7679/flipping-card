const fruitImageArray=[
   {
       'name':'apple',
       'img':'https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg'
   }, 
   {   'name':'mango',
       'img':'https://media.istockphoto.com/id/911274308/photo/mango-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=HGg_0OGyxMU6yL0gtKAKkffYa-cLG8WlwcG5nTzzCQU='
   },
   {   'name':'orange',
       'img':'https://static.vecteezy.com/system/resources/previews/009/400/393/original/delicious-orange-fruit-clipart-design-illustration-free-png.png'
   },
   {   'name':'strawberry',
       'img':'https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg'
   } ,
   {   'name':'watermeloen',
       'img':'https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-04/watermeloen_2.jpg?itok=hsBPt3DQ'},
   {   'name':'banana',
       'img':'https://foodandnutrition.org/wp-content/uploads/SavorBananas.jpg'
   },
   {   'name':'guava',
        'img':'https://i.pinimg.com/originals/84/ed/cd/84edcdf797619f74d8eac9868e11808e.jpg'
   },
   {   'name':'papaya',
      'img':'https://tiimg.tistatic.com/fp/1/007/054/fresh-yellow-whole-papaya-fruit-458.jpg'
   }
]
     
let moves = 0;
let time = 0;

let gameStarted = false;
let prevCard = null;


const parentDiv = document.querySelector('#card-section');

// step 2 to duplicate each card
const gameCard = fruitImageArray.concat(fruitImageArray)
// console.log(gameCard)

// steps 3

//  shuffledChild array
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

let clickCount = 0;
let firstCard = "";
let secondCard = "";

// styling the match card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElement) => {
        curElement.classList.add('card_match')
    })
}

    // step 7

    const resetGame = () => {
        firstCard = "";
        secondCard = "";
        clickCount = 0;

        let card_selected = document.querySelectorAll('.card_selected');

        card_selected.forEach((curElement) => {
        curElement.classList.remove('card_selected')
        })

        prevCard = null;

    }

    // step 4
    function startGame() {
    if(!gameStarted) 
    {
       
        parentDiv.addEventListener('click', (event) => {
            let curCard = event.target;
            // console.log(curCard)
    
            if(curCard.id === "card-section" || curCard.parentNode.classList.contains('card_selected'))
            {
                return false;
            }

            if (curCard.parentNode === prevCard) {
                return false;
              }
    
            clickCount ++;
    
            if(clickCount < 3){
    
                if(clickCount === 1){
                    firstCard = curCard.parentNode.dataset.name;
                    curCard.parentNode.classList.add('card_selected');
                    prevCard = curCard.parentNode;
                }else{
                    secondCard = curCard.parentNode.dataset.name;
                    curCard.parentNode.classList.add('card_selected');
                    prevCard = curCard.parentNode;
                }
    
                if(firstCard !== "" && secondCard !== ""){
                    if(firstCard === secondCard){
                        // curCard.classList.add('card_match')
                        setTimeout(() => {
                            card_matches()
                            resetGame()
                        }, 1000)
    
                    }else{
                        setTimeout(() => {
                            resetGame()
                        }, 1000)
                    }
                }
    
                moves++;
                time++;
                document.getElementById("moves").textContent = moves;
                document.getElementById("time").textContent = time;
    
            }
    
        })
    }  
     
}

    for(let index=0; index<shuffledChild.length; index++){

        const childDiv = document.createElement('div')
        childDiv.classList.add('card')
        childDiv.dataset.name = shuffledChild[index].name;
        // childDiv.style.backgroundImage = `url(${shuffledChild[index].img})`;

        const front_div = document.createElement('div');
        front_div.classList.add('front-card')

        const back_div = document.createElement('div');
        back_div.classList.add('back-card')

        back_div.style.backgroundImage = `url(${shuffledChild[index].img})`;

        parentDiv.appendChild(childDiv)

        childDiv.appendChild(front_div)
        childDiv.appendChild(back_div)
    }

document.getElementById('startButton').addEventListener('click', () => {
    startGame();
    document.getElementById('startButton').disabled = true;
  });
  
