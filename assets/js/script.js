/**
 * LIMELIGHT - Main Script
 * Manages site-wide UI functionality by injecting shared components.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Limelight: Site initialized.');

    // Inject Global Components
    injectComponent('header', HEADER_TEMPLATE);
    injectComponent('footer', FOOTER_TEMPLATE);

    // Initialize UI Components after injection
    initMobileMenu();
    initHeaderScroll();
    initLiveTime();
    initMobileAccordions();
});

/**
 * Injects HTML into a specific placeholder
 */
function injectComponent(id, htmlString) {
    const container = document.getElementById(id);
    if (container) {
        container.innerHTML = htmlString;
        console.log(`Limelight: ${id} component injected.`);
    }
}

/**
 * Mobile Navigation Logic
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const drawerClose = document.getElementById('drawer-close');
    const mainNav = document.getElementById('main-nav');

    if (!mainNav) return;

    // Open Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.add('active');
        });
    }

    // Close Menu
    if (drawerClose) {
        drawerClose.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    }

    // Close on link click
    const navLinks = document.querySelectorAll('.nav__link:not(.has-dropdown > .nav__link-wrapper > .nav__link)');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                mainNav.classList.remove('active');
            }
        });
    });
}

/**
 * Mobile Accordion / Dropdown Toggle
 */
function initMobileAccordions() {
    const dropdowns = document.querySelectorAll('.has-dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav__link-wrapper');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
}

/**
 * Header Scroll Effects
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
}

/**
 * Live Time Update
 */
function initLiveTime() {
    const timeElement = document.querySelector('.time-stamp');
    if (!timeElement) return;

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        }).toLowerCase();
        
        timeElement.textContent = timeString;
    }

    updateTime();
    setInterval(updateTime, 10000);
}


