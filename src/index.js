document.addEventListener('DOMContentLoaded', () => {
fetch("http://localhost:3000/dogs")
.then(response => response.json())
.then((json) =>{showDogs(json)});

function showDogs(data) {
   dogs.forEach(dog => {
      document.getElementById("Name").textContent = dog.name;
      document.getElementById("Breed").textContent = dog.breed;
      document.getElementById("sex").textContent = dog.sex;
    });
  }
})
