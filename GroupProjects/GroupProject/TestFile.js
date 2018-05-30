// JavaScript File
//https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
//https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
//https://www.codeschool.com/discuss/t/how-to-solve-no-access-control-allow-origin-header-is-present-on-the-requested-resource-origin-null-is-therefore-not-allowed-access-in-angular-js/28989
//^ useful
/* ************************** Numbers API ************************** */

//http://numbersapi.com/random?min=10&max=20
//http://jsfiddle.net/divad12/ffHEh/

var randomCategVal = parseInt(Math.random() * 4);
var categ = "";
var url;
if (randomCategVal == 0) {
    categ = "math";
}
if (randomCategVal == 1) {
    categ = "date";
}
if (randomCategVal == 2) {
    categ = "year";
}
if (randomCategVal == 3) {
    categ = "trivia";
}
numUrl = "https://numbersapi.com/random/" + categ;

$(document).ready(function() {
    $("#numButton").click(function() {
        $.getJSON(numUrl).done(function(data) {
            console.log(data);

            //this is where we'd put it into the html
        });
    });
});


/* ************************** Cat API ************************** */

//API Key: MzA2MjEy
//http://thecatapi.com/api/images/get?format=xml
//http://thecatapi.com/docs.html


//https://catfact.ninja/#!/Cat_Facts/fact
/*
var catUrl = "https://catfact.ninja/fact";

$(document).ready(function() {
    $("#catButton").click(function() {
        $.getJSON(catUrl).done(function(data) {
            console.log(data);
            //this is where we'd put it into the html
        });
    });
});
*/


/* ************************** Chuck API ************************** */

//https://api.chucknorris.io/jokes/random
//not a good idea since some stuff here is not good

/*
var chuckUrl = "https://api.chucknorris.io/jokes/random";

$(document).ready(function() {
    $("#catButton").click(function() {
        $.getJSON(chuckUrl).done(function(data) {
            console.log(data);
            //this is where we'd put it into the html
        });
    });
});
*/

/* ************************** Dogs API ************************** */

//https://www.programmableweb.com/api/dog-ceo-dog

var chuckUrl = "https://dog.ceo/api/breeds/image/random";

$(document).ready(function() {
    $("#catButton").click(function() {
        $.getJSON(chuckUrl).done(function(data) {
            console.log(data);
            //this is where we'd put it into the html
        });
    });
});


/* ************************** Just some stuff ************************** */

console.log("first");


var randomCategVal = parseInt(Math.random() * 4);
var categ = "";
var numUrl;
var dogUrl;
if (randomCategVal == 0) {
    categ = "math";
}
if (randomCategVal == 1) {
    categ = "date";
}
if (randomCategVal == 2) {
    categ = "year";
}
if (randomCategVal == 3) {
    categ = "trivia";
}
numUrl = "https://numbersapi.com/random/";
dogUrl = "https://dog.ceo/api/breeds/image/random";


/* just some troubleshooting code
        const ul = document.getElementById('authors');
        const url = 'https://randomuser.me/api/?results=10';
        fetch(url).then((resp) => resp.json()).then(function(data) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);

        }).catch(function(error) {
            console.log(error);
        });
*/

$(document).ready(function() {
    console.log("doc ready");
    $("#testBtn").click(function() {
        console.log("button clicked");

        fetch(dogUrl).then((resp) => resp.json()).then(function(data) {
            //$.get(dogUrl, function(data) {
            console.log(data);
            console.log(data.message);
            $('#number').text(data);
        });

        // $.getJSON(numUrl).done(function(data) {

        //    console.log(data);
        //    console.log("data pulled");
        //this is where we'd put it into the html
        //});
    });
});





/* Old Code used for troubleshooting
var baseURL = "https://swapi.co/api/";
var filter;
var url;

$(document).ready(function() {
    console.log("more stuff");
    $("#vehicles").click(function() {
        filter = "vehicles/";
        url = baseURL + filter;
        $.getJSON(url).done(function(data) {
            console.log(data);
            $.each(data.results, function(index, value) {
                var html = "<div><h1>" + "Vehicles" + "</h1>" + "<p>Name: " + value.name + "<br>" + "Model: " + value.model + "</p>" + "</div>";
                $("p").append(html);
            });
        })
    });
});
*/
