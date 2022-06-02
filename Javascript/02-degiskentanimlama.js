// ******* let ve const ile Degisken Tanimlama *********

// var ile degisken tanımlama : 

//************** */

//var serverName = "api.kodluyoruz.org";
//console.log(serverName);
// var çok fazla kullanılımamakta.

/************** */

// let ile degiskeni bos tanımlama : 

let serverName;
console.log(serverName);

// let ile degiskene bilgi atamak : 

serverName = "https://kodluyoruz.org"
console.log(serverName);

// let ile degiskene bilgi atayarak tanimlamak : 

let password = "1234";
console.log(password);

// degisken atamasi yapmadan once kullanmaya calismak : 

/* HATALI KULLANIM :
console.log(fullName);
fullName = "Zafer Günay Önalan"
*/
let fullName = "Zafer Günay Önalan";

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:

fullName = "Lorem Ipsum Dolor"
console.log(fullName)

// birleştirme veya ekleme işlemi

fullName + "Yeni Eklenen Bilgi";
console.log(fullName + " Test Bilgi"); // Ekle ve göster ama degiskene eklemedik

console.log(fullName);

fullName += " Yeni Bilgi";
console.log(fullName);

//const ile degiskeni bos tanimlamaya calismak :(
    //const serverPassword; // sadece degisken tanımlandi ama ici bos ??

// const ile degisken tanimlamak : 
const SERVER_PASSWORD = "oisjefoo9asdasf"
console.log(SERVER_PASSWORD)

//SERVER_PASSWORD = "1234"
//console.log(SERVER_PASSWORD)