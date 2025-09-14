// ========================
// Part 2: JavaScript Functions
// ========================

// Function with parameter & return value
function getCarDescription(type) {
  let description = '';
  switch(type) {
    case 'Sedan':
      description = 'Sedan: Comfortable family car.';
      break;
    case 'SUV':
      description = 'SUV: Spacious and versatile.';
      break;
    case 'Sports Car':
      description = 'Sports Car: Fast and stylish.';
      break;
    default:
      description = 'Unknown car type.';
  }
  return description;
}

// Function triggered by buttons
function showCarType(type) {
  const desc = getCarDescription(type);
  console.log(desc);
  alert(desc);
}

// ========================
// Part 3: Animate Cars with JS
// ========================
document.getElementById("animateCarsBtn").addEventListener("click", function() {
  const cars = document.querySelectorAll(".car");

  cars.forEach(car => {
    // Remove animation if already applied
    car.classList.remove("animate");

    // Re-add after short delay
    setTimeout(() => {
      car.classList.add("animate");
    }, 50);
  });
});
