
# Experience-Counter
## Javascript Basics Project by Giacomo Giovannetti
### A Counter with an experience bar that grows with the value of the counter. 

## Index: 
* [About the project](#about-the-project)
* [Built with](#Built-with)
* [Issues](#issues)
* [Contact](#contact)

## About- the-project

This is a project realized for [Start2Impact's](https://www.start2impact.it/) -Javascript Basics- module of the Full Stack Web Developer course. For this project i had to build: 
* A web app that displayed a counter 
* The counter had to have the value of the counter and the buttons to increment, decrement and reset the value
* i had to implement a function that on every time the user clicks a button would increment/decrement or reset the value depending on the button clicked. 

### My idea: 
The idea i had while i was thinking about the project was to realize a counter with an Experience bar attached to it, almost like it was part of a videogame, with the difference that you could gain experience just by clicking the buttons, and when the experience bar is full you will level up, and as soon as you do so there will be displayed a message such as : "LEVEL UP!/LEVEL DOWN!". 

### [That's my Project: ](https://giacomogiovannetti.github.io/JavaScript-Basics-di-Giacomo-Giovannetti/)
![Screenshot of the exp counter page](/assets/img/counter.jpg)

As soon as you land in the page the counter displays: 
 * value = 0 
 * Experience = 0 
 * Level = 1
 * The buttons : -10 ~ -1 ~ Reset ~ +1 ~ +10;

 I decided to set to 1 the initial value of Level because usually in the games is just like that, and also the level up works like in the games, the level value won't increment until you pass the 100% of the experience bar and the 10th value of the counter. 

 For the buttons i decided to add the -10/+10 options just to progress faster. In fact with those buttons you will go a full level above or a full level down. 

 I also implemented little animations and sound effects for the buttons: 
 * Animations : they are very simple, and avaible only on desktop layout. Once you hover a button it will scale up a bit and change background-color e box-shadow-color depending on the value of the buttons : Green for the positives, Gray for the reset and Red for the negatives.

 * Sound effects : I implemented 3 sound effects : the first one plays every time a button is click, the second one every time a level-up verifies and the third one every time a level-down verifies.

Since the animations doesn't work in the mobile design i decided to set the box-shadow of the buttons to green for the positive ones and to red for the negative ones

The counter value can't go below 0. 

## Built with
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Sass](https://sass-lang.com/documentation/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* The Web app is deployed with [GitHub Pages](https://pages.github.com/)

## Issues

I'm aware that the content jumps when the level up message is display, i could found a solution to this other than setting it to "position:absolute" but i'm not satisfied with this solution. I'm still working on it to resolve the issue.
## Contact

Giacomo Giovannetti: [Linkedin](https://www.linkedin.com/in/giacomogiovannetti/)

Giacomo Giovannetti: [Personal-Website](https://giacomogiovannetti.github.io/)
