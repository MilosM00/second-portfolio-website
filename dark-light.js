"use strict";


const buttonDarkLight = document.querySelector(`.dark-light`);
const buttonMail = document.querySelector(`.button-mail`);
const buttonMailTwo = document.querySelector(`.button-mail-two`);
const buttonExploreMore = document.querySelector(`.button-explore-more`);
const profileImage = document.querySelector(`.profile-image`);
const body = document.querySelector(`body`);
const github = document.querySelector(`.github`);
const twitter = document.querySelector(`.twitter`);
const linkedin = document.querySelector(`.linkedin`);
const skillOne = document.querySelector(`.skill-one`);
const skillTwo = document.querySelector(`.skill-two`);
const skillThree = document.querySelector(`.skill-three`);
const skillFour = document.querySelector(`.skill-four`);
const nav = document.querySelector(`nav`);
const headerListHome = document.querySelector(`#home`);
const headerListAbout = document.querySelector(`#about`);
const headerListService = document.querySelector(`#service`);
const headerListPortfolio = document.querySelector(`#portfolio`);
const footer = document.querySelector(`footer`);
const githubLinkOne = document.querySelector(`#gh-link-one`);
const githubLinkTwo = document.querySelector(`#gh-link-two`);
const githubLinkThree = document.querySelector(`#gh-link-three`);
const overlayOne = document.querySelector(`.overlay-one`);
const overlayTwo = document.querySelector(`.overlay-two`);
const overlayThree = document.querySelector(`.overlay-three`);
const frontOne = document.querySelector(`#front1`);
const frontTwo = document.querySelector(`#front2`);
const frontThree = document.querySelector(`#front3`);
const frontFour = document.querySelector(`#front4`);
const frontFive = document.querySelector(`#front5`);
const frontSix = document.querySelector(`#front6`);
const backOne = document.querySelector(`#back1`);
const backTwo = document.querySelector(`#back2`);
const backThree = document.querySelector(`#back3`);
const backFour = document.querySelector(`#back4`);
const backFive = document.querySelector(`#back5`);
const backSix = document.querySelector(`#back6`);
const liveOne = document.querySelector(`#live1`);
const liveTwo = document.querySelector(`#live2`);
const liveThree = document.querySelector(`#live3`);
const liveFour = document.querySelector(`#live4`);
const liveFive = document.querySelector(`#live5`);
const liveSix = document.querySelector(`#live6`);
const codeOne = document.querySelector(`#code1`);
const codeTwo = document.querySelector(`#code2`);
const codeThree = document.querySelector(`#code3`);
const codeFour = document.querySelector(`#code4`);
const codeFive = document.querySelector(`#code5`);
const codeSix = document.querySelector(`#code6`);
const lineOne = document.querySelector(`#line-one`);
const lineTwo = document.querySelector(`#line-two`);
const lineThree = document.querySelector(`#line-three`);


let isDark = false;

buttonDarkLight.addEventListener(`click`, () =>{

    if(isDark === true){
        lightMode();
    }
    
    if(isDark === false){
        darkMode();
    }

    isDark = !isDark;

});

