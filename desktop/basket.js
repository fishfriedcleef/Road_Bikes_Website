var button = document.getElementById('buyNow');
button.addEventListener('click', () => {
    cartIncrease();
    productAdd('Raleigh_City_Bike');
    document.getElementById('empty').style.display = 'none'
    itemInfo(raleigh)
})

window.addEventListener('load', function(){
    var cartValue = localStorage.getItem('cartCount');
    if(cartValue){
        localStorage.setItem('cartCount', cartValue);
        document.getElementById('basketCount').innerHTML = cartValue;
        document.getElementById('empty').style.display = 'none'
        document.getElementById('item-1').style.display = 'flex'
    }
    if(Raleigh_City_Bike){
        itemInfo(raleigh)
    }
})

function cartIncrease(){
    var cartValue = localStorage.getItem('cartCount');
    cartValue = parseInt(cartValue);
    if(cartValue){
        localStorage.setItem('cartCount', cartValue += 1);
        document.getElementById('basketCount').innerHTML = cartValue;
        document.getElementById('item-1').style.display = 'flex'
    } else{
        localStorage.setItem('cartCount', 1);
        document.getElementById('basketCount').innerHTML = 1;
        document.getElementById('item-1').style.display = 'flex'
    }
}

function productAdd(productCount){
    var productValue = localStorage.getItem(productCount);
    productValue = parseInt(productValue);
    if(productValue){
        localStorage.setItem(productCount, productValue += 1);
    } else{
        localStorage.setItem(productCount, 1);
    }
}

function itemInfo(object){
    document.getElementById('item-title-1').innerHTML = object.title;
    document.getElementById('colour-1').innerHTML = object.colour;
    document.getElementById('description-1').innerHTML = object.description;
}

var altCount = document.getElementById('basketCount');
var cartValue = localStorage.getItem('cartCount');
altCount.innerHTML = cartValue;


// basket modal
var basket = document.getElementById('basket');
var basketContent = document.getElementById('basket-content');
var basketClose = document.getElementById('basketClose');
var basketContainer = document.getElementById('basketContainer')

basket.onclick = function(){
    basketContainer.style.display = 'block';
}

basketClose.onclick = function(){
    basketContainer.style.display = 'none'
    basketClose.style.display = 'none';
}

var raleigh = {
    title: 'Raleigh City Bike',
    colour: 'White and Orange',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
}

var johnsonTownBike = {
    title: 'Johnson Town Bike',
    colour: 'Red',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}
