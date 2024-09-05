function deneme (a:number,b:number,c?:number) {
    if (typeof c !== 'undefined') {
        let degisken = a+b+c;
        return degisken
    }
    else {
        return a+b
    }
}
let toplam = deneme(25,36,46)
console.log(toplam)
// OPTİONAL PARAMETERS BİR NEVİ KEYFE BAĞLI PARAMETRE TÜR BELİRTİLMEZ
// ARROW FUNCTİONS
let yazdir = () => {
    console.log("Emre Üçbudak")
}
yazdir();