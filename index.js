//loading boards manually 

const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

  //game variables
  var timer;
  var timeRemaining;
  var lives;
  var selectedNum;
  var selectedTile;
  var disableSelect;

  window.onload = function(){
    //start game when button is clicked
    id("start-btn").addEventListener("click",startGame);
  }

  function startGame(){
    // choosing board difficulty
    let board;
    if (id("diff-1").checked) board = easy[0];
    else if (id("diff-2").checked) board = medium[0];
    else board = hard[0];

    //Lives to 3 and enabling selecting numbers and tiles
    lives = 3;
    disableSelect=false;
    id("lives").textContent = "Lives Remaining: " + lives;
    
    //making board based on difficulty 
    generateBoard(board);
    //starting timer
    startTimer();
    //setting the theme based on input
    if (id("theme-2").checked) {
        qs("body").classList.add("dark");
    } else {
        qs("body").classList.remove("dark");
    }
    if (id("theme-2").checked) {
        qs("footer").classList.add("dark");
    } else {
        qs("footer").classList.remove("dark");
    }
    //number container setup
    id("number-container").classList.remove("hidden");

  }

  function startTimer(){
    if (id("time-1").checked) timeRemaining = 180 ;
    else if (id("time-2").checked) timeRemaining = 300;
    else timeRemaining = 600;
    id("timer").textContent = timeConvertion(timeRemaining);
    timer = setInterval(function () {
        timeRemaining -- ;
        //when theres no more time remaining end the game
        if(timeRemaining == 0) endGame ();
        id("timer").textContent = timeConvertion(timeRemaining);
    }, 1000)
  }

  function timeConvertion(){
    let minutes = Math.floor(timer/60);
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = timer % 60;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
  }

  function generateBoard (board){
    //clear any previous boards
    clearPrevious();
    // let used to increment tile ids
    let idCount= 0
    // creating the 81 tiles
    let boardPage = id("board");
    for (let i=0; i < 81; i++) {
        let tile = document.createElement("p");
        if (board[i] != "-") {
            tile.textContent = board[i];
        } else {
        }
        tile.id = idCount;
        idCount ++;
        tile.classList.add("tile");
        if ((tile.id > 17 && tile.id < 27 ) || (tile.id > 44 & tile.id < 54)) {
            tile.classList.add("bottomBorder");
        }

        if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 ==6) {
            tile.classList.add("rightBorder");
        }

        //finally im actually adding the tiles
        id("board").appendChild(tile);
        boardPage.append(tile);
    }
  }

  function clearPrevious (){
    //accessing tiles
    let tiles = qsa(".tile");
    //removing tiles
    for (let i=0; i < tiles.length; i++){
        tiles[i].remove();
    }
    //clearing the timer
    if (timer) clearTimeout(timer);
    //deselecting numbers
    for (let i=0; i < id("number-container").children.length; i++) {
        id("number-container").children[i].classList.remove("selected");
    }
    //clearing selected variables
    selectedNum = null;
    selectedTile = null;
  }


  //helper functions
  function id(id) {
    return document.getElementById(id);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

