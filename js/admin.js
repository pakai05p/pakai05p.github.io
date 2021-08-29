let users = [
    user1 = {
        id: 84254555,
        Név: "Kiss József",
        email: "kjozsi@framae.hu",
        cím: "8575 Baja fő ut 4",
    },
    user2 = {
        id: 4518271,
        Név: "Nagy Tibor",
        email: "ntibi@ntibi.hu",
        cím: "9441 Város nap út 9",
    },
    user3 = {
        id: 845915,
        Név: "Jakab János",
        email: "jajani@ntibi.hu",
        cím: "8471 Jánoháza jános út 9"
    },
    user4 = {
        id:48155548,
        Név: "Hideg Nándor",
        email:"nandih1254@hotmsil.hu",
        cím: "4875 Fót Fő utca 9",
    },
    user5 = {
        id: 54128127,
        Név: "Harmath Kincső",
        email: "hkincsi18@freemail.hu",
        cím: "8475 Nagymaros kis tér 3",
    }
]
function nevek (){
    let nameFields=document.querySelectorAll(".name")
for (i=0; i<users.length; i++) {
    nameFields[i].innerHTML = users[i].Név;
}
email(), cím()
}
function email (){
let emailFields=document.querySelectorAll(".email")
for (i=0; i<users.length; i++) {
    emailFields[i].innerHTML = users[i].email;
}
}
function cím (){
let adressFields=document.querySelectorAll(".adress")
for (i=0; i<users.length; i++) {
    adressFields[i].innerHTML = users[i].cím;
}
}
