const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

const namesAges = [];
for(let i = 0; i <names.length; i++){
    namesAges[i] = `${names[i]} ${ages[i]} лет/годов`
}
console.log(namesAges);