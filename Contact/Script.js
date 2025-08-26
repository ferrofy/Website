const socials = [
  { name: "facebook", icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1GGdjYr3bU/" },
  { name: "twitter", icon: "fab fa-twitter", url: "https://x.com/ferrofy" },
  { name: "instagram", icon: "fab fa-instagram", url: "https://instagram.com/ferrofy" },
  { name: "linkedin", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/ferrofy" },
  { name: "github", icon: "fab fa-github", url: "https://github.com/ferrofy" },
  { name: "email", icon: "fas fa-envelope", url: "mailto:team.ferrofy@gmail.com" },
  { name: "reddit", icon: "fab fa-reddit-alien", url: "https://www.reddit.com/user/FerroFy" },
  { name: "discord", icon: "fab fa-discord", url: "https://discord.gg/a5R85nzv4M" },
  // { name: "telegram", icon: "fab fa-telegram-plane", url: "https://t.me/yourusername" },
  { name: "youtube", icon: "fab fa-youtube", url: "https://youtube.com/@Team.FerroFy" }
];

const container = document.getElementById("Social_Icons");

socials.forEach(social => {
  const div = document.createElement("div");
  div.className = `Icon ${social.name}`;
  div.innerHTML = `<i class="${social.icon}"></i>`;
  div.addEventListener("click", () => {
    window.open(social.url, "_blank");
  });
  container.appendChild(div);
});