const darkMode = () =>{
    buttonDarkLight.textContent = `🌙`;
    body.style.color = `white`;
    body.style.backgroundColor = `#22272e`;
    buttonMail.style.backgroundColor = `#2d333b`;
    buttonMail.style.color = `white`;
    buttonMailTwo.style.backgroundColor = `#2d333b`;
    buttonMailTwo.style.color = `white`;
    buttonExploreMore.style.backgroundColor = `#2d333b`;
    buttonExploreMore.style.color = `white`;
    github.style.color = `white`;
    twitter.style.color = `white`;
    linkedin.style.color = `white`;
    github.style.border = "2px solid white";
    twitter.style.border = "2px solid white";
    linkedin.style.border = "2px solid white";
    profileImage.style.border = `3px solid white`;
    skillOne.style.color = `white`;
    skillOne.style.border = `1px solid white`;
    skillTwo.style.color = `white`;
    skillTwo.style.border = `1px solid white`;
    skillThree.style.color = `white`;
    skillThree.style.border = `1px solid white`;
    skillFour.style.color = `white`;
    skillFour.style.border = `1px solid white`;
    nav.style.backgroundColor = `#2d333b`;
    headerListHome.style.color = `white`;
    headerListAbout.style.color = `white`;
    headerListService.style.color = `white`;
    headerListPortfolio.style.color = `white`;
    footer.style.backgroundColor = `#2d333b`;
    githubLinkOne.style.color = `white`;
    githubLinkTwo.style.color = `white`;
    githubLinkThree.style.color = `white`;
    overlayOne.style.backgroundColor = `#2d333b`;
    overlayTwo.style.backgroundColor = `#2d333b`;
    overlayThree.style.backgroundColor = `#2d333b`;
    frontOne.style.backgroundColor = `#2d333b`;
    frontTwo.style.backgroundColor = `#2d333b`;
    frontThree.style.backgroundColor = `#2d333b`;
    frontFour.style.backgroundColor = `#2d333b`;
    frontFive.style.backgroundColor = `#2d333b`;
    frontSix.style.backgroundColor = `#2d333b`;
    frontOne.style.border = `1px solid white`;
    frontTwo.style.border = `1px solid white`;
    frontThree.style.border = `1px solid white`;
    frontFour.style.border = `1px solid white`;
    frontFive.style.border = `1px solid white`;
    frontSix.style.border = `1px solid white`;
    frontOne.style.color = `white`;
    frontTwo.style.color = `white`;
    frontThree.style.color = `white`;
    frontFour.style.color = `white`;
    frontFive.style.color = `white`;
    frontSix.style.color = `white`;
    backOne.style.backgroundColor = `white`;
    backTwo.style.backgroundColor = `white`;
    backThree.style.backgroundColor = `white`;
    backFour.style.backgroundColor = `white`;
    backFive.style.backgroundColor = `white`;
    backSix.style.backgroundColor = `white`;
    backOne.style.color = `black`;
    backTwo.style.color = `black`;
    backThree.style.color = `black`;
    backFour.style.color = `black`;
    backFive.style.color = `black`;
    backSix.style.color = `black`;
    liveOne.style.backgroundColor = `black`;
    liveTwo.style.backgroundColor = `black`;
    liveThree.style.backgroundColor = `black`;
    liveFour.style.backgroundColor = `black`;
    liveFive.style.backgroundColor = `black`;
    liveSix.style.backgroundColor = `black`;
    liveOne.style.color = `white`;
    liveTwo.style.color = `white`;
    liveThree.style.color = `white`;
    liveFour.style.color = `white`;
    liveFive.style.color = `white`;
    liveSix.style.color = `white`;
    codeOne.style.backgroundColor = `black`;
    codeTwo.style.backgroundColor = `black`;
    codeThree.style.backgroundColor = `black`;
    codeFour.style.backgroundColor = `black`;
    codeFive.style.backgroundColor = `black`;
    codeSix.style.backgroundColor = `black`;
    codeOne.style.color = `white`;
    codeTwo.style.color = `white`;
    codeThree.style.color = `white`;
    codeFour.style.color = `white`;
    codeFive.style.color = `white`;
    codeSix.style.color = `white`;
    lineOne.style.backgroundColor = `white`;
    lineTwo.style.backgroundColor = `white`;
    lineThree.style.backgroundColor = `white`;
};

