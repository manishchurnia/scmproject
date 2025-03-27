document.getElementById('food-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const foodNameInput = document.getElementById('food-name');
    const caloriesInput = document.getElementById('calories');
    const foodName = foodNameInput.value.trim();
    const calories = parseInt(caloriesInput.value);

    if (!foodName) {
        showError("Food name cannot be empty.");
        return;
    }

    if (isNaN(calories) || calories <= 0) {
        showError("Please enter a valid calorie value (greater than 0).");
        return;
    }

    addFoodItem(foodName, calories);
    foodNameInput.value = '';
    caloriesInput.value = '';
    clearError();
});

function showError(message) {
    let errorDiv = document.getElementById('error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.style.color = 'red';
        document.getElementById('food-form').appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearError() {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
        errorDiv.textContent = '';
    }
}


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

    // Ensure totalCalories is properly updated and does not go negative
    totalCalories = Math.max(0, totalCalories - calories);
    
    const totalCaloriesElement = document.getElementById('total-calories');
    if (totalCaloriesElement) {
        totalCaloriesElement.textContent = totalCalories;
    }

    });
}
