var titles = document.querySelectorAll('h4');
var description = document.querySelectorAll('h5');
var price = document.querySelectorAll('h6');

var roadObject = [
    {title: 'Road Bike 1', description: 'this bike is quite cool', price: '£320'},
    {title: 'Road Bike 2', description: 'the bike is one of the best', price: '£1320'},
    {title: 'Road Bike 3', description: 'this bike is quite cool', price: '£900'},
    {title: 'Road Bike 4', description: 'this bike is quite cool', price: '£1200'},
    {title: 'Road Bike 5', description: 'this bike is quite cool', price: '£120'},
    {title: 'Road Bike 6', description: 'this bike is quite cool', price: '£620'},
    {title: 'Road Bike 7', description: 'this bike is quite cool', price: '£100'},
    {title: 'Road Bike 8', description: 'this bike is quite cool', price: '£3120'},   
]

var cityObject = [
    {title: 'City Bike 1', description: 'One of the best Bikes', price: '£320'},
    {title: 'City Bike 2', description: 'the bike is one of the best', price: '£1320'},
    {title: 'City Bike 3', description: 'One of the best Bikes', price: '£900'},
    {title: 'City Bike 4', description: 'One of the best Bikes', price: '£1200'},
    {title: 'City Bike 5', description: 'One of the best Bikes', price: '£120'},
    {title: 'City Bike 6', description: 'One of the best Bikes', price: '£620'},
    {title: 'City Bike 7', description: 'One of the best Bikes', price: '£100'},
    {title: 'City Bike 8', description: 'One of the best Bikes', price: '£3120'},   
]

var speedObject = [
    {title: 'Speed Bike 1', description: 'This bike is ok but not great', price: '£320'},
    {title: 'Speed Bike 2', description: 'This bike is ok but not great', price: '£1320'},
    {title: 'Speed Bike 3', description: 'This bike is ok but not great', price: '£900'},
    {title: 'Speed Bike 4', description: 'This bike is ok but not great', price: '£1200'},
    {title: 'Speed Bike 5', description: 'This bike is ok but not great', price: '£120'},
    {title: 'Speed Bike 6', description: 'This bike is ok but not great', price: '£620'},
    {title: 'Speed Bike 7', description: 'This bike is ok but not great', price: '£100'},
    {title: 'Speed Bike 8', description: 'This bike is ok but not great', price: '£3120'},   
]

var familyObject = [
    {title: 'For the Family 1', description: 'I cooked a grape on this', price: '£320'},
    {title: 'For the Family 2', description: 'I cooked a grape on this', price: '£1320'},
    {title: 'For the Family 3', description: 'I cooked a grape on this', price: '£900'},
    {title: 'For the Family 4', description: 'I cooked a grape on this', price: '£1200'},
    {title: 'For the Family 5', description: 'I cooked a grape on this', price: '£120'},
    {title: 'For the Family 6', description: 'I cooked a grape on this', price: '£620'},
    {title: 'For the Family 7', description: 'I cooked a grape on this', price: '£100'},
    {title: 'For the Family 8', description: 'I cooked a grape on this', price: '£3120'},   
]

var touringObject = [
    {title: 'Touring Bike 1', description: 'One of the best Bikes', price: '£320'},
    {title: 'Touring Bike 2', description: 'the bike is one of the best', price: '£1320'},
    {title: 'Touring Bike 3', description: 'One of the best Bikes', price: '£900'},
    {title: 'Touring Bike 4', description: 'One of the best Bikes', price: '£1200'},
    {title: 'Touring Bike 5', description: 'One of the best Bikes', price: '£120'},
    {title: 'Touring Bike 6', description: 'One of the best Bikes', price: '£620'},
    {title: 'Touring Bike 7', description: 'One of the best Bikes', price: '£100'},
    {title: 'Touring Bike 8', description: 'One of the best Bikes', price: '£3120'},   
]

var electronicObject = [
    {title: 'Electronic Bike 1', description: 'Wow, what a bike', price: '£320'},
    {title: 'Electronic Bike 2', description: 'Wow, what a bike', price: '£1320'},
    {title: 'Electronic Bike 3', description: 'Wow, what a bike', price: '£900'},
    {title: 'Electronic Bike 4', description: 'Wow, what a bike', price: '£1200'},
    {title: 'Electronic Bike 5', description: 'Wow, what a bike', price: '£120'},
    {title: 'Electronic Bike 6', description: 'Wow, what a bike', price: '£620'},
    {title: 'Electronic Bike 7', description: 'Wow, what a bike', price: '£100'},
    {title: 'Electronic Bike 8', description: 'Wow, what a bike', price: '£3120'},   
]

function roadObjectClick(){
    for(i = 0; i < roadObject.length; i++){
        document.querySelector('link').style.textDecoration = 'none';
        document.getElementById('link-1').style.textDecoration = 'underline';
        titles[i].innerHTML = roadObject[i].title;
        description[i].innerHTML = roadObject[i].description;
        price[i].innerHTML = roadObject[i].price;
    }
}

function cityObjectClick(){
    for(i = 0; i < cityObject.length; i++){
        document.querySelector('link').style.textDecoration = 'underline'
        document.getElementById('link-2').style.textDecoration = 'underline';
        titles[i].innerHTML = cityObject[i].title;
        description[i].innerHTML = cityObject[i].description;
        price[i].innerHTML = cityObject[i].price;
    }
}

function speedObjectClick(){
    for(i = 0; i < speedObject.length; i++){
        document.getElementById('link-1').style.textDecoration = 'none';
        document.getElementById('link-3').style.textDecoration = 'underline';
        titles[i].innerHTML = speedObject[i].title;
        description[i].innerHTML = speedObject[i].description;
        price[i].innerHTML = speedObject[i].price;
    }
}

function familyObjectClick(){
    for(i = 0; i < familyObject.length; i++){
        document.getElementById('link-1').style.textDecoration = 'none';
        document.getElementById('link-4').style.textDecoration = 'underline';
        titles[i].innerHTML = familyObject[i].title;
        description[i].innerHTML = familyObject[i].description;
        price[i].innerHTML = familyObject[i].price;
    }
}

function touringObjectClick(){
    for(i = 0; i < touringObject.length; i++){
        document.getElementById('link-1').style.textDecoration = 'none';
        document.getElementById('link-5').style.textDecoration = 'underline';
        titles[i].innerHTML = touringObject[i].title;
        description[i].innerHTML = touringObject[i].description;
        price[i].innerHTML = touringObject[i].price;
    }
}

function electronicObjectClick(){
    for(i = 0; i < electronicObject.length; i++){
        document.getElementById('link-6').style.textDecoration = 'underline';
        document.getElementsByClassName('link').style.textDecoration = 'none'
        titles[i].innerHTML = electronicObject[i].title;
        description[i].innerHTML = electronicObject[i].description;
        price[i].innerHTML = electronicObject[i].price;
    }
}

roadObjectClick()
