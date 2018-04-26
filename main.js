/*function hi (name) {
    var strHi = 'Hello user ';
    var res = strHi + name;
    return res;
}

var hello = hi('Petya');
console.log(hello);
*/

var name_result = Concat(names, ', ');
var cities_result = Concat(cities, ', ');

console.log(name_result);
console.log(cities_result);

var names = ['Vasa', 'Petya', 'Anya'];
var cities = ['Dnepr', 'Kiev', 'Lviv'];

function Concat(list, del) {
    var res = '';
    for (var i in list) {
        if (i == 0) {
            res += list[i];
        } else {
            res += del + list[i];
        }
        
    }
    return res;
}

var strCities = '';

for(var i in cities) {
    var city = cities[i];
    strCities += city + ' ';

    if(city == 'Kiev') break;
}

console.log(strCities);

/*var profs = 'Electric, builder, developer, counter';

function composeArray(str, del) {
    var ar = [];
    var word = '';

    for(var i in str) {
        if(str[i] != del){
            word += str[i];
            if(i == str.length-1) {
                addWord();
            }
        } else {
            addWord();
        }
    }
    function addWord() {
        ar.push( word.trim() );
        word = '';
    }
    return ar;
}

var res_array = composeArray(profs, ',')
console.log(res_array);*/

