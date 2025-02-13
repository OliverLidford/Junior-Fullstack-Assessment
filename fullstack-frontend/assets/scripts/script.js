window.pets = [];
const pushPet = pet => {
  window.pets.push(pet);
  Pet.renderAll();
}

class Pet {
  constructor(name, species, age, color, breed, favoriteFood, favoriteToy, featured = false, special_property = null) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.color = color;
    this.breed = breed;
    this.favoriteFood = favoriteFood;
    this.favoriteToy = favoriteToy;
    this.featured = featured;
    this.special_property = special_property;
  }


  generateCard() {
    const featuredClass = this.featured ? 'pets__card--featured' : '';
    const specialClass = this.special_property ? 'pets__card--special' : '';
    const specialProperty = this.special_property ? `<p class="pets__card__info">Special Property: ${this.special_property}</p>` : '';

    return `
      <div class="pets__card ${featuredClass} ${specialClass}">
        <h2 class="pets__card__title">${this.name}</h2>
        <p class="pets__card__info">Species: ${this.species}</p>
        <p class="pets__card__info">Age: ${this.age}</p>
        <p class="pets__card__info">Color: ${this.color}</p>
        <p class="pets__card__info">Breed: ${this.breed}</p>
        <p class="pets__card__info">Favorite Food: ${this.favoriteFood}</p>
        <p class="pets__card__info">Favorite Toy: ${this.favoriteToy}</p>
        ${specialProperty}
        <button type="button" class="pets__card__button">More Info</button>
      </div>
    `;
  }



  static renderAll() {
    const petsGrid = document.querySelector('.pets__grid');
    if (!petsGrid) return;

    petsGrid.innerHTML = '';
    window.pets.forEach(pet => {
      petsGrid.innerHTML += pet.generateCard();
    });
  }
}


const fetchPets = species => {
  fetch(`http://127.0.0.1:3000/api/v1/pets${species ? `?species=${species}` : ''}`).then(response => response.json()).then(data => {
    console.log(data); // Add this line
    data.forEach(pet => {
      pushPet(new Pet(
        pet.name,
        pet.species,
        pet.age,
        pet.color,
        pet.breed,
        pet.favorite_food,
        pet.favorite_toy,
        pet.featured,
        pet.special_property
      ));
    });
  });
}


// Check params for "species" and fetch pets accordingly
const params = new URLSearchParams(window.location.search);
const species = params.get('species');
fetchPets(species);
