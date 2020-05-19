function newQuote() {
    for (let i=0;i<quoteRandom.length; i++) {
        quote.textContent = quoteRandom[Math.floor(Math.random()*13)];
        let color = "rgb(" + (Math.floor(Math.random()*256)) + ", "
                   + (Math.floor(Math.random()*256)) + ", "
                   + (Math.floor(Math.random()*256)) + ")";
        button.style.backgroundColor = color;
        back.style.backgroundColor = color;
        p.style.color = color;
    }
    console.log(quoteRandom.indexOf(quote.textContent));
};

let p = document.querySelector("p");
let back = document.querySelector("#back");
let button = document.querySelector("button");
let quoteRandom = [document.querySelector("#quote").textContent, 
                   document.querySelector("#quote2").textContent, 
                   document.querySelector("#quote3").textContent, 
                   document.querySelector("#quote3").textContent, 
                   document.querySelector("#quote4").textContent, 
                   document.querySelector("#quote5").textContent, 
                   document.querySelector("#quote6").textContent, 
                   document.querySelector("#quote7").textContent, 
                   document.querySelector("#quote8").textContent, 
                   document.querySelector("#quote9").textContent, 
                   document.querySelector("#quote10").textContent, 
                   document.querySelector("#quote11").textContent, 
                   document.querySelector("#quote12").textContent];

button.addEventListener("click", newQuote);