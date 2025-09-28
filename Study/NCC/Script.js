// ===========================================| Header |===========================================

// ========== Element References ==========

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("Menu_Button");
    const menu = document.getElementById("Menu");
    const closeBtn = document.getElementById("Menu_Close_Button");
    const menuItems = document.getElementById("Menu_Items");

    const toggle = document.getElementById("Change_Theme");
    const logo = document.getElementById("Logo");

    // ========== Navigation Links ==========

    const links = [
        { text: "Home ❌", href: "#home" },
        { text: "Shop ❌", href: "#shop" },
        { text: "All Services ❌", href: "#all_services" },
        { text: "Study", href: "../Study" },
        { text: "About ❌", href: "#about" },
        { text: "Contact", href: "../Contact" }
    ];

    links.forEach(link => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.textContent = link.text;
        listItem.appendChild(anchor);
        menuItems.appendChild(listItem);
    });

    // ========== Menu Toggle Handlers ==========

    menuBtn.addEventListener("click", () => {
        menu.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none";
    });

    // ========== Theme Color Meta Update ==========

    function updateThemeColor(isDark) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', isDark ? '#121212' : '#ffffff');
    }

    // ========== System Theme Detection ==========

    function applySystemTheme() {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.body.classList.toggle("dark-mode", isDark);
        toggle.checked = isDark;
        logo.src = isDark ? "../../Images/Dark/Logo.png" : "../../Images/Yellow/Logo.png";
        updateThemeColor(isDark);
    }

    applySystemTheme();

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemTheme);

    // ========== Theme Toggle Handler ==========

    toggle.addEventListener("change", () => {
        const isDark = toggle.checked;
        document.body.classList.toggle("dark-mode", isDark);
        logo.src = isDark ?  "../../Images/Dark/Logo.png" : "../../Images/Yellow/Logo.png";
        updateThemeColor(isDark);
    });
});

// ========== Main Entrance Fade Out ==========

window.addEventListener("load", () => {
    setTimeout(() => {
        const intro = document.getElementById("Main_Entrance");
        intro.classList.add("fade-out");
        setTimeout(() => {
            intro.remove();
        }, 1000);
    }, 3500);
});

// ===========================================| Study |===========================================

const subjects = [
    
    {
        title: "NCC",
        description: "Unity And Discipline",
        icon: "💪",
        link: "https://ferrofy.github.io/Website/Study/NCC"
    },
    {
        title: "CSE",
        description: "Explore How To Talk With Machine",
        icon: "💻",
        link: "https://ferrofy.github.io/Website/Study/CSE"
    },
    {
        title: "Math",
        description: "Lets Explore Universe By Understanding The Language of Universe",
        icon: "♾️",
        link: null
    },
    {
        title: "Physics",
        description: "No Day Dreaming , Just Math And Logic",
        icon: "⚡",
        link: null
    },
    {
        title: "Books Summary",
        description: "Your Best Friend Is Here",
        icon: "📚",
        link: null
    },
    {
        title: "Biology - Comming Soon",
        description: "Contact Our Team For a Particular Subject",
        icon: "🧬",
        link: null
    },
    {
        title: "Phycology - Comming Soon",
        description: "Contact Our Team For a Particular Subject",
        icon: "🧠",
        link: null
    },
    {
        title: "Chemistry - Comming Soon",
        description: "Contact Our Team For a Particular Subject",
        icon: "🧪",
        link: null
    },
    {
        title: "Economics - Comming Soon",
        description: "Contact Our Team For a Particular Subject",
        icon: "💰",
        link: null
    },
    {
        title: "Bussiness - Comming Soon",
        description: "Contact Our Team For a Particular Subject",
        icon: "🏢",
        link: null
    }
];
const section = document.getElementById('Study_Section');

subjects.forEach(subject => {
    const box = document.createElement('div');
    box.className = 'Subject_Box';

    box.innerHTML = `
    <div class="Subject_Icon">${subject.icon}</div>
    <h2>${subject.title}</h2>
    <p>${subject.description}</p>
  `;

    if (subject.link) {
        box.addEventListener('click', () => {
            window.location.href = subject.link;
        });
    } else {
        box.classList.add('disabled');
    }

    section.appendChild(box);
});

// ===========================================| Footer |===========================================

// ========== Quick Links Data ==========

const quickLinksData = [
    { name: "Home ❌", href: "#home" },
    { name: "Shop ❌", href: "#shop" },
    { name: "All Services ❌", href: "#all_services" },
    { name: "Study", href: "../Study" },
    { name: "About ❌", href: "#about" },
    { name: "Contact", href: "../Contact" }
];

// ========== Quick Links JS ==========

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

        if (link.href.startsWith("http")) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        }

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
