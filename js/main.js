/*function hi (name) {
    var strHi = 'Hello user ';
    var res = strHi + name;
    return res;
}

var hello = hi('Petya');
console.log(hello);
*/

/*var name_result = Concat(names, ', ');
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
*/
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

/*var User = {
    name:'Vasa',
    email:'vasa@gmail.com',
    age: 25
};

User.sex = 'male';
delete User.sex;

console.log(User);*/

/*for(var i in users) {
    var user = users[i];
    if(user.age < 40) continue;
    console.log(user.name, user.age);
}*/




function getListCategories(categories) {
    var html = '';

    for(var i in categories) {
        var category = categories[i];

        html += '<li>';
        html +=    '<a href="' + category.link + '">' + category.title + '</a>';
        html +=     getListProduct(category.products);
        html += '</li>';
    }

    return html;
}

function getListProduct(products) {
    if(products.length == 0) return '';

    var childHtml = '<ul class="drop-list">';

    for(var i in products) {
        var product = products[i];

        childHtml += '<li><a href="' + product.link + '">' + product.name + '</a></li>';
    }

    childHtml += "</ul>";
    return childHtml;
}

var data_list = getListCategories(data_catalog);
var insert = document.getElementById('catalog');
insert.innerHTML = data_list; //insert tags in HTML
console.log(data_list);