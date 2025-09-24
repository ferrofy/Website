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
        category: "Website All Images",
        link: "https://ferrofy.github.io/Website/Downloads/Download_Files/Shop",
        description: "Uploaded All Latest Images"
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

// 🚀 Run on load
renderCategories();
