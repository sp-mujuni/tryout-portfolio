//selecting all HTML elements using the class called section in index.html
const sections = document.querySelectorAll('.section');
//selecting parent container of all section buttons, which is called controls
const sectBtns = document.querySelectorAll('.controls');
//selecting each individual button of the class called control
const sectBtn = document.querySelectorAll('.control');
//selecting whole body, with class called main-content
const allSections = document.querySelector('.main-content');

//creating a function called PageTransitions
function PageTransitions(){
    //button-click active class. Get rid of inactive class
    for(let i = 0; i < sectBtn.length; i++){ //increment i as long as i is less than length of section buttons
        sectBtn[i].addEventListener('click', function(){
            //make current button active
            let currentBtn = document.querySelectorAll('.active-btn');
            //when button is no longer clicked, replace with empty string
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            //THIS keyword is very critical in JavaScript
            this.className += ' active-btn';
            //NOTE: THIS keyword doesn't exist in arrow functions
        })
    }

    //adding active class to all sections, through each button
    allSections.addEventListener('click', (e) =>{ //e is for event
        const id = e.target.dataset.id; //taking dataset and putting it into variable called id. This is also targeting dataset for each section
        if(id){
            //remove selected form the other buttons
            //looping through each button
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active') //added class called active

            //hiding other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Theme toggle sequence
    //Selecting class name of toggle button in HTML
    const themeBtn = document.querySelector('.theme-btn');
    //Adding event listener to listen for a click, then takes in *cobyl function* 
    //(arrow function, => can be done since the THIS keyword is not being used)
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        //toggling class called light-mode after each click
        element.classList.toggle('light-mode')
    })
}

//calling the function
PageTransitions();
