document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("Menu_Button");
    const menu = document.getElementById("Menu");
    const closeBtn = document.getElementById("Menu_Close_Button");
    const menuItems = document.getElementById("Menu_Items");

    const toggle = document.getElementById("Change_Theme");
    const logo = document.getElementById("Logo");

    const links = [
        // { text: "Home", href: "#home" }, Current Page
        { text: "Shop", href: "https://ferrofy.github.io/Website/Shop" },
        { text: "Study", href: "https://ferrofy.github.io/Website/Study" },
        { text: "Downloads", href: "https://ferrofy.github.io/Website/Downloads" },
        // { text: "About", href: "#about" }, Add Later
        { text: "Contact", href: "https://ferrofy.github.io/Website/Contact" }
    ];

    links.forEach(link => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.textContent = link.text;
        listItem.appendChild(anchor);
        menuItems.appendChild(listItem);
    });

    menuBtn.addEventListener("click", () => {
        menu.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none";
    });

    function updateThemeColor(isDark) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', isDark ? '#121212' : '#ffffff');
    }

    function applySystemTheme() {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.body.classList.toggle("dark-mode", isDark);
        toggle.checked = isDark;
        logo.src = isDark ? "../Images/Dark/Intro.png" : "../Images/Yellow/Intro.png";
        updateThemeColor(isDark);
    }

    applySystemTheme();

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemTheme);

    toggle.addEventListener("change", () => {
        const isDark = toggle.checked;
        document.body.classList.toggle("dark-mode", isDark);
        logo.src = isDark ? "../Images/Dark/Intro.png" : "../Images/Yellow/Intro.png";
        updateThemeColor(isDark);
    });
});

window.addEventListener("load", () => {
    setTimeout(() => {
        const intro = document.getElementById("Main_Entrance");
        intro.classList.add("fade-out");
        setTimeout(() => {
            intro.remove();
        }, 1000);
    }, 3500);
});


// =============================================================| Main |=============================================================

const services = {
    Study: {
        title: "Study",
        desc: "Get Latest Notes For A Particular Subject",
        url: "https://ferrofy.github.io/Website/Study"
    },
    Shop: {
        title: "Shop",
        desc: "Stuck In College ? Want Any Product ? Try To Reach Us",
        url: "https://ferrofy.github.io/Website/Shop"
    },
    Downloads: {
        title: "Downloads { Under Maintenance }",
        desc: "Want to Download All Data Of Website ? Come And Get All",
        url: "#comming_Soon" //https://ferrofy.github.io/Website/Downloads
    },
    FerroFy_Crypto_Token: {
        title: "FFy Crypto Token {Temporarily Unavailable} ",
        desc: "Want Crypto Mutual Funds ? Come and Get Max Profit",
        url: "#comming_Soon"
    },
    Decent_AI: {
        title: "Decentralised AI {Comming Soon} ",
        desc: "Who Controls This AI , Me , You , A comapany , Organization or Who ? Answer is No One",
        url: "#comming_Soon"
    },
    Contact_Us: {
        title: "Contact Us",
        desc: "Want to Reach Company ? Then Click Here",
        url: "https://ferrofy.github.io/Website/Contact"
    }
};

function initServices() {
    const buttons = document.querySelectorAll(".gradient-btn[data-key]");

    buttons.forEach(btn => {
        const key = btn.getAttribute("data-key");
        const data = services[key];

        if (!data) return;

        btn.innerHTML = `
      <span class="btn-content">
        <span class="btn-title">${data.title}</span>
        <span class="btn-desc">${data.desc}</span>
      </span>
    `;

        if (data.comingSoon) {
            btn.classList.add("coming-soon");
            btn.disabled = true;
            return;
        }

        btn.addEventListener("click", () => {
            window.location.href = data.url;
        });

        btn.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                btn.click();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", initServices);

// =============================================================| Footer |=============================================================

const quickLinksData = [
    // { name: "Home", href: "#home" }, Current Page
    { name: "Shop", href: "https://ferrofy.github.io/Website/Shop" },
    { name: "Study", href: "https://ferrofy.github.io/Website/Study" },
    { name: "Downloads", href: "https://ferrofy.github.io/Website/Downloads" },
    // { name: "About", href: "#about" }, Add Later
    { name: "Contact", href: "https://ferrofy.github.io/Website/Contact" }
];

document.addEventListener("DOMContentLoaded", () => {
    const quickLinksSection = document.createElement("div");
    quickLinksSection.classList.add("Footer_Sub_Box", "QuickLinks");

    const heading = document.createElement("h2");
    heading.textContent = "Quick Links";

    const list = document.createElement("ul");

    quickLinksData.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.name;
        li.appendChild(a);
        list.appendChild(li);
    });

    quickLinksSection.appendChild(heading);
    quickLinksSection.appendChild(list);

    const placeholder = document.getElementById("QuickLinks");
    if (placeholder) {
        placeholder.replaceWith(quickLinksSection);
    } else {
        console.error("Little Error For Quick Links , Contact Team For This");
    }
});