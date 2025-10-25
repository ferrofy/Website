const downloadData = [
    {
        category: "Arduino",
        files: [
            { name: "RGB Lights", type: "Raw File", path: "https://github.com/ferrofy/Softwares/tree/36dca9576fa5836723c81146b1ff259d0070197a/Arduino/RGB_Lights" },
            { name: "BT Car", type: "Raw File", path: "https://github.com/ferrofy/Softwares/tree/36dca9576fa5836723c81146b1ff259d0070197a/Arduino/BT_Car" }
            
        ],
    },
    {
        category: "Excel Related",
        files: [
            { name: "Excel Search", type: "Raw File", path: "https://github.com/ferrofy/Softwares/tree/36dca9576fa5836723c81146b1ff259d0070197a/Excel_Search" }
        ]
    },
    {
        category: "Spammer",
        files: [
            { name: "Spammer", type: "Raw File", path: "https://github.com/ferrofy/Softwares/tree/36dca9576fa5836723c81146b1ff259d0070197a/Spammer" }
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