const lightMode = () =>{
    buttonDarkLight.textContent = `☀`;
    body.style.color = `black`;
    body.style.backgroundColor = `white`;
    buttonMail.style.backgroundColor = `black`;
    buttonMail.style.color = `white`;
    buttonMailTwo.style.backgroundColor = `black`;
    buttonMailTwo.style.color = `white`;
    buttonExploreMore.style.backgroundColor = `black`;
    buttonExploreMore.style.color = `white`;
    github.style.color = `black`;
    twitter.style.color = `black`;
    linkedin.style.color = `black`;
    github.style.border = "2px solid black";
    twitter.style.border = "2px solid black";
    linkedin.style.border = "2px solid black";
    profileImage.style.border = `3px solid black`;
    skillOne.style.color = `black`;
    skillOne.style.border = `1px solid black`;
    skillTwo.style.color = `black`;
    skillTwo.style.border = `1px solid black`;
    skillThree.style.color = `black`;
    skillThree.style.border = `1px solid black`;
    skillFour.style.color = `black`;
    skillFour.style.border = `1px solid black`;
    nav.style.backgroundColor = `white`;
    headerListHome.style.color = `black`;
    headerListAbout.style.color = `black`;
    headerListService.style.color = `black`;
    headerListPortfolio.style.color = `black`;
    footer.style.backgroundColor = `rgb(245, 245, 245)`;
    githubLinkOne.style.color = `black`;
    githubLinkTwo.style.color = `black`;
    githubLinkThree.style.color = `black`;
    overlayOne.style.backgroundColor = `white`;
    overlayTwo.style.backgroundColor = `white`;
    overlayThree.style.backgroundColor = `white`;
    frontOne.style.backgroundColor = `white`;
    frontTwo.style.backgroundColor = `white`;
    frontThree.style.backgroundColor = `white`;
    frontFour.style.backgroundColor = `white`;
    frontFive.style.backgroundColor = `white`;
    frontSix.style.backgroundColor = `white`;
    frontOne.style.border = `1px solid black`;
    frontTwo.style.border = `1px solid black`;
    frontThree.style.border = `1px solid black`;
    frontFour.style.border = `1px solid black`;
    frontFive.style.border = `1px solid black`;
    frontSix.style.border = `1px solid black`;
    frontOne.style.color = `black`;
    frontTwo.style.color = `black`;
    frontThree.style.color = `black`;
    frontFour.style.color = `black`;
    frontFive.style.color = `black`;
    frontSix.style.color = `black`;
    backOne.style.backgroundColor = `black`;
    backTwo.style.backgroundColor = `black`;
    backThree.style.backgroundColor = `black`;
    backFour.style.backgroundColor = `black`;
    backFive.style.backgroundColor = `black`;
    backSix.style.backgroundColor = `black`;
    backOne.style.color = `white`;
    backTwo.style.color = `white`;
    backThree.style.color = `white`;
    backFour.style.color = `white`;
    backFive.style.color = `white`;
    backSix.style.color = `white`;
    liveOne.style.backgroundColor = `white`;
    liveTwo.style.backgroundColor = `white`;
    liveThree.style.backgroundColor = `white`;
    liveFour.style.backgroundColor = `white`;
    liveFive.style.backgroundColor = `white`;
    liveSix.style.backgroundColor = `white`;
    liveOne.style.color = `black`;
    liveTwo.style.color = `black`;
    liveThree.style.color = `black`;
    liveFour.style.color = `black`;
    liveFive.style.color = `black`;
    liveSix.style.color = `black`;
    codeOne.style.backgroundColor = `white`;
    codeTwo.style.backgroundColor = `white`;
    codeThree.style.backgroundColor = `white`;
    codeFour.style.backgroundColor = `white`;
    codeFive.style.backgroundColor = `white`;
    codeSix.style.backgroundColor = `white`;
    codeOne.style.color = `black`;
    codeTwo.style.color = `black`;
    codeThree.style.color = `black`;
    codeFour.style.color = `black`;
    codeFive.style.color = `black`;
    codeSix.style.color = `black`;
    lineOne.style.backgroundColor = `black`;
    lineTwo.style.backgroundColor = `black`;
    lineThree.style.backgroundColor = `black`;
};