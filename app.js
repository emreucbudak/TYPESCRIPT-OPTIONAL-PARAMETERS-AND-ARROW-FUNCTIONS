function deneme(a, b, c) {
    if (typeof c !== 'undefined') {
        var degisken = a + b + c;
        return degisken;
    }
    else {
        return a + b;
    }
}
var toplam = deneme(25, 36, 46);
console.log(toplam);
// OPTİONAL PARAMETERS BİR NEVİ KEYFE BAĞLI PARAMETRE TÜR BELİRTİLMEZ
// ARROW FUNCTİONS
var yazdir = function () {
    console.log("Emre Üçbudak");
};
yazdir();
