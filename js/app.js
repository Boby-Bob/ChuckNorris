function newQuote() {
    for (let i=0;i<quoteRandom.length; i++) {
        quote.textContent = quoteRandom[Math.floor(Math.random()*13)];
        button.classList.add("color");
        back.classList("background-color", color);
        p.classList.add("color-back");
    }

};

let p = document.querySelector("p")
let back = document.querySelector("#back")
let button = document.querySelector("button");
let quote = document.querySelector("#quote");
let quote2 = document.querySelector("#quote2");
let quoteRandom = [document.querySelector("#quote").textContent, document.querySelector("#quote2").textContent, document.querySelector("#quote3").textContent, document.querySelector("#quote3").textContent, document.querySelector("#quote4").textContent, document.querySelector("#quote5").textContent, document.querySelector("#quote6").textContent, document.querySelector("#quote7").textContent, document.querySelector("#quote8").textContent, document.querySelector("#quote9").textContent, document.querySelector("#quote10").textContent, document.querySelector("#quote11").textContent, document.querySelector("#quote12").textContent]
console.log(quoteRandom);
console.log(quote);
console.log(quote2);
button.addEventListener("click", newQuote);
Math.floor(Math.random()*256);
var color = "rgb(" + (Math.floor(Math.random()*256)) + ", "
                   + (Math.floor(Math.random()*256)) + ", "
                   + (Math.floor(Math.random()*256)) + ")";
