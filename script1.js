const pets = [
    {
      name: "Bella",
      image: "https://placedog.net/500/400?id=1"
    },
    {
      name: "Charlie",
      image: "https://placedog.net/500/400?id=2"
    },
    {
      name: "Luna",
      image: "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
    },
    {
      name: "Max",
      image: "https://placedog.net/500/400?id=3"
    }
  ];
  
  // Dynamically load pets
  const petList = document.getElementById('pet-list');
  
  pets.forEach(pet => {
    const card = document.createElement('div');
    card.classList.add('pet-card');
    card.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}">
      <h3>${pet.name}</h3>
    `;
    petList.appendChild(card);
  });
  
  // Handle Form Submission
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your adoption application! 🐾 We will contact you soon.");
    this.reset();
  });
  