const companySocials = [
    { name: "facebook", icon: "fab fa-facebook-f", url: "https://facebook.com/share/1GGdjYr3bU/" },
    { name: "twitter", icon: "fab fa-twitter", url: "https://x.com/ferrofy" },
    { name: "instagram", icon: "fab fa-instagram", url: "https://instagram.com/ferrofy" },
    { name: "linkedin", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/ferrofy" },
    { name: "github", icon: "fab fa-github", url: "https://github.com/ferrofy" },
    { name: "email", icon: "fas fa-envelope", url: "mailto:team.ferrofy@gmail.com" },
    { name: "reddit", icon: "fab fa-reddit-alien", url: "https://reddit.com/user/FerroFy" },
    { name: "discord", icon: "fab fa-discord", url: "https://discord.gg/a5R85nzv4M" },
    { name: "youtube", icon: "fab fa-youtube", url: "https://youtube.com/@Team.FerroFy" }
];

const ceoSocials = [
    { name: "instagram", icon: "fab fa-instagram", url: "https://instagram.com/the_vp_official" },
    { name: "linkedin", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/vpx-ferrofy/" },
    { name: "github", icon: "fab fa-github", url: "https://github.com/sudo-vpx" },
    { name: "email", icon: "fas fa-envelope", url: "mailto:vikrantpathania.2007@gmail.com" },
    { name: "youtube", icon: "fab fa-youtube", url: "https://youtube.com/@VikrantPathania.2007" }
];

const companyContainer = document.getElementById("Company_Social_Icons");
const ceoContainer = document.getElementById("CEO_Social_Icons");

function renderSocialIcons(socialsArray, containerElement) {
    socialsArray.forEach(social => {
        const div = document.createElement("div");
        div.className = `Icon ${social.name}`;
        div.innerHTML = `<i class="${social.icon}"></i>`;
        div.addEventListener("click", () => {
            window.open(social.url, "_blank");
        });
        containerElement.appendChild(div);
    });
}

renderSocialIcons(companySocials, companyContainer);
renderSocialIcons(ceoSocials, ceoContainer);