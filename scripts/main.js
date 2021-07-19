function generatePassword(nbDigits, caps, numbers, specials) {
    var resultat = ""
    
    for (let i  = 0; i < nbDigits ; i++) {
        resultat += generateCharacter(caps, numbers, specials)
    }

    return resultat
}

function generateCharacter(caps, numbers, specials) {
    var LETTERS_TABLE = "abcdefghijklmnopqrstuvwxyz"
    var CAPS_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var NUMBERS_TABLE = "0123456789"
    var SPECIALS_TABLE = "!#$%&'()*+,-./:;=?@[]^_`{|}~";

    var resultat = LETTERS_TABLE

    if (caps) resultat += CAPS_TABLE
    if (numbers) resultat += NUMBERS_TABLE
    if (specials) resultat += SPECIALS_TABLE

    var randomNumber = Math.floor(Math.random() * resultat.length)

    return resultat.charAt(randomNumber)
}