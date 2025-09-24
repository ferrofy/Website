const downloadData = [
    {
        category: "Main",
        files: [
            { name: "Item Sold Data", type: "Python", path: "ferrofy.github.io/Website/Downloads/Download_Files/Shop/File/Item_Sold.py" }
        ]
    }
];

// 🛠️ Render Function
async function renderDownloads() {
    const container = document.getElementById("download-container");
    container.innerHTML = "";

    for (const cat of downloadData) {
        // Create category block
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = cat.category;
        categoryDiv.appendChild(categoryTitle);

        const filesDiv = document.createElement("div");
        filesDiv.classList.add("files");

        for (const file of cat.files) {
            let fileExists = await checkFile(file.path);

            const card = document.createElement("div");
            card.classList.add("download-card");

            card.innerHTML = fileExists ? `
                <h3>📄 ${file.name}</h3>
                <p>${file.type}</p>
                <div class="buttons">
                  <a href="${file.path}" download class="btn">Download</a>
                  <button onclick="copyLink('${file.path}')" class="btn secondary">Copy Link</button>
                </div>
            ` : `
                <h3>📄 ${file.name}</h3>
                <p>---</p>
                <div class="buttons">
                  <button disabled class="btn">Not In Server</button>
                </div>
            `;

            filesDiv.appendChild(card);
        }

        categoryDiv.appendChild(filesDiv);
        container.appendChild(categoryDiv);
    }
}

// 🔍 Check if file exists
async function checkFile(url) {
    try {
        const response = await fetch(url, { method: "HEAD" });
        return response.ok;
    } catch {
        return false;
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
