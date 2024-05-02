const blogPostsContainer = document.getElementById('blogPosts');
const menuItems = [
    { name: 'beyaynet', description: '       variety of food in one plate        ', price: '80 birr' },
    { name: 'firfer', description: 'spicy made from injera and very delicious', price: '60 birr' },
    { name: 'pasta', description: 'italy pasta with secret ingredients and spicy delicious taste', price: '70 birr' },
];

/*Function to create and append a menu item*/
function createMenuItem(item) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.className = 'border border-5';

    const itemImage = document.createElement('img');
    itemImage.classList.add("images");
    itemImage.src = ` ${item.name}.jpg`;
    

    const itemName = document.createElement('h3');
    itemName.className="text-primary";
    itemName.textContent = item.name;

    const itemDescription = document.createElement('p');
    itemDescription.className="text-success";
    itemDescription.textContent = item.description;

    const itemPrice = document.createElement('p');
    itemPrice.className="text-info";
    itemPrice.textContent = 'Price: ' + item.price;

    const moreInfoButton = document.createElement('button');
    moreInfoButton.className = 'btn btn-outline-primary';
    moreInfoButton.dataset.item = item.name;
    moreInfoButton.textContent = 'More Info';

    menuItemDiv.appendChild(itemImage);
    menuItemDiv.appendChild(itemName);
    menuItemDiv.appendChild(itemDescription);
    menuItemDiv.appendChild(itemPrice);
    menuItemDiv.appendChild(moreInfoButton);

    blogPostsContainer.appendChild(menuItemDiv);
}

menuItems.forEach(createMenuItem);

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll('.btn');
  
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var itemName = button.getAttribute('data-item');
            displayItemInfo(itemName);
        });
    });
  
    /* Function to display item information*/
    function displayItemInfo(itemName) {
        var itemInfo;
        switch (itemName) {
            case 'beyaynet':
                itemInfo = "miser wot , boild poteto , gomen , keysir ";
                break;
            case 'firfer':
                itemInfo = "ingredients: injera , tomato sause, onion , oil ";
                break;
            case 'pasta':
                itemInfo = "ingredients: enjera or bread , pasta , tomato sause , oil ";
                break;
            default:
                itemInfo = "Item information not available.</br> fsdhgasdjgHF";
        }
  
        window.alert(itemInfo);
    }
  
    
  });
  const order_message = document.getElementById('order_message');
  class Order {
    constructor() {
      this.form = document.getElementById('orderform');
      this.nameInput = document.querySelector('input[type="text"]');
      this.emailInput = document.querySelectorinput([type=""])
      this.foodItemSelect = document.getElementById('food-item');
  
      this.bindEvents();
    }
  
    bindEvents() {
      this.form.addEventListener('submit', this.onFormSubmit.bind(this));
    }
  
    onFormSubmit(event) {
      event.preventDefault();
  
      const name = this.nameInput.value;
      const email = this.emailInput.value;
      const foodItem = this.foodItemSelect.value;
  
      if (!name || !email || !foodItem) {
        alert('Please fill out all fields.');
        return;
      }
  
      // You can add code here to send the order data to a server or store it locally.
      console.log(`Name: ${name}, Email: ${email}, Food Item: ${foodItem}`);
      order_message.appendChild(`name: ${name}  + ' ordered ' + ${foodItem}`);

      // Clear the form fields
      this.nameInput.value = '';
      this.emailInput.value = '';
      this.foodItemSelect.value = '';
    }
  }
  
  // Create a new instance of the Order class
  
  onFormSubmit(event)