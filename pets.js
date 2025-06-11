const pets = [
  {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg"},
  {"name": "Lucy", "type": "Dog", "age": 2, "img": "img/dogs/dog02.jpg"},
  {"name": "Max", "type": "Dog", "age": 4, "img": "img/dogs/dog03.jpg"},
  {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg"},
  {"name": "Mittens", "type": "Cat", "age": 1, "img": "img/cats/cat02.jpg"},
  {"name": "Shadow", "type": "Cat", "age": 3, "img": "img/cats/cat03.jpg"},
  {"name": "Charlie", "type": "Bird", "age": 5, "img": "img/birds/bird01.jpg"},
  {"name": "Kiwi", "type": "Bird", "age": 2, "img": "img/birds/bird02.jpg"},
  {"name": "Capy", "type": "Capybara", "age": 1, "img": "img/capybaras/capybara01.jpg"},
  {"name": "Bara", "type": "Capybara", "age": 2, "img": "img/capybaras/capybara02.jpg"}
];

function adoptPet() {
  alert("Thank you for your interest in adoption! We'll contact you soon to discuss the next steps.");
}

function loadPets() {
  console.log('Loading pets...');
  const petList = document.getElementById('pet-list');
  if (!petList) return;

  pets.forEach(pet => {
    const petItem = document.createElement('div');
    petItem.className = 'pet';
    petItem.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn" onclick="adoptPet()">Adopt Now</button>
    `;
    petList.appendChild(petItem);
  });
  console.log('Pets loaded successfully.');
}

document.addEventListener('DOMContentLoaded', loadPets); 