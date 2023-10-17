document.addEventListener('DOMContentLoaded', () => {
fetch("http://localhost:3000/dogs")
.then(response => response.json())
.then((json) => showDogs);

function showDogs(data) {
    dogs.forEach(dog => {
        Name.textcontext= dog.name;
        Breed.textcontext=dog.breed;
        sex.textcontext=dog.sex;
    });
  }
})
