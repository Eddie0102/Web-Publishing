// 찜 
document.addEventListener('DOMContentLoaded', function() {
    const heartIcon = document.getElementById('heartIcon');
    
    heartIcon.addEventListener('click', function() {
        // 클래스 'fa-regular'가 있는지 확인하고, 조건에 따라 클래스를 교체
        if (this.classList.contains('fa-regular')) {
            this.classList.remove('fa-regular');
            this.classList.add('fa-solid');
        } else {
            this.classList.remove('fa-solid');
            this.classList.add('fa-regular');
        }
    });
});


// 장바구니 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const imageUrl = this.getAttribute('data-image');
            addToCart(name, price, imageUrl);
        });
    });
});

function addToCart(name, price, imageUrl) {
    const cartItems = document.getElementById('cartItems');
    let itemDiv = cartItems.querySelector(`.cart-item[data-name="${name}"]`);
    
    if (itemDiv) {
        // 이미 상품이 장바구니에 있을 경우, 수량만 증가
        let quantity = itemDiv.querySelector('.quantity');
        quantity.textContent = parseInt(quantity.textContent) + 1;
    } else {
        // 새 상품을 장바구니에 추가
        itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.setAttribute('data-name', name);

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = name;

        const infoDiv = document.createElement('div');
        const valDiv = document.createElement('div');
        valDiv.classList.add("valDiv")

        const textDiv1 = document.createElement('p');
        textDiv1.textContent = `상품명 : ${name}`;

        const textDiv2 = document.createElement('p');
        textDiv2.textContent = `가격 : ${price}원`;

        const quantity = document.createElement('span');
        quantity.classList.add('quantity');
        quantity.textContent = '1';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.classList.add('deleteBtn');
        deleteButton.addEventListener('click', function() {
            itemDiv.remove();
        });

        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.addEventListener('click', function() {
            quantity.textContent = parseInt(quantity.textContent) + 1;
        });

        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.addEventListener('click', function() {
            const currentQuantity = parseInt(quantity.textContent);
            if (currentQuantity > 1) {
                quantity.textContent = currentQuantity - 1;
            }
        });

        infoDiv.appendChild(textDiv1);
        infoDiv.appendChild(textDiv2);
        infoDiv.appendChild(valDiv);
        valDiv.appendChild(decrementButton);
        valDiv.appendChild(quantity);
        valDiv.appendChild(incrementButton);


        infoDiv.appendChild(deleteButton);
        itemDiv.appendChild(img);
        itemDiv.appendChild(infoDiv);

        cartItems.appendChild(itemDiv);
    }
}
