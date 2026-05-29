/**
 * LIMELIGHT - Component Definitions
 * Premium Figma-Inspired Header with Pixel-Perfect Mobile Drawer.
 */

const HEADER_TEMPLATE = `
<div class="header-inner">
    <!-- Top Bar -->
    <div class="header-top ">
    <div class="start-top">
    </div>
        <div class="header-top__left">
            <div class="container top-left__content">
                <span>We're available 24/7</span>
                <span class="status-indicator"></span>
                <span class="time-stamp">5:37 pm</span>
            </div>
        </div>
        <div class="header-top__right">
            <div class="container top-right__content">
                <div class="rating-badge">
                    <img src="./assets/images/left-wing.png" alt="" class="laurel">
                    <div class="badge-text">
                        <span class="badge-line-1">5.0—STAR RATED BY</span>
                        <span class="badge-line-2">105 CUSTOMERS</span>
                    </div>
                    <img src="./assets/images/right-wing.png" alt="" class="laurel">
                </div>
                <div class="local-badge">
                    <div class="local-icon-wrapper">
                        <img src="./assets/images/location.svg" alt="" class="local-icon">
                    </div>
                    <div class="badge-text">
                        <span class="badge-line-1">LOCALLY OWNED</span>
                        <span class="badge-line-2">AND OPERATED</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="slant-separator"></div>
    </div>

    <!-- Main Navigation -->
    <div class="header-main">
        <div class="container header-main__container">
            <div class="logo-section">
                <a href="index.html" class="logo">
                    <img src="./assets/images/LimelightLogo.svg" alt="Limelight" class="logo-img">
                </a>
            </div>

            <nav class="nav" id="main-nav">
                <!-- Mobile Drawer Header -->
                <div class="drawer-header mobile-only">
                    <button class="drawer-close" id="drawer-close">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                    </button>
                    <img src="./assets/images/LimelightLogo.svg" alt="Limelight" class="drawer-logo">
                </div>

                <ul class="nav__list">
                    <li><a href="index.html" class="nav__link active">HOME</a></li>
                    
                    <li class="has-dropdown">
                        <div class="nav__link-wrapper">
                            <a href="#services" class="nav__link">SERVICES <span class="chevron desktop-only"></span></a>
                            <span class="accordion-toggle mobile-only"></span>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a href="#mowing">Lawn Mowing & Edging</a></li>
                            <li><a href="#maintenance">Garden Maintenance</a></li>
                            <li><a href="#landscaping">New Gardens & Landscaping</a></li>
                            <li><a href="#removal">Garden Removal</a></li>
                        </ul>
                    </li>

                    <li class="has-dropdown">
                        <div class="nav__link-wrapper">
                            <a href="#areas" class="nav__link">AREAS WE SERVE <span class="chevron desktop-only"></span></a>
                            <span class="accordion-toggle mobile-only"></span>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a href="#sydney">Sydney Central</a></li>
                            <li><a href="#west">Greater West</a></li>
                            <li><a href="#north">North Shore</a></li>
                            <li><a href="#south">Southern Suburbs</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="#projects" class="nav__link">PROJECTS</a></li>
                    <li><a href="#updates" class="nav__link">UPDATES</a></li>
                </ul>
            </nav>

            <div class="header-cta">
                <a href="tel:0412345678" class="mobile-call-btn mobile-only">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33308 0.500108C7.33308 0.3675 7.38576 0.240323 7.47953 0.146555C7.57329 0.0527866 7.70047 0.000108206 7.83308 0.000108206C9.20336 0.000108206 10.5175 0.544452 11.4865 1.51339C12.4554 2.48233 12.9997 3.79649 12.9997 5.16677C12.9997 5.29938 12.9471 5.42656 12.8533 5.52033C12.7595 5.6141 12.6324 5.66677 12.4997 5.66677C12.3671 5.66677 12.24 5.6141 12.1462 5.52033C12.0524 5.42656 11.9997 5.29938 11.9997 5.16677C11.9997 4.06171 11.5608 3.0019 10.7794 2.2205C9.99796 1.4391 8.93815 1.00011 7.83308 1.00011C7.70047 1.00011 7.57329 0.94743 7.47953 0.853662C7.38576 0.759894 7.33308 0.632716 7.33308 0.500108ZM7.33308 3.16677C7.33308 3.03417 7.38576 2.90699 7.47953 2.81322C7.57329 2.71945 7.70047 2.66677 7.83308 2.66677C8.49612 2.66677 9.13201 2.93017 9.60085 3.39901C10.0697 3.86785 10.3331 4.50373 10.3331 5.16677C10.3331 5.29938 10.2804 5.42656 10.1866 5.52033C10.0929 5.6141 9.96569 5.66677 9.83308 5.66677C9.70047 5.66677 9.57329 5.6141 9.47953 5.52033C9.38576 5.42656 9.33308 5.29938 9.33308 5.16677C9.33308 4.76895 9.17504 4.38742 8.89374 4.10611C8.61243 3.82481 8.2309 3.66677 7.83308 3.66677C7.70047 3.66677 7.57329 3.6141 7.47953 3.52033C7.38576 3.42656 7.33308 3.29938 7.33308 3.16677ZM4.50241 0.777442C4.12108 0.237442 3.59308 -0.00589179 3.03308 0.000108206C2.50175 0.00544154 1.98441 0.232775 1.55241 0.535442C1.11179 0.845655 0.736069 1.23904 0.446413 1.69344C0.17308 2.12611 -0.0242535 2.63744 0.00241312 3.13677C0.13108 5.53877 1.48241 8.10544 3.38041 10.0048C5.27708 11.9021 7.80975 13.2208 10.3671 12.9688C10.8684 12.9194 11.3424 12.6641 11.7297 12.3388C12.1304 11.9994 12.4577 11.5821 12.6917 11.1121C12.9184 10.6508 13.0537 10.1188 12.9791 9.60077C12.9017 9.06077 12.5997 8.57811 12.0444 8.25811C11.9294 8.19135 11.8156 8.12245 11.7031 8.05144C11.6031 7.98944 11.4964 7.92211 11.3671 7.84478C11.1029 7.6819 10.8242 7.54397 10.5344 7.43278C10.2364 7.32411 9.89575 7.25277 9.54108 7.30144C9.17375 7.35211 8.83241 7.52544 8.53708 7.83611C8.30975 8.07611 7.97508 8.15077 7.50441 8.01478C7.02575 7.87611 6.48708 7.53211 6.01908 7.06678C5.55108 6.60278 5.19708 6.06011 5.04575 5.57011C4.89641 5.08477 4.96241 4.72811 5.19575 4.48211C5.51108 4.15011 5.67908 3.78077 5.71441 3.39011C5.74908 3.01011 5.65441 2.65278 5.51908 2.34078C5.31641 1.87478 4.97241 1.41144 4.70308 1.05011C4.63536 0.95977 4.56869 0.868653 4.50308 0.776775" fill="white"/>
</svg>

                </a>

                <div class="call-us desktop-only">
                    <div class="call-icon1">
                         <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33308 0.500108C7.33308 0.3675 7.38576 0.240323 7.47953 0.146555C7.57329 0.0527866 7.70047 0.000108206 7.83308 0.000108206C9.20336 0.000108206 10.5175 0.544452 11.4865 1.51339C12.4554 2.48233 12.9997 3.79649 12.9997 5.16677C12.9997 5.29938 12.9471 5.42656 12.8533 5.52033C12.7595 5.6141 12.6324 5.66677 12.4997 5.66677C12.3671 5.66677 12.24 5.6141 12.1462 5.52033C12.0524 5.42656 11.9997 5.29938 11.9997 5.16677C11.9997 4.06171 11.5608 3.0019 10.7794 2.2205C9.99796 1.4391 8.93815 1.00011 7.83308 1.00011C7.70047 1.00011 7.57329 0.94743 7.47953 0.853662C7.38576 0.759894 7.33308 0.632716 7.33308 0.500108ZM7.33308 3.16677C7.33308 3.03417 7.38576 2.90699 7.47953 2.81322C7.57329 2.71945 7.70047 2.66677 7.83308 2.66677C8.49612 2.66677 9.13201 2.93017 9.60085 3.39901C10.0697 3.86785 10.3331 4.50373 10.3331 5.16677C10.3331 5.29938 10.2804 5.42656 10.1866 5.52033C10.0929 5.6141 9.96569 5.66677 9.83308 5.66677C9.70047 5.66677 9.57329 5.6141 9.47953 5.52033C9.38576 5.42656 9.33308 5.29938 9.33308 5.16677C9.33308 4.76895 9.17504 4.38742 8.89374 4.10611C8.61243 3.82481 8.2309 3.66677 7.83308 3.66677C7.70047 3.66677 7.57329 3.6141 7.47953 3.52033C7.38576 3.42656 7.33308 3.29938 7.33308 3.16677ZM4.50241 0.777442C4.12108 0.237442 3.59308 -0.00589179 3.03308 0.000108206C2.50175 0.00544154 1.98441 0.232775 1.55241 0.535442C1.11179 0.845655 0.736069 1.23904 0.446413 1.69344C0.17308 2.12611 -0.0242535 2.63744 0.00241312 3.13677C0.13108 5.53877 1.48241 8.10544 3.38041 10.0048C5.27708 11.9021 7.80975 13.2208 10.3671 12.9688C10.8684 12.9194 11.3424 12.6641 11.7297 12.3388C12.1304 11.9994 12.4577 11.5821 12.6917 11.1121C12.9184 10.6508 13.0537 10.1188 12.9791 9.60077C12.9017 9.06077 12.5997 8.57811 12.0444 8.25811C11.9294 8.19135 11.8156 8.12245 11.7031 8.05144C11.6031 7.98944 11.4964 7.92211 11.3671 7.84478C11.1029 7.6819 10.8242 7.54397 10.5344 7.43278C10.2364 7.32411 9.89575 7.25277 9.54108 7.30144C9.17375 7.35211 8.83241 7.52544 8.53708 7.83611C8.30975 8.07611 7.97508 8.15077 7.50441 8.01478C7.02575 7.87611 6.48708 7.53211 6.01908 7.06678C5.55108 6.60278 5.19708 6.06011 5.04575 5.57011C4.89641 5.08477 4.96241 4.72811 5.19575 4.48211C5.51108 4.15011 5.67908 3.78077 5.71441 3.39011C5.74908 3.01011 5.65441 2.65278 5.51908 2.34078C5.31641 1.87478 4.97241 1.41144 4.70308 1.05011C4.63536 0.95977 4.56869 0.868653 4.50308 0.776775" fill="white"/>
</svg>

                    </div>
                    <div class="call-text">
                        <span class="call-label">CALL US NOW</span>
                        <span class="call-number">0412 345 678</span>
                    </div>
                </div>
                <a href="#contact" class="btn-contact desktop-only">CONTACT US NOW</a>
                
                <button class="mobile-toggle mobile-only" id="menu-toggle">
                   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2150)">
<path d="M3.98242 12.7434H21.5046" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.98242 6.3717H21.5046" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.98242 19.1151H21.5046" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_2150">
<rect width="25.4868" height="25.4868" fill="white"/>
</clipPath>
</defs>
</svg>

                </button>
            </div>
        </div>
    </div>
</div>
`;

