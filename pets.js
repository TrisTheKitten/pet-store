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
  const petList = $('#pet-list');
  if (!petList.length) return;

  petList.empty();

  const selectedTypes = $('input[name="pet-type"]:checked').map(function() {
    return $(this).val();
  }).get();

  const filteredPets = pets.filter(pet => selectedTypes.includes(pet.type));

  filteredPets.forEach(pet => {
    const petItem = `
      <div class="pet">
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button class="adopt-btn">Adopt Now</button>
      </div>
    `;
    petList.append(petItem);
  });
}

$(document).ready(function() {
  if ($('#pet-list').length) {
    loadPets();

    $('input[name="pet-type"]').on('change', loadPets);
    $('#pet-list').on('click', '.adopt-btn', adoptPet);
  }
}); 