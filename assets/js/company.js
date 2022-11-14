let company = document.querySelector(".company")
let letters = document.querySelector(".letters")
let warning;





function displayWarning(){
  // for (let i =0; i < letters.length; i++){
   
  // }
   warning = setInterval(function (event) { 
    let warn = document.createElement('p')
    warn.className = warn;
    warn.innerHTML += "dont"
    warn.innerHTML += "ask"
    warn.innerHTML += "you"
    warn.innerHTML += "will"
    warn.innerHTML += "die"
    letters.append(warn)
  }, 100)

   

  
}

company.addEventListener("mouseover", (event) => {   
    displayWarning()
})

company.addEventListener("mouseout", (event) => {   
    clearInterval(warning)
})





