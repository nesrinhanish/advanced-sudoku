<h1> My very own Sudoku </h1>

<h2> An interactive sudoku website that allows users to play the classic 9x9 puzzle with multiple features including: 
different difficulties, different times, a light/dark mode. </h2>

<h3><b> Dark mode: </b> </h3>
<img width="1470" height="768" alt="Screenshot 2026-06-23 at 10 26 19 PM" src="https://github.com/user-attachments/assets/6cff5a3f-787d-4ad0-b616-12a04faec641" />
<hr>
<h3> <b> Light Mode: </b> </h3>
<img width="1470" height="760" alt="Screenshot 2026-06-23 at 10 26 03 PM" src="https://github.com/user-attachments/assets/eaafbb5d-c2d5-4096-a5ee-d96e7fbee9ea" />
<hr>
<h3><b> When you first load up the website (before clicking "Create New Game"): </b></h3>
<img width="1470" height="760" alt="Screenshot 2026-06-23 at 10 25 55 PM" src="https://github.com/user-attachments/assets/a8b679da-24d0-4529-9930-0a6495ee99de" />

<h2> Motivations: </h2>
<p> I've been interested in soduko for a while now so I wanted to learn the basics of how it's built using HTML, CSS, and JavaScript. Currently it has only three boards that were
  manually added, but hopefully in the future I can continue to improve it until it can be able to generate its own boards  </p>

<h2> Tech Stack: </h2>
<ul type="square"> 
  <li> HTML
  <li> CSS </li>
  <li> JavaScript </li>
</ul>

<h2> How-It-Works: </h2>
<ol>
  <li> When the game starts the player chooses their preferred board setup.  </li>
  <li> Once the game is loaded they need to manage the amount of time and lives they have. The timer runs continuously in the background
    and the lives deduct every time a number is placed in the incorrect spot. </li>
  <li> If the timer hits 00:00 or if the lives reach 0 then the game ends and it displays "You Lost!".  </li>
  <li> If the player is able to complete the board without the time or lives running out then it displays "You Won!". </li>
</ol>
