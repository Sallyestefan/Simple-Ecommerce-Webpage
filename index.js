
    function addToCart(name, price, imageSrc) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ name: name, price: price, imageSrc: imageSrc });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    window.onload = function() {
      updateTotalPrice();
      displayCart();
    };
  
    function displayCart() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let cartDiv = document.getElementById('cart');
      cartDiv.innerHTML = '';
  
      cart.forEach((item, index) => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
  
        let img = document.createElement('img');
        img.src = item.imageSrc;
        itemDiv.appendChild(img);
  
        let name = document.createElement('p');
        name.textContent = item.name;
        itemDiv.appendChild(name);
  
        let price = document.createElement('p');
        price.textContent = item.price;
        itemDiv.appendChild(price);
  
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function() {
          removeItem(index);
          updateTotalPrice(); 
          displayCart(); 
        };
        itemDiv.appendChild(removeBtn);
        cartDiv.appendChild(itemDiv);
      });
    }
  
    function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
  
    function updateTotalPrice() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = 0;
  
        cart.forEach(item => {  
          totalPrice += parseFloat(item.price.replace('$', ''));
        });
        document.getElementById('totalPrice').textContent = "Total Price: $" + totalPrice.toFixed(2);
      }
