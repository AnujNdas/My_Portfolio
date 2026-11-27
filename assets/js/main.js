(() => {
  const savedTheme = localStorage.getItem("anuj-portfolio-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("anuj-portfolio-theme", theme);
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.innerHTML = theme === "dark"
        ? '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
        : '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z"/></svg>';
      button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    });
  }

  applyTheme(initialTheme);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
      });
    });

    const menuButton = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-main-nav]");
    if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.innerHTML = open
          ? '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m18 6-12 12M6 6l12 12"/></svg>'
          : '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
      });
    }

    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = new Date().getFullYear();
    });
  });
})();
