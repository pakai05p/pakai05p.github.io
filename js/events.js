//window event
let sendButton = document.querySelector("input[class='btn btn-primary']")
/*
sendButton.onclick = function () { alert("Hello JS!")}
*/
sendButton.addEventListener ("click", function(){
    alert("Hello JS!")
})

window.addEventListener ("resize", function () {
   console.log( this.innerHeight, this.innerWidth)
});
// űrlap események
let orderForm = document.querySelector("#order");
addEventListener ("submit", function(ev){
    ev.preventDefault(); 
    console.log (this);
})