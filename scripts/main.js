let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Screenshot from 2020-11-14 14-24-17.png') {
        alert("bruh");
        myImage.setAttribute('src', 'images/Screenshot from 2020-10-19 20-27-35.png');
    } else {
        myImage.setAttribute('src', 'images/Screenshot from 2020-11-14 14-24-17.png');
    }
}

let button = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
    let name = prompt("Please enter your social security number. Just joking please do not sue me. Enter your name.");
    if(name) {
        localStorage.setItem('name', name);
    } else {
        localStorage.clear();
    }

}

if(localStorage.getItem('name')) {
    let storedName = localStorage.getItem('name');
    heading.textContent = "Epic Affordable Mac Purchased By " + storedName;
}

button.onclick = function() {
    setUserName();
    location.reload();
    return false;
}

document.getElementById('button2').onclick = function() {
    if(!localStorage.getItem('storedName') && !localStorage.getItem('name')) {
        alert("Name is already cleared!");
    } else {
        localStorage.clear();
        location.reload();
        return false;
    }
    
}

document.getElementById('button3').onclick = function() {
    window.open('guide.html');
}