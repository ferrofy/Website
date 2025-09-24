const downloadData = [
    {
        category: "Logo",
        files: [
            { name: "Yellow { Main }", type: "png", path: "ferrofy.github.io/Website/Images/Yellow/Logo.png" },
            { name: "Cyan", type: "png", path: "ferrofy.github.io/Website/Images/Cyan/Logo.png" },
            { name: "Dark", type: "png", path: "ferrofy.github.io/Website/Images/Dark/Logo.png" },
            { name: "Green", type: "png", path: "ferrofy.github.io/Website/Images/Green/Logo.png" },
            { name: "Purple", type: "png", path: "ferrofy.github.io/Website/Images/Purple/Logo.png" },
        ]
    },
    {
        category: "Favicon",
        files: [
            { name: "Yellow { Main }", type: "png", path: "ferrofy.github.io/Website/Images/Yellow/Favicon.png" },
            { name: "Cyan", type: "png", path: "ferrofy.github.io/Website/Images/Cyan/Favicon.png" },
            { name: "Dark", type: "png", path: "ferrofy.github.io/Website/Images/Dark/Favicon.png" },
            { name: "Green", type: "png", path: "ferrofy.github.io/Website/Images/Green/Favicon.png" },
            { name: "Purple", type: "png", path: "ferrofy.github.io/Website/Images/Purple/Favicon.png" },
        ]
    },
    {
        category: "Intro",
        files: [
            { name: "Yellow { Main }", type: "png", path: "ferrofy.github.io/Website/Images/Yellow/Intro.png" },
            { name: "Cyan", type: "png", path: "ferrofy.github.io/Website/Images/Cyan/Intro.png" },
            { name: "Dark", type: "png", path: "ferrofy.github.io/Website/Images/Dark/Intro.png" },
            { name: "Green", type: "png", path: "ferrofy.github.io/Website/Images/Green/Intro.png" },
            { name: "Purple", type: "png", path: "ferrofy.github.io/Website/Images/Purple/Intro.png" },
        ]
    },
    {
        category: "Shop Item", // DO Later :)
        files: [
            { name: "Yellow { Main }", type: "png", path: "ferrofy.github.io/Website/Images/Yellow/Intro.png" },
            { name: "Cyan", type: "png", path: "ferrofy.github.io/Website/Images/Cyan/Intro.png" },
            { name: "Dark", type: "png", path: "ferrofy.github.io/Website/Images/Dark/Intro.png" },
            { name: "Green", type: "png", path: "ferrofy.github.io/Website/Images/Green/Intro.png" },
            { name: "Purple", type: "png", path: "ferrofy.github.io/Website/Images/Purple/Intro.png" },
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
