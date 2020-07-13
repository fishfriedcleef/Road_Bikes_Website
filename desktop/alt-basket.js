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

