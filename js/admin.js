let users = [
    user1 = {
        Név: "Kiss József",
        email: "kjozsi@framae.hu",
        cím: "8575 Baja fő ut 4",
    },
    user2 = {
        Név: "Nagy Tibor",
        email: "ntibi@ntibi.hu",
        cím: "9441 Város nap út 9",
    },
    user3 = {
        Név: "Jakab János",
        email: "jajani@ntibi.hu",
        cím: "8471 Jánoháza jános út 9"
    },
    user4 = {
        Név: "Hideg Nándor",
        email: "nandih1254@hotmsil.hu",
        cím: "4875 Fót Fő utca 9",
    },
    user5 = {
        Név: "Harmath Kincső",
        email: "hkincsi18@freemail.hu",
        cím: "8475 Nagymaros kis tér 3",
    }
]
/*
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
*/
/*
<tr class="table-info">
     <td class="name">""</td>
     <td class="email">""</td>
     <td class="adress">""</td>
     <td>
         <div class="btn-group">
             <button class="btn btn-info"><i class="fas fa-sync-alt"></i></button>
             <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
         </div>
     </td>
</tr>*/

let tableBody = document.querySelector("#userTable tbody")

let createTd = (html, parent) => {
    let td =document.createElement("td");
    td.innerHTML= html;
    parent.appendChild(td);
}


for (let k in users){
    let tr = document.createElement("tr");
    createTd(parseInt(k)+1, tr)
        for (let value of Object.values(users[k])){
            createTd(value, tr)
        }
    tableBody.appendChild(tr);
}