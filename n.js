document.getElementById('food-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const foodName = document.getElementById('food-name').value;
    const calories = parseInt(document.getElementById('calories').value);

    if (foodName && !isNaN(calories)) {
        addFoodItem(foodName, calories);
        document.getElementById('food-name').value = '';
        document.getElementById('calories').value = '';
    } else {
        alert("Please enter valid food name and calories.");
    }
});

let totalCalories = 0;

function addFoodItem(name, calories) {
    // Create list item for the food log
    const foodItem = document.createElement('li');
    foodItem.innerHTML = `${name} - ${calories} kcal <button class="remove-btn">Remove</button>`;

    // Add the item to the list
    document.getElementById('food-list').appendChild(foodItem);

    // Update total calories
    totalCalories += calories;
    document.getElementById('total-calories').textContent = totalCalories;

    // Add event listener to remove button
    foodItem.querySelector('.remove-btn').addEventListener('click', function() {
        foodItem.remove();
        totalCalories -= calories;
        document.getElementById('total-calories').textContent = totalCalories;
    });
}
