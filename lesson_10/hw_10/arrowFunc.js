const getElementByIndex = (array, index) => array[index];
const res = getElementByIndex(["Яблоко", "Апельсин", "Банан"], 1);
console.log(res); // "Апельсин"

const getWeatherDescription = function(code, decode){
    return decode(code);
}
const decode = function(code){
    switch(code){
        case "SQ":
            return "Шквал";
        case "DZ":
            return "Дождь";
        case "RA":
            return "Дождь и гроза";
        case "SN":
            return "Гроза";
        default: return "No such code"
    }
}
// decode - это функция котороя принимает code в качестве аргумента 
// и возвращает соответствующее описание погоды
const res2 = getWeatherDescription("SQ", decode);
console.log(res2); // "Шквал"
console.log(getWeatherDescription("PR", decode)); // "No such code"
console.log(decode("SQ")); // "Шквал"