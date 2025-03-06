# Hangman Game
### Video Demo: https://www.youtube.com/watch?v=xljCgWBhc84
### Description:
To explain how the hangman game works, let's go through every directory and file to understand how all of the puzzle pieces fit together.

#### node_modules:
This folder contains lots and lots of folders previously developed by _Vite_ which help us build, deploy and run in a local-host port (with _npm_), or web page.
One important thing to keep in mind is that if you want to run a Vite + React web application you need Node JS to use _npm_ commands.

#### public:
The public folder only has one file called __redirects_, and it's only purpose is to the redirect every mislead direction to the index.html file (AKA our homepage). It's used for the Netlify deploy.

#### src:
Here in the _src_ folder we have the real deal. The code that implementated the hangman game. Let's look at the folders and files beneath it.

- assets: Here we have every image used for the page. Alerts, backgrounds, logos and icons.
- components: In the components folder we have two components that were created to appear on the screen giving the user specific information:
  - _FinishedGame_: This component appears only if the game was finished. It receives a boolean that tells us if the user won the game. If the game wasn't won, the parameter _secretWord_ will appear on the component to reveal the secret word that the player didn't guessed. The third parameter is the _reloadPage_ function which appears as a button on the component in case that the user wants to play another session. If the user wants to return to the home page, he can do so by clicking the "Go Home" button.
  - _NotAvailable_: The NotAvailable component has the same structure as the FinishedGame component, but it's only activated where the user did a non-available action. The chosen message by the developer will show up on the screen depending on the action the user is not allowed to do. If the user presses the "OK" button, the component will simply go away.
- pages: Here we have the 3 different pages of the hangman game:
  - _AddWord_: In the AddWord page we can add a word to the game's secret word list. The page contains an input for writing the chosen word and 3 buttons. Save (for saving the word written on the secret word list), Begin (to start a new game), and Go Home (to go back to the home page). In the word input, the user can't write a word longer than 8 characters. And when the "Save" button is pressed, the function _saveWordWritten_ checks if the input written doesn't have any special characters, numbers, or is empty. If the input is not correct, the _notAvailable_ state will be set to "true" and the _NotAvailable_ component will show up with the message depending on the error the user made.
  - _Game_: Here is the essence of the hangman game. We find ourselves with an already drew hanger, prepared to start drawing the hangman in case of wrong letters inserted in the input below, lines which tell us the length of the secret word, and buttons to test the letter written (although you can also press the enter key to check the letter), start a new game, and go back to the home page.
When we first execute the game page, we have a _useEffect_ that sets a LOT of variables to there initial state. These variables are prepared to start a new game. Also a new secret word is chosen, a canvas is intilialized to define the place where the drawing is going to take place, the lines of the hanger are drawn by the function _drawHangmanLine()_ (we will talk about this function later) and the secret word's length is drawn by lines too with the _drawLinesForWord(secretWordChosen)_ function.
There are a bunch of functions in this file which execute depending on the user's chosen letter for the game. Every time the user clicks the "Test letter" button or presses the enter key, the function _testLetter()_ will be executed. First it will check (as same as the "add word" page) if the letter written is actually a letter. If it's not, the _NotAvailable_ component will be used again here in this page. If the letter written is valid, then we need to check if it actually belongs to the secret word. If the letter is correct (and wasn't used yet), the function _writeCorrectLetter()_ is going to write the letter in the place where it belongs in the lines of the secret word. But if the letter doesn't belong to the secret word (and it wasn't used also), the _writeIncorrectLetter()_ will take care of writing the incorrect letter under the lines of the secret word, and the _drawHangmanWith_Errors(errorsLeft)_ will draw, depending on the number of errors left, the body part of the hangman.
When the game is finished (wether the user guessed or not the secret word), the useEffect function _setFinishedGame()_ will set the _finishedGame_ variable to "true" and the _FinishedGame_ component will display telling us if we won or not and if we want to play again. If we did not won, we will see the actual secret word that we didn´t guessed.
  - _Home_: Finally we get to the last page, but the first one that the user sees. When we get to the home page of the hangman game, we can see two buttons: One to start a new game, which executes the _Game.jsx_ file, and the other to add a new word, with it's code written in _AddWord.jsx_. But there's a third option here, where you can choose the page's display between light, and dark mode. That's why all of the 3 pages need _darkMode_ as a parameter, because the style of the current page the user's at, depends on the display they previously chose at the home page. This also explains why every class name of the jsx blocks in the pages have the condition "_${!darkMode ? "selected" : ""}_".

- styles:
The styles folder contains all of the css styles that the pages and components need. Including the _index.css_ file which connects with all of the imported style files and defines the general values so we don't need to worry about repeting the same code again for every page.

- utils:
In the utils folder we get to the only, but VERY useful functions file. The _hangmanCanvas_ file contains all of the drawings needed, from the right arm of the body to the hanger. The main function here is the _drawHangmanWith_Errors(errorsLeft)_ function used in the game page. Which, depending on the errors passed by parameter, knows what drawing needs to be done and executes it. The functions also need the canvas value to define them and start the drawing, and if the user is in dark mode or not to know which color to use for the drawings.

- _App.jsx_:
In the app file we find the _<Route>_ block that connects all of the sites' pages and their paths. Being "/" for the home page, "/game" for the game page and "addWord" to the add word page. Here is where we initalize the _darkMode_ display to be false with useState, and we can also find the secret word list. These variables need to be in this file because when the pages are first initialized they need to have a default values, which are obtained from this file.

- _main.jsx_:
The main file is short, but very important too, because it renders the _App_ component just mentioned and is the reason why we can develop our website using JSX instead of HTML.

#### index.html:
Although we developed our page with JSX, we need a simple HTML code just to write a <script> block of type "module" in our body and execute the _main.jsx_ file so we can connect to our JSX code.

#### package-lock.json and package.json:
Here we have then name, version all of the script, dependencies and packages to execute, deploy and build our page. Without this files, our page could be finished, but we could not execute it to see how it looks. Not even in our local host port!

#### vite.config.js:
This simple file defines vite configuration's plugins. This is where we establish that we are using React to develop this project.
