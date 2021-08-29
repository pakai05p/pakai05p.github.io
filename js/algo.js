/* összegzés
összeg=0
Ciklus amíg van még szám Addig
    szám=következő elem
    összeg= összeg + szám
Ciklus vége
*/

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0
for (i=0; i<numericArray.length; i++) {
    sum+=numericArray[i]
}
console.log("Sum: ", sum)

/*
Számlálás
Szám=0
Ciklus amíg van elem Addig
SZÁM = következő elem
Ha igaz a feltétel a számra
db = db + 1
Feltétel vége
Ciklus vége
*/

let db = 0
for (i=0; i<numericArray.length; i++) {
    if(numericArray[i]% 2==0){
        db++
    }
}
console.log ("Even number:", db)

/*
Szélsőérték keresés algoritmusa
legnagyobb=első elem
Ciklus amíg van még szám addig
szám = következő elem
Ha a szám nagyobb mint a legnagyobb AKKOR
legnagyobb = szám
Feltétel vége
Ciklus vége
*/

let biggest = numericArray[0]
for (i=0; i<numericArray.length; i++) {
    if(biggest< numericArray[i]){
        biggest = numericArray[i]
    }
}

let Smallest
 = numericArray[0]
for (i=0; i<numericArray.length; i++) {
    if(Smallest > numericArray[i]){
        Smallest = numericArray[i]
    }
}
console.log ("Smallest:", Smallest)

/*
Eldöntés algoritmusa
találat = hamis
Ciklus amíg van elem és nem találat 
    szám = következő elem
    Ha igaz a feltétel a számra
        találat=igaz
    feltétel vége
Ciklus vége
*/

let contains = false
for (i=0; i<numericArray.length && !contains; i++) {
    if(numericArray[i] == 5 ){
        contains = true
    }
}
console.log ("contains 5: ", contains)