const downloadData = [
    {
        category: "Main",
        files: [
            { name: "Item Sold Data", type: "Python", path: "ferrofy.github.io/Website/Downloads/Download_Files/Shop/File/Item_Sold.py" }
        ]
    }
];

// 🛠️ Render Function
function renderDownloads() {
    const container = document.getElementById("download-container");
    container.innerHTML = "";

    for (const cat of downloadData) {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = cat.category;
        categoryDiv.appendChild(categoryTitle);

        const filesDiv = document.createElement("div");
        filesDiv.classList.add("files");

        for (const file of cat.files) {
            const card = document.createElement("div");
            card.classList.add("download-card");

            card.innerHTML = `
                <h3>📄 ${file.name}</h3>
                <p>${file.type}</p>
                <div class="buttons">
                    <a href="${file.path}" download class="btn">Download</a>
                    <button onclick="copyLink('${file.path}')" class="btn secondary">Copy Link</button>
                </div>
            `;

            filesDiv.appendChild(card);
        }

        categoryDiv.appendChild(filesDiv);
        container.appendChild(categoryDiv);
    }
}

// 📋 Copy file link
function copyLink(filePath) {
    navigator.clipboard.writeText(filePath).then(() => {
        alert("✅ Link copied: " + filePath);
    });
}

// 🚀 Run on load
renderDownloads();
