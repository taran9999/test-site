alert("You have reached the epic page.");

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