function calc() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='quantity']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber
    let amount = parseInt(amountInput.value) * price;

    let extra = document.querySelector('[name="extra"]:checked').value;
    let extraAmount = parseInt(extra) * parseInt(amountInput.value)

    let szószalap = document.getElementById("szósz").value;
    let sauceAmount=parseInt(szószalap) * amountNumber

    let finalAmount = amount + extraAmount + sauceAmount
  
    validate (amountNumber, finalAmount,)
    delivery (finalAmount)
    
} 

function validate(amountNumber, finalAmount,){
    if (amountNumber > 10) {
        alert("Maximum 10 db rendelhető"); return
    }
    else if (amountNumber < 1) { alert("minimum 1 termék vásárlása szükséges"); return }
}

function delivery(finalAmount) {
    if (finalAmount<5000) { 
        let showAmount = document.querySelector("span.showamount")
     showAmount.innerHTML =finalAmount+500}
    if (finalAmount>=5000) { 
         let showAmount = document.querySelector("span.showamount")
         showAmount.innerHTML =finalAmount}
}

//add element
let helptext = document.createElement ("small")
helptext.classname = "form-text text-muted"
helptext.innerHTML = "Ügyeljen az adatok pontosságára"
console.log (helptext)

let parent = document.querySelector("div#comment")
parent.appendChild(helptext)

//remove
parent.removeChild (helptext)