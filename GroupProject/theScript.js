// JavaScript File
//https://gamedev.stackexchange.com/questions/58454/is-using-multiple-canvas-objects-a-good-practice
//http://jsbin.com/aveped/1/edit?html,css
/*
var layer1;
var ctx1;

layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");

var blueBall = { x: 300, y: 150, speed: .01 };
var redBall = { x: 1100, y: 600, speed: .01 };
var greenBall = { x: 300, y: 600, speed: .01 };
var purpleBall = { x: 1100, y: 150, speed: .01 };

//Draws all of the circles when the webpage loads
function drawRed() {
    ctx1.fillStyle = "red";
    ctx1.beginPath();
    ctx1.arc(redBall.x, redBall.y, 100, 0, Math.PI * 2, true);
    ctx1.closePath();
    ctx1.fill();
}

function drawGreen() {
    ctx1.fillStyle = "green";
    ctx1.beginPath();
    ctx1.arc(greenBall.x, greenBall.y, 100, 0, Math.PI * 2, true);
    ctx1.closePath();
    ctx1.fill();
}

function drawBlue() {

    ctx1.fillStyle = "blue";
    ctx1.beginPath();
    ctx1.arc(blueBall.x, blueBall.y, 100, 0, Math.PI * 2, true);
    ctx1.closePath();
    ctx1.fill();
}

function drawPurple() {

    ctx1.fillStyle = "purple";
    ctx1.beginPath();
    ctx1.arc(purpleBall.x, purpleBall.y, 100, 0, Math.PI * 2, true);
    ctx1.closePath();
    ctx1.fill();
}
*/
//The variables for the API calls
var numUrl;
var dogUrl;
var catUrl;
var catUrl2;
var chuckUrl;
var dogImg;
var shibImg;
var catImg;

numUrl = "https://numbersapi.com/random/";
dogUrl = "https://dog.ceo/api/breeds/image/random";
shibaUrl = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
catUrl = "https://catfact.ninja/fact";
catUrl2 = "https://thecatapi.com/api/images/get?format=xml";
chuckUrl = "https://api.chucknorris.io/jokes/random";

dogImg = document.createElement("img");

$(document).ready(function() {
    console.log("doc ready");

    //this makes doggo images appear
    $("#doggoBtn").click(function() {
        console.log("button clicked");

        //fetches url, turns it to json,and pulls data
        fetch(dogUrl).then((resp) => resp.json()).then(function(data) {

            //troubleshooting
            console.log(data);
            console.log(data.message);

            //appending the img to html
            dogImg.src = data.message;
            //var src = document.getElementById("dogImg");
            //src.appendChild(dogImg);

            //make a modal plz
            modal.style.display = "block";
            modalImg.src = dogImg.src;
            captionText.innerHTML = "something, a doggo prob";

            //$('#number').text(data); just trouble shooting stuff
        });
    });


    //this gives Shib img appear
    $("#shibeBtn").click(function() {
        console.log("button clicked");

        //fetches url, turns it to json,and pulls data
        fetch(shibaUrl).then((resp) => resp.json()).then(function(data) {

            //troubleshooting
            console.log(data);
            //console.log(data.message);

            //appending the img to html
            //shibImg.src = data.message;
            //var src = document.getElementById("dogImg");
            //src.appendChild(dogImg);

            //make a modal plz
            //modal.style.display = "block";
            //modalImg.src = dogImg.src;
            //captionText.innerHTML = "something, a doggo prob";

            //$('#number').text(data); just trouble shooting stuff
        });
    });

    //this makes cat facts cat facts appear . . .
    //except that it doesn't work cause we need to make a CORS request
    $("#catBtn").click(function() {
        console.log("button clicked");

        //fetches url, turns it to json,and pulls data
        //fetch(catUrl).then((resp) => resp.json()).then(function(data) {

        $.get(catUrl, function(data) {

            //troubleshooting
            console.log(data);
            //console.log(data.message);

            //appending the text to html
            //var text = document.getElementById("dogImg");
            //text.appendChild(dogImg);
        });
    });

    //attempt #2 at Cat Pulls
    $("#catBtn2").click(function() {
        console.log("button clicked");

        //fetches url, turns it to json,and pulls data
        fetch(catUrl2).then((resp) => resp.json()).then(function(data) {

            //troubleshooting
            console.log(data);
            //console.log(data.message);

            //appending the img to html
            //catImg.src = data.message;
            //var src = document.getElementById("catImg");
            //src.appendChild(catImg);
        });
    });

    $("#chuckBtn").click(function() {
        console.log("button clicked");
        //fetches url, turns it to json,and pulls data
        fetch(chuckUrl).then((resp) => resp.json()).then(function(data) {

            //troubleshooting
            console.log(data);
            console.log(data.value);


            //appending the text to html
            //var src = document.getElementById("dogImg");
            //src.appendChild(dogImg);
            $('#chuckTxt').text(data.value); //just trouble shooting stuff
            //$('#chuckTxt').text("Chuck Noris said no more Chuck Noris jokes");
        });
    });
});


//$(function() {
//    $("#dogBreed").selectmenu();
//});

/* This is used for img modal */
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var theImgButton = document.getElementById("imgButton");
theImgButton.onclick = function() {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
