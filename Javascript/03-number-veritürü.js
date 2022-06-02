// *************** number ***********
// number veri turu tanimlamak :
let price = 100
let tax = .18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat :",price, 
    "KDC Orani : ",tax, 
    "KDV Tutarı", priceTax, 
    "Fiyat : " ,total
)

console.log("**************")
let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor icine bilgi gonderildi : ", Number("111"))




// arttirma ve azaltma islemleri : 

let counter = 320
counter += 1
counter++
console.log(counter)

counter--
console.log(counter)

counter *= 10
console.log(counter)

counter /= 2
console.log(counter)

// islem onceligi : 
// https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_s%C4%B1ras%C4%B1

console.log(2 + 3 * 10)
console.log( (2 + 3) * 10)

// mod(kalan) ala % :
    // sayi tek mi çift mi 
    console.log(3 % 2)
    console.log(14 % 2)

    // 8 urun alan koliye tum urunler sigiyor mu?
    console.log("Koli Kalan Urun Ornegi :",18 % 8)

// us alma **:

console.log(2 * 2 * 2 * 2)

console.log(2 ** 4)


// asagi yuvarlama islemi -> Math.floor :
console.log("Aşşagı yuvarlama : ",Math.floor(1.9))

// yukari yuvarlama islemi -> Math.ceil : 
console.log("Yukarı yuvarlama : " , Math.ceil(1.1))

// yakina yuvarlama islemi -> Math.round :
console.log("Yakina yuvarlama : ", Math.round(4.5))