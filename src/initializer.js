import homeImgPath from "/src/assets/images/home-removebg-preview.png";
import fbImgPath from "/src/assets/images/fb-removebg-preview.png";
import igImgPath from "/src/assets/images/ig.png";
import cklImgPath from "/src/assets/images/ckl.png";

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add("navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "py-4", "mb-md-4");

    const containerFluid = document.createElement('div');
    containerFluid.classList.add("container-fluid");

    // Create navbar toggler button
    const navbarToggler = document.createElement('button');
    navbarToggler.classList.add("navbar-toggler");
    navbarToggler.setAttribute("data-bs-toggle", "collapse");
    navbarToggler.setAttribute("data-bs-target", "#nav");
    const togglerIcon = document.createElement('span');
    togglerIcon.classList.add("navbar-toggler-icon");
    navbarToggler.appendChild(togglerIcon);

    // Create navbar collapse div
    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add("collapse", "navbar-collapse", "justify-content-center");
    navbarCollapse.id = "nav";

    // Create navbar nav ul
    const navbarNav = document.createElement('ul');
    navbarNav.classList.add("navbar-nav", "nav-fill", "w-100");

    // Create home button
    const homeButton = document.createElement('button');
    homeButton.classList.add("navbar-brand", "active");
    const homeImg = document.createElement('img');
    homeImg.src = homeImgPath;
    homeButton.appendChild(homeImg);

    // Create buttons
    const buttons = [
        { id: "wbButton", text: "Weight And Balance" },
        { id: "departureButton", text: "Departure" },
        { id: "enrouteButton", text: "En-Route" },
        { id: "destinationButton", text: "Destination" },
        { id: "fuelButton", text: "Fuel" }
    ];

    buttons.forEach(buttonInfo => {
        const navItem = document.createElement('li');
        navItem.classList.add("nav-item");

        const navButton = document.createElement('button');
        navButton.id = buttonInfo.id;
        navButton.classList.add("nav-link", "btn");
        navButton.textContent = buttonInfo.text;

        navItem.appendChild(navButton);
        navbarNav.appendChild(navItem);
    });

    // Append all elements to build the structure
    containerFluid.appendChild(homeButton);
    containerFluid.appendChild(navbarToggler);
    containerFluid.appendChild(navbarCollapse);
    navbarCollapse.appendChild(navbarNav);
    nav.appendChild(containerFluid);

    // homeButton.onclick = () => setActivePage(createHome());
    // menuButton.onclick = () => setActivePage(createMenu());
    // contactButton.onclick = () => setActivePage(createContact());

    return nav
}

function createMain() {
    const main = document.createElement('main');

    return main
}

function createFooter() {
    const footer = document.createElement('footer');

    const navbar = document.createElement('nav');
    navbar.classList.add("navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "py-1", "fixed-bottom");

    const containerFluid = document.createElement('div');
    containerFluid.classList.add("container-fluid");

    // Create navbar brand with text
    const navbarBrand = document.createElement('div');
    navbarBrand.classList.add("navbar-brand", "text-wrap", "footer-text", "fs-6");
    navbarBrand.textContent = "Centrum Kształcenia Lotniczego Politechniki Poznańskiej";

    // Create navbar nav ul
    const navbarNav = document.createElement('ul');
    navbarNav.classList.add("navbar-nav");

    // Create individual nav items with links and images
    const socialLinks = [
        { href: "https://www.facebook.com/ckl.politechnikapoznanska/", src: fbImgPath, alt: "Facebook" },
        { href: "https://www.instagram.com/ckl.pp/", src: igImgPath, alt: "Instagram" },
        { href: "https://ckl.put.poznan.pl/", src: cklImgPath, alt: "CKL Website" }
    ];

    socialLinks.forEach(linkInfo => {
        const navItem = document.createElement('li');
        navItem.classList.add("nav-item");

        const navLink = document.createElement('a');
        navLink.href = linkInfo.href;
        navLink.target = "_blank";
        navLink.classList.add("nav-link");

        const img = document.createElement('img');
        img.src = linkInfo.src;
        img.alt = linkInfo.alt;

        navLink.appendChild(img);
        navItem.appendChild(navLink);
        navbarNav.appendChild(navItem);
    });

    // Append all elements to build the structure
    containerFluid.appendChild(navbarBrand);
    containerFluid.appendChild(navbarNav);
    navbar.appendChild(containerFluid);
    footer.appendChild(navbar);

    return footer
}

function setActivePage(page) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(page);
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

}

export default initializeWebsite;