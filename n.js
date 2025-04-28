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
        errorDiv.setAttribute('aria-live', 'polite'); // Accessibility
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
    const foodItem = document.createElement('li');
    foodItem.innerHTML = `${name} - ${calories} kcal <button class="remove-btn">Remove</button>`;

    // Style highlight animation
    foodItem.style.transition = 'background-color 0.3s';
    foodItem.style.backgroundColor = '#e0ffe0';
    setTimeout(() => foodItem.style.backgroundColor = '', 500);

    document.getElementById('food-list').appendChild(foodItem);

    totalCalories += calories;
    document.getElementById('total-calories').textContent = totalCalories;

    foodItem.querySelector('.remove-btn').addEventListener('click', function () {
        foodItem.remove();
        totalCalories = Math.max(0, totalCalories - calories);
        document.getElementById('total-calories').textContent = totalCalories;
    });
}

