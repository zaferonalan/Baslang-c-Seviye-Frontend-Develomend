//****************** String Veri Türü İşlemleri **************** */
// https:/www.w3school.com/jsref/jsre_obj_string.asp

let email = "zafergunay7@gmail.com"
let firstName = "zafer"
let lastName = "ÖNALAN"


// string karakter sayisi -> lenght

console.log(email.length)

//Ilk Karakter Bulmak -> [0]:
console.log(firstName.charAt(0))
console.log(firstName[0])

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLocaleLowerCase()
console.log(firstName)


console.log(firstName.toUpperCase())

console.log(lastName.toLowerCase())


// String icinde Icınde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@"))
console.log(email[11])

console.log(email.search("asdasd")) // -1

// belli bir yere kadar al -> slice :

let DOMAİN = email.slice(email.search("@")+1)
console.log(DOMAİN)

console.log(
    DOMAİN.slice(0, DOMAİN.indexOf('.')) // sadece gmail kısmını aldık
)

// bilgiyi degistir -> replace :
let newEmail = email.replace("gmail.com" , "kodluyoruz.org")
console.log(newEmail)

// istedigim bilgi var mi ? -> includes :
email.includes("@") // true
email.includes("asdasd") // false


// istedigim bilgiye basladi mi ? bitti mi -> startsWidht, endsWidth : 

console.log(
    email.endsWith("kodluyoruz.org") 
)

// Ilk Harflerini Buyuk Yapmak
firstName ="FIRST"
lastName = "LAST"

let fullName = `
    ${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)