document.getElementById('nutritionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const meal = document.getElementById('meal').value;
    const foodItem = document.getElementById('foodItem').value;
    const servingSize = document.getElementById('servingSize').value;
    const calories = parseInt(document.getElementById('calories').value);
    const protein = parseInt(document.getElementById('protein').value);
    const carbs = parseInt(document.getElementById('carbs').value);
    const fat = parseInt(document.getElementById('fat').value);


    const tableBody = document.getElementById('nutritionTableBody');
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = meal;
    newRow.insertCell(1).textContent = foodItem;
    newRow.insertCell(2).textContent = servingSize;
    newRow.insertCell(3).textContent = calories;
    newRow.insertCell(4).textContent = protein;
    newRow.insertCell(5).textContent = carbs;
    newRow.insertCell(6).textContent = fat;


    updateTotalIntake(calories, protein, carbs, fat);


    document.getElementById('nutritionForm').reset();
});

let totalCalories = 0;
let totalProtein = 0;
let totalCarbs = 0;
let totalFat = 0;

function updateTotalIntake(calories, protein, carbs, fat) {
    totalCalories += calories;
    totalProtein += protein;
    totalCarbs += carbs;
    totalFat += fat;

    document.getElementById('totalCalories').textContent = totalCalories;
    document.getElementById('totalProtein').textContent = totalProtein;
    document.getElementById('totalCarbs').textContent = totalCarbs;
    document.getElementById('totalFat').textContent = totalFat;
}