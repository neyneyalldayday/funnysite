const evilText = document.querySelector("#evil-steeze")
const evilContainer = document.querySelector(".evil-container")
const returnBtn = document.querySelector("#return")
const navElements = document.querySelector(".nav-elements")

let cardStuff = [
    {
        title: "doodoo",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: '../assets/images/image.jpg', 
    },
    {
        title: "shady practice",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: '../assets/images/image2.jpg' ,
    },
    {
        title: "nice buildings though",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: '../assets/images/image3.jpg', 
    },

];

function displayShit() {    

    for (let i =0; i < cardStuff.length; i ++){


        let evilCard = document.createElement('div');
        evilCard.className += "evil-card";
        let evilCardContent= document.createElement("p");
        evilCardContent.className += 'evil-content';
        let evilCardMessage = document.createElement("p")
        evilCardMessage.className += "evil-message";
        let evilImage = document.createElement("img");

        evilImage.src = cardStuff[i].imgUrl; 

        evilImage.classList.add("evil-pic")
      
        evilCardMessage.textContent =cardStuff[i].message;
        evilCardContent.textContent = cardStuff[i].title;

        evilCard.appendChild(evilCardContent);
        evilCard.appendChild(evilImage)
        evilCard.appendChild(evilCardMessage)
        
        evilContainer.appendChild(evilCard);

        evilText.classList.add("hide")
        returnBtn.classList.remove("hide")

    }
 
    returnBtn.addEventListener("click", function(){
        window.location.reload();
    }) 
}


evilText.addEventListener("click", displayShit)



