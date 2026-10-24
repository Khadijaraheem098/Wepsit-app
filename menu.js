function showFood(category, button) {
    var cards = document.querySelectorAll(".food-card");
    var buttons = document.querySelectorAll(".category-buttons button");

    cards.forEach(function(card) {
        if (category === "all" ||
            card.dataset.category === category) {
            card.hidden = false;
        } else {
            card.hidden = true;
        }
    });

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

function showFood(category, button) {
    const foods = document.querySelectorAll(".food-card");
    const buttons = document.querySelectorAll(".category-buttons button");

    foods.forEach(function(food) {
        if (
            category === "all" ||
            food.dataset.category === category
        ) {
            food.style.display = "block";
        } else {
            food.style.display = "none";
        }
    });

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}
