const quantity = document.querySelector('#quantity');
const delivery = document.querySelector('#delivery');
const local = document.querySelector('#pickup')
const form = document.querySelector('form');

quantity.addEventListener('change', updatePrice);
delivery.addEventListener('input', addAddressField);
local.addEventListener('input', addAddressField);


function updatePrice() {
    const qty = document.querySelector('#qty');
    const subtotal = document.querySelector('#subtotal');
    qty.textContent = quantity.value;
    subtotal.textContent = quantity.value;
}

function addAddressField() {
    const address = document.querySelector('#addy');
    if (delivery.checked) {
        address.style.display = 'inline-block';
    } else if (local.checked) {
        address.style.display = 'none';
    }
}