const FOOTER_TEMPLATE = `
 <footer class="main-footer">
            <section class="main-contact" id="contact">
                <div class="container">
                    <div class="contact-box">
                        <div class="contact-box__left">

                            <img src="./assets/images/men.png" alt="Electrician" class="contact-men">
                            <div class="contact-left-text">
                                <h3 class="left-text-thin">THE ELECTRICIANS</h3>
                                <h2 class="left-text-bold">YOU CAN RELY ON...</h2>
                            </div>
                        </div>
                        <div class="contact-box__right">
                            <div class="contact-form-card">
                                <h2 class="form-card-title">CONTACT US TO <br>GET A FREE QUOTE</h2>
                                <p class="form-card-subtitle">Call us on <a href="tel:0412345678"
                                        class="text-primary-green-dotted">0412 345 678</a> or fill out the form below
                                </p>

                                <form class="contact-form">
                                    <div class="input-group-custom">
                                        <span class="input-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--primary-color)">
                                                <path
                                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </span>
                                        <input type="text" placeholder="Enter name" required>
                                    </div>
                                    <div class="form-row">
                                        <div class="input-group-custom">
                                            <span class="input-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24"
                                                    fill="var(--primary-color)">
                                                    <path
                                                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                                </svg>
                                            </span>
                                            <input type="tel" placeholder="Enter phone" required>
                                        </div>
                                        <div class="input-group-custom">
                                            <span class="input-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24"
                                                    fill="var(--primary-color)">
                                                    <path
                                                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                                </svg>
                                            </span>
                                            <input type="email" placeholder="Enter email" required>
                                        </div>
                                    </div>
                                    <div class="input-group-custom">
                                        <span class="input-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--primary-color)">
                                                <path
                                                    d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                                            </svg>
                                        </span>
                                        <input type="text" placeholder="How can we help?" required>
                                    </div>
                                    <button type="submit" class="btn-submit-quote">Get Your Free Quote</button>
                                </form>

                                <div class="form-badges">
                                     <div class="hero-rating"
                        style="transform: scale(0.85); transform-origin: center right; margin-right: 5px;">
                        <img src="./assets/images/hero-right.svg" style="filter: invert(1);" alt="" class="hero-laurel">
                        <div class="rating-content">
                            <span class="rating-line1" style="color: #000;">5.0—STAR RATED BY</span>
                            <span class="rating-line2" style="color: #000;">105 CUSTOMERS</span>
                        </div>
                        <img src="./assets/images/hero-left.svg" style="filter: invert(1);" alt="" class="hero-laurel">
                    </div>
                    <div class="hero-local"
                        style="transform: scale(0.85); transform-origin: center left; margin-left: 5px;">
                        <img src="./assets/images/location.svg" style="filter: invert(1);" alt="" class="local-icon">
                        <div class="local-content" style="align-items: flex-start; margin-left: 5px;">
                            <span class="local-line1" style="color: #000; font-weight: 800;">LOCALLY
                                OWNED</span>
                            <span class="local-line2" style="color: #000; font-weight: 400; font-size: 11px;">AND
                                OPERATED</span>
                        </div>
                    </div>
                                </div>
                                <div class="secure-info">
                                    <span class="lock-icon">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary-color)">
                                            <path
                                                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                        </svg>
                                    </span>
                                    Your information is secure
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="footer-secound-section">
                <div class="container footer-container">
                    <!-- Left Column: Services -->
                    <div class="footer-col footer-left">
                        <h3 class="footer-title">SERVICES</h3>
                        <ul class="footer-menu">
                            <li><a href="#mowing">Lawn Mowing & Edging</a></li>
                            <li><a href="#maintenance">Garden Maintenance</a></li>
                            <li><a href="#landscaping">New Gardens & Landscaping</a></li>
                            <li><a href="#removal">Garden Removal</a></li>
                        </ul>
                    </div>

                    <!-- Center Column: Brand & CTA -->
                    <div class="footer-col footer-center">
                        <div class="footer-logo-box">
                            <img src="./assets/images/logo.png" alt="Limelight" class="footer-logo-img">
                        </div>
                        <p class="footer-brand-text">Reliable electrical solutions across Melbourne - commercial,
                            fit-outs, and maintenance done right.</p>
                        <a href="#contact" class="btn-hero-primary footer-btn">GET A FAST QUOTE</a>

                        <div class="footer-social">
                            <span class="social-label">Follow Us On:</span>
                            <div class="social-icons">
                                <a href="#" class="social-link"><svg width="18" height="18" viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                        </path>
                                    </svg></a>
                                <a href="#" class="social-link"><svg width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg></a>
                                <a href="#" class="social-link"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1965)">
<path d="M17.7243 9.6232C17.7243 9.01039 17.6693 8.42114 17.5672 7.85547H9.42773V11.2024H14.0788C13.8746 12.2787 13.2618 13.1901 12.3425 13.8029V15.9792H15.1473C16.7815 14.4707 17.7243 12.2552 17.7243 9.6232Z" fill="white"/>
<path d="M9.42806 18.0685C11.7615 18.0685 13.7178 17.2986 15.1477 15.9787L12.3429 13.8024C11.5729 14.3209 10.5908 14.6352 9.42806 14.6352C7.18108 14.6352 5.27193 13.1189 4.5884 11.0762H1.71289V13.3074C3.13493 16.128 6.04973 18.0685 9.42806 18.0685Z" fill="white"/>
<path d="M4.58775 11.0681C4.4149 10.5495 4.31277 9.99957 4.31277 9.42603C4.31277 8.8525 4.4149 8.30254 4.58775 7.78401V5.55273H1.71223C1.12299 6.71551 0.785156 8.02756 0.785156 9.42603C0.785156 10.8245 1.12299 12.1366 1.71223 13.2993L3.95136 11.5552L4.58775 11.0681Z" fill="white"/>
<path d="M9.42806 4.22634C10.7008 4.22634 11.8322 4.66631 12.7357 5.51482L15.2105 3.04C13.7099 1.64152 11.7615 0.785156 9.42806 0.785156C6.04973 0.785156 3.13493 2.72573 1.71289 5.55411L4.5884 7.78538C5.27193 5.74267 7.18108 4.22634 9.42806 4.22634Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_1965">
<rect width="18.8558" height="18.8558" fill="white"/>
</clipPath>
</defs>
</svg>
</a>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Contact -->
                    <div class="footer-col footer-right">
                        <h3 class="footer-title">CONTACT INFO</h3>
                        <ul class="contact-list">
                            <li>
                                <span class="contact-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3727 15.3602H5.09614C2.44019 15.3602 0.912109 13.8423 0.912109 11.2041V6.14442C0.912109 3.50617 2.44019 1.98828 5.09614 1.98828H12.3727C15.0287 1.98828 16.5567 3.50617 16.5567 6.14442V11.2041C16.5567 13.8423 15.0287 15.3602 12.3727 15.3602ZM5.09614 3.07249C3.01504 3.07249 2.00359 4.07719 2.00359 6.14442V11.2041C2.00359 13.2713 3.01504 14.276 5.09614 14.276H12.3727C14.4538 14.276 15.4653 13.2713 15.4653 11.2041V6.14442C15.4653 4.07719 14.4538 3.07249 12.3727 3.07249H5.09614Z" fill="white"/>
<path d="M8.73092 9.29865C8.11969 9.29865 7.50118 9.11073 7.0282 8.72764L4.75064 6.92063C4.51778 6.7327 4.47413 6.39297 4.66332 6.16168C4.85251 5.93038 5.19451 5.88701 5.42736 6.07494L7.70492 7.88196C8.25794 8.32287 9.19662 8.32287 9.74963 7.88196L12.0272 6.07494C12.2601 5.88701 12.6093 5.92315 12.7912 6.16168C12.9804 6.39297 12.9441 6.73992 12.7039 6.92063L10.4264 8.72764C9.96066 9.11073 9.34215 9.29865 8.73092 9.29865Z" fill="white"/>
</svg>
</span>
                                <span>email</span>
                            </li>
                            <li>
                                <span class="contact-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9001 9.11129L9.70775 7.68081L9.69894 7.67674C9.53321 7.60586 9.35243 7.57742 9.17294 7.59398C8.99345 7.61055 8.82093 7.6716 8.67097 7.77161C8.65332 7.78328 8.63635 7.79595 8.62015 7.80956L6.9708 9.21564C5.92589 8.7081 4.8471 7.63744 4.33956 6.60609L5.74767 4.93166C5.76123 4.91472 5.7741 4.89778 5.7863 4.87948C5.88417 4.72993 5.94355 4.5585 5.95915 4.38046C5.97476 4.20241 5.94611 4.02327 5.87574 3.85897V3.85084L4.4412 0.653099C4.34819 0.438469 4.18826 0.259677 3.98528 0.143411C3.7823 0.0271456 3.54717 -0.020357 3.31498 0.00799445C2.39677 0.128821 1.55394 0.579758 0.943901 1.27658C0.333866 1.97341 -0.00165405 2.86847 6.13164e-06 3.7946C6.13164e-06 9.17499 4.3775 13.5525 9.75789 13.5525C10.684 13.5541 11.5791 13.2186 12.2759 12.6086C12.9727 11.9986 13.4237 11.1557 13.5445 10.2375C13.5729 10.0054 13.5255 9.77032 13.4094 9.56736C13.2932 9.36439 13.1146 9.20441 12.9001 9.11129ZM9.75789 12.4683C7.45826 12.4658 5.25354 11.5511 3.62745 9.92504C2.00136 8.29895 1.08673 6.09423 1.08422 3.7946C1.08167 3.13288 1.32007 2.49286 1.75489 1.99407C2.18972 1.49527 2.79124 1.1718 3.44712 1.08407C3.44685 1.08678 3.44685 1.0895 3.44712 1.0922L4.87014 4.27707L3.46948 5.95353C3.45526 5.96989 3.44235 5.98733 3.43085 6.00571C3.32888 6.16218 3.26906 6.34235 3.25719 6.52874C3.24531 6.71514 3.28179 6.90144 3.36309 7.06959C3.97702 8.32524 5.24216 9.58089 6.51136 10.1941C6.68075 10.2747 6.86813 10.3099 7.05519 10.2964C7.24226 10.2828 7.42261 10.221 7.57863 10.1169C7.59603 10.1052 7.61277 10.0925 7.62878 10.0789L9.2761 8.67354L12.461 10.1C12.461 10.1 12.4664 10.1 12.4684 10.1C12.3818 10.7568 12.0588 11.3595 11.5599 11.7954C11.061 12.2313 10.4204 12.4705 9.75789 12.4683Z" fill="white"/>
</svg>
</span>
                                <span>phone number</span>
                            </li>
                            <li>
                                <span class="contact-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.67366 10.2426C7.13409 10.2426 5.8764 8.99211 5.8764 7.44531C5.8764 5.8985 7.13409 4.65527 8.67366 4.65527C10.2132 4.65527 11.4709 5.90573 11.4709 7.45253C11.4709 8.99934 10.2132 10.2426 8.67366 10.2426ZM8.67366 5.73948C7.73402 5.73948 6.96061 6.50566 6.96061 7.45253C6.96061 8.39941 7.72679 9.16559 8.67366 9.16559C9.62054 9.16559 10.3867 8.39941 10.3867 7.45253C10.3867 6.50566 9.61331 5.73948 8.67366 5.73948Z" fill="white"/>
<path d="M8.67368 16.4509C7.60392 16.4509 6.52694 16.0461 5.68848 15.2438C3.55621 13.191 1.19986 9.91672 2.08891 6.02079C2.89122 2.48627 5.97761 0.90332 8.67368 0.90332C8.67368 0.90332 8.67368 0.90332 8.6809 0.90332C11.377 0.90332 14.4634 2.48627 15.2657 6.02802C16.1475 9.92394 13.7911 13.191 11.6589 15.2438C10.8204 16.0461 9.74343 16.4509 8.67368 16.4509ZM8.67368 1.98753C6.57031 1.98753 3.86701 3.10788 3.15143 6.25932C2.3708 9.66373 4.51031 12.5983 6.44743 14.4559C7.69789 15.663 9.65669 15.663 10.9071 14.4559C12.837 12.5983 14.9765 9.66373 14.2104 6.25932C13.4876 3.10788 10.777 1.98753 8.67368 1.98753Z" fill="white"/>
</svg>
</span>
                                <span>business address</span>
                            </li>
                        </ul>

                        <div class="footer-anytime">
                            <h4 class="anytime-title">Contact Us Anytime</h4>
                            <p>24/7 availability for quotes & messages <br>Regular office hours: Mon–Fri 7am–5pm</p>
                        </div>
                    </div>
                </div>

            </section>

        </footer>
        <div class="footer-bottom">
            <div class="container footer-bottom-container">
                <p class="copyright">Copyright &copy; 2025 - Limelight Electrical Solutions</p>
                <a class="powered-by" href="https://up-rank.com.au" target="_blank">
                    Powered By <span class="uprank-logo"><svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="100" height="30" fill="url(#pattern0_1_1976)"/><defs><pattern id="pattern0_1_1976" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_1_1976" transform="matrix(0.00133274 0 0 0.00444248 -0.506665 -0.015328)"/></pattern><image id="image0_1_1976" width="1133" height="232" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/></defs></svg></span>
                </a>
            </div>
        </div>
`;
