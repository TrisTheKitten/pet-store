let currentPetIndex = 0;

function showAlert() {
    alert("Welcome to Joy Pet Store! Please visit our store or call (555) 123-PETS to learn more about adoption!");
}

function adoptPet() {
    alert("Thank you for your interest in adoption! We'll contact you soon to discuss the next steps.");
}

function displayCurrentPet() {
    const currentPet = pets[currentPetIndex];
    const petImage = document.getElementById('petImage');
    const petName = document.getElementById('petName');
    const petBreed = document.getElementById('petBreed');
    const petAge = document.getElementById('petAge');

    if (petImage && petName && petBreed && petAge) {
        petImage.src = currentPet.img;
        petImage.alt = currentPet.name;
        petName.textContent = currentPet.name;
        petBreed.textContent = currentPet.type;
        petAge.textContent = `Age: ${currentPet.age} years`;
    }
}

function nextPet() {
    currentPetIndex = (currentPetIndex + 1) % pets.length;
    displayCurrentPet();
}

function previousPet() {
    currentPetIndex = (currentPetIndex - 1 + pets.length) % pets.length;
    displayCurrentPet();
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayCurrentPet();

    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener('click', smoothScroll);
    }
}); 