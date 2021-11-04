function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const alcoholics =  ["Barcelo","Larios","Jagger","Absolut","Negrita","Fireball","Malibu","Legendario","Bacardi"]
const mixes = ["Cocacola", "Fanta Naranja", "Redbull", "Nestea", "Fanta Limon", "Aquarius", "7up", "Zumo piña"]
const random = ["Sin hielo", ""]
const cerveza = ["caña", "tercio", "jarra"]

switch (getRandomInt(1,4)) {
    case 1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1      
      console.log(`Te vas a librar, sólo te pides una ${cerveza[getRandomInt(0,3)]}.\n`)
      break;
    case 2:
        console.log(`Mala suerte, javibu te pilla por banda y te invita a un chupito de ${alcoholics[getRandomInt(0,9)]}.\n`)
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      break;
    
    case 3:
        console.log(`Vas a verte obligado a pedirte un cubata de ${alcoholics[getRandomInt(0,9)]} con ${mixes[getRandomInt(0,7)]}`)
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      break;
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      break;
  }