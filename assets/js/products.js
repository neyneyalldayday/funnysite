const productContainer = document.querySelector('.product-container');

let products = [
    {
        title: "Cars",
        imgURL: '../images/carthing.jpg' 
    },
    {
        title: "Halloween shit",
        imgURL: '../images/haloweenshit.jpg' 
    },
    {
        title: "some ball",
        imgURL: '../images/someball.jpg' 
    },
    {
        title: "some vr shit",
        imgURL: '../images/somevrshit.jpg' 
    },
    {
        title:"some weed shit",
        imgURL: "../images/someweedshit.jpg"
    }
]

function ShowProducts() {
    for (let i = 0 ; i < products.length; i ++){
     
        let productImages = document.createElement("img")
        productImages.src = products[i].imgURL
        productImages.className += "shit-images";
        let productContent = document.createElement("h3")
       
        productContent.textContent = products[i].title
        productContent.className += "content-shit"
        productContainer.appendChild(productContent)

        productContainer.appendChild(productImages)
    }
}
ShowProducts();