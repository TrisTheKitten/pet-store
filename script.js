let currentPetIndex = 0;

function displayCurrentPet() {
    const currentPet = pets[currentPetIndex];
    $('#petImage').attr('src', currentPet.img).attr('alt', currentPet.name);
    $('#petName').text(currentPet.name);
    $('#petBreed').text(currentPet.type);
    $('#petAge').text(`Age: ${currentPet.age} years`);
}

function nextPet() {
    currentPetIndex = (currentPetIndex + 1) % pets.length;
    displayCurrentPet();
}

function previousPet() {
    currentPetIndex = (currentPetIndex - 1 + pets.length) % pets.length;
    displayCurrentPet();
}

$(document).ready(function() {
    if ($('#petImage').length) {
        displayCurrentPet();
    }

    $('.carousel-btn.next').on('click', nextPet);
    $('.carousel-btn.prev').on('click', previousPet);

    $('a[href="#contact"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
    $('#currentPet').on('click', '.adopt-btn', adoptPet);
    $('.pet-grid').on('click', '.adopt-btn', adoptPet);
}); 