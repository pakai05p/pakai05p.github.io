//global scope
var globalName = "John"

function something (){
    var globalName = "Jack";
    console.log(globalName)
}  


console.log (globalName)
something ();