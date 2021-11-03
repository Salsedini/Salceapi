function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const alcoholics =  ["Barcelo","Larios","Jagger","Absolut","Negrita","Fireball","Malibu","Legendario","Bacardi"]
const mixes = ["Cocacola", "Fanta Naranja", "Redbull", "Nestea", "Fanta Limon", "Aquarius", "7up"]
const random = ["Sin hielo", ""]
const cerveza = ["caña", "tercio", "jarra"]

function getOutput(){
    let response;
    switch (getRandomInt(1,4)) {
        case 1:
            response = `Te vas a librar, sólo te pides una ${cerveza[getRandomInt(0,3)]}.\n`
            break;
        case 2:
            response = `Mala suerte, javibu te pilla por banda y te invita a un chupito de ${alcoholics[getRandomInt(0,9)]}.\n`
            break;
        
        case 3:
            response = `Vas a verte obligado a pedirte un cubata de ${alcoholics[getRandomInt(0,9)]} con ${mixes[getRandomInt(0,7)]}`
            break;
    }
    return response;
}