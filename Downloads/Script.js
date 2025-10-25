const categoryData = [
    {
        category: "Study",
        link: "https://ferrofy.github.io/Website/Downloads/Download_Files/Study",
        description: "AI Notes Comming Soon"
    },
    {
        category: "Shop",
        link: "https://ferrofy.github.io/Website/Downloads/Download_Files/Shop",
        description: "Data Will Be Uploaded Soon"
    },
    {
        category: "All Website Images",
        link: "https://ferrofy.github.io/Website/Downloads/Download_Files/Shop",
        description: "Uploaded All Latest Images"
    },
    {
        category: "All Website Files",
        link:  "https://github.com/ferrofy/Website/archive/refs/heads/main.zip",
        description: "Get All File Of This Website"
    },
    {
        category: "Softwares",
        link: "https://ferrofy.github.io/Website/Downloads/Download_Files/Softwares",
        description: "Get All The Softwares Made By Team FerroFy With Love"
    },
    {
        category: "Website Made",
        link: "https://ferrofy.github.io/Website/Downloads/Download_Files/Website_Made",
        description: "Get Whole Data Of Website Made By Team FerroFy With Love"
    }
];

function renderCategories() {
    const container = document.getElementById("category-container");
    container.innerHTML = "";

    categoryData.forEach(cat => {
        const card = document.createElement("a");
        card.classList.add("category-card");
        card.href = cat.link;

        card.innerHTML = `
      <h2>📁 ${cat.category}</h2>
      <p>${cat.description || "No description available"}</p>
    `;

        container.appendChild(card);
    });
}

renderCategories();