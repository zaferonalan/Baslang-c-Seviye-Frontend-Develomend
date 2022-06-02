//*************** Template Literals Kullanimi ************ */
// https://developer.mozilla.org/en-Us/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba" , username, "sitemize hoşgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hoşgeldin..
mail adresin: ${email}

mail adresin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)