let memeform = document.getElementById("memeform");
let url = document.getElementById("imgurl");
let topTextValue = document.getElementById("toptxt");
let botTextValue = document.getElementById("bottxt");
let container = document.getElementById("container");

memeform.addEventListener("submit", function(event) {
    event.preventDefault();
    let imgDiv = document.createElement("div");
    const img = document.createElement("img");

    // Top Text
    const topText = document.createElement("p");
    topText.classList.add("topMemeText");
    topText.innerText = topTextValue.value;
    imgDiv.appendChild(topText);
    // Meme Image
    img.src = url.value;
    imgDiv.appendChild(img);
    container.appendChild(imgDiv);
    // Bottom Text
    const botText = document.createElement("p");
    botText.classList.add('botMemeText');
    botText.innerText = botTextValue.value;
    imgDiv.appendChild(botText);
})

container.addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})