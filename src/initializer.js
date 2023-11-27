import homeImgPath from "/src/assets/images/home-removebg-preview.png";
import fbImgPath from "/src/assets/images/fb-removebg-preview.png";
import igImgPath from "/src/assets/images/ig.png";
import cklImgPath from "/src/assets/images/ckl.png";

import createHome from "./home";
import createWb from "./wb";
import createDeparture from "./departure";
import createEnroute from "./enroute";
import createDestination from "./destination";
import createFuel from "./fuel";

import wbCalc from "./wbCalc";

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

    homeButton.onclick = () => setActivePage(createHome());

    // Create buttons
    const buttons = [
        { id: "wbButton", text: "Weight And Balance", action: () => setActivePage(createWb(), wbCalc) },
        { id: "departureButton", text: "Departure", action: () => setActivePage(createDeparture()) },
        { id: "enrouteButton", text: "En-Route", action: () => setActivePage(createEnroute()) },
        { id: "destinationButton", text: "Destination", action: () => setActivePage(createDestination()) },
        { id: "fuelButton", text: "Fuel", action: () => setActivePage(createFuel()) }
    ];

    buttons.forEach(button => {
        const navItem = document.createElement('li');
        navItem.classList.add("nav-item");

        const navButton = document.createElement('button');
        navButton.id = button.id;
        navButton.classList.add("nav-link", "btn");
        navButton.textContent = button.text;

        navItem.appendChild(navButton);
        navbarNav.appendChild(navItem);

        navButton.onclick = () => button.action();
    });

    // Append all elements to build the structure
    containerFluid.appendChild(homeButton);
    containerFluid.appendChild(navbarToggler);
    containerFluid.appendChild(navbarCollapse);
    navbarCollapse.appendChild(navbarNav);
    nav.appendChild(containerFluid);

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

function setActivePage(page, calc) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(page);

    if (calc) {
        calc();
    }
}

function initializeWebsite() {
        const content = document.getElementById('content');

        content.appendChild(createNav());
        content.appendChild(createMain());
        content.appendChild(createFooter());

        setActivePage(createHome());
}

export default initializeWebsite;