# Purpose: Seed the database with some pets to test the API

# Clear the database
Pet.destroy_all

# Create fido
fido = Pet.create(
  name: "Fido",
  species: "dog",
  age: 3,
  color: "brown",
  breed: "labrador",
  favorite_food: "steak",
  favorite_toy: "bone"
)

# Create spot
spot = Pet.create(
  name: "Spot",
  species: "dog",
  age: 2,
  color: "black",
  breed: "labrador",
  favorite_food: "steak",
  favorite_toy: "ball"
)

# Create rover
rover = Pet.create(
  name: "Rover",
  species: "dog",
  age: 5,
  color: "white",
  breed: "labrador",
  favorite_food: "steak",
  favorite_toy: "rope",
  featured: true
)

# Create fluffy
fluffy = Pet.create(
  name: "Fluffy",
  species: "cat",
  age: 1,
  color: "white",
  breed: "persian",
  favorite_food: "fish",
  favorite_toy: "ball"
)

# Create patches
patches = Pet.create(
  name: "Patches",
  species: "cat",
  age: 2,
  color: "black",
  breed: "siamese",
  favorite_food: "fish",
  favorite_toy: "string",
  featured: true
)

# Create tiger
tiger = Pet.create(
  name: "Tiger",
  species: "cat",
  age: 3,
  color: "orange",
  breed: "siamese",
  favorite_food: "fish",
  favorite_toy: "yarn"
)

# Create smokey
smokey = Pet.create(
  name: "Smokey",
  species: "cat",
  age: 4,
  color: "gray",
  breed: "persian",
  favorite_food: "fish",
  favorite_toy: "feather"
)

scooby = Pet.create(
  name: 'Bobi',
  species: 'Dog',
  breed:'Great Dane',
  age: 2,
  color:'Brown',
  favorite_food:'My Caps',
  favorite_toy: 'also, my Caps',
  special_property: 'Dripped out by Heat!',
  featured: true,
)
