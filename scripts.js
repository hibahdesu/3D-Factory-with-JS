document.body.style.backgroundColor = '#1d1d1d';

let headerStyles = '"Dancing Script", cursive';
let headerSize = '4rem';
let contentSize = '1.2rem';
let lineHeights = '1.8';
let margin = '2em 0';
let paddings = '1em 2em';
let titlesColor = ' #F4EFE6';
let descColor = ' #B77B44';
let contentColor = ' #D8C3A5';
let titleFontWeight = '800';

// Create navigation bar
let nav = document.createElement('nav');
const styleTag = document.createElement('style');
styleTag.textContent = `
    #mvBtn {
    font-family: "Dancing Script", cursive;
    font-weight: bold;
    font-size: 1rem;
    width: 40px;
    height: 40px;
    background-color: ${titlesColor};
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid ${descColor};
    color: ${descColor};
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0 2px 5px rgba(244, 239, 230, 0.2);
    display: none;
    transition: all 0.3s ease;
    }

    #mvBtn:hover {
        background-color: ${descColor};
        color: ${titlesColor};
        border: 1px solid ${titlesColor};
    }


    #hamburger {
            display: none;
    }
    nav ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: center;
    }
    nav ul li a {
        text-decoration: none;
        color: ${titlesColor};
        font-size: 1.2rem;
        padding-bottom: .5em;
        transition: color 0.3s ease, text-decoration 0.3s ease;
    }
    nav ul li a:hover {
        color: ${contentColor};
        border-bottom: 2px solid ${contentColor};
    }
    nav {
        padding: 2em;
    }
    #navLinks {
    transition: all 0.3s ease-in-out;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-bottom: 2px solid ${contentColor}; 
        background-color: rgba(255, 255, 255, 0.05); 
        color: ${titlesColor};
        transition: border 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    }

    input,
    textarea {
        transition: border 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    }

    .custom-submit-button {
        transition: background-color 0.3s ease, color 0.3s ease, border 0.2s ease;
        border: 2px solid ${contentColor};
        background-color: ${contentColor};
        color: ${descColor};
        font-weight: bold;
        font-size: 1.6rem;
    }

    .custom-submit-button:hover {
        background-color: transparent;
        border: 2px solid ${contentColor};
        color: ${contentColor};
    }

    @media (max-width: 768px) {
        nav {
            position: relative;
            padding: .5em !important;
        }

        #hamburger {
            display: block !important;
            border: none;
        }   

        #hamburger:hover {
            color: ${contentColor} !important;
        }
        #hamburger {
            display: block;
        }
        #navLinks {
            display: none;
        }
        #navLinks.show {
            display: flex;
        }
        #navLinks {
            display: none;
            flex-direction: column;
            background-color: transparent;
            border-radius: 0.5em;
            border: 1px solid ${titlesColor};
        }

        #navLinks ul {
            flex-direction: column;
            gap: 1em;
            align-items: center;
            padding: 1.5em;
        }

        #navLinks ul li a {
            font-size: 1.1rem;
            padding: 0.5em 0;
        }

        #navLinks.show {
            display: flex;
        }
        h1 {
            font-size: 2.5rem;
        }

        .container > div {
            width: 100% !important;
        }

        #heroText {
            width: 90% !important;
        }

        #heroImage {
            width: 100% !important;
            height: 300px !important;
        }

        #catalogLeft {
            width: 100% !important;
            margin-bottom: 1em;
        }

        #catalogRight {
            width: 100% !important;
        }

        #process div[style*="width: calc(50%"] {
        width: 100% !important;
        }

        #home {
        flex-direction: column !important;
        text-align: center;
        }

        #home h1, #home div, #about p {
            width: 100% !important;
        }

        .container > div {
            width: 100% !important;
            margin-bottom: 1em;
        }

        #solutions img {
            width: 100% !important;
        }

        #process, #solutions {
            text-align: center !important;
        }

        #contact > div {
            flex-direction: column !important;
            gap: 2em !important;
            align-items: center !important;
        }

        #contact img {
            width: 100% !important;
            max-width: 400px;
            height: auto;
        }

        #contact form {
            width: 90% !important;
        }

        footer > div {
            flex-direction: column !important;
            gap: 1em;
            align-items: center !important;
            text-align: center;
    }

    footer hr {
        width: 90% !important;
    }

    }
`;
document.head.appendChild(styleTag);

let navLinks = document.createElement('div');
navLinks.id = 'navLinks';
navLinks.innerHTML = `
  <ul>
    <li><a href="#index">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#catalog">Catalog</a></li>
    <li><a href="#process">Process</a></li>
    <li><a href="#solutions">Solutions</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
`;
nav.appendChild(navLinks);



let hamburger = document.createElement('button');
hamburger.id = 'hamburger';
hamburger.innerHTML = '&#9776;';
hamburger.setAttribute('aria-label', 'Toggle navigation');
hamburger.style.fontSize = '2rem';
hamburger.style.background = 'transparent';
hamburger.style.color = titlesColor;
hamburger.style.cursor = 'pointer';
hamburger.style.position = 'absolute';
hamburger.style.top = '.5em';
hamburger.style.right = '.5em';
nav.appendChild(hamburger);



document.body.insertBefore(nav, document.body.firstChild);

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


let titlesContent = {
    hero: 'Designing the Future in 3D',
    heroImage: './public/photo1.png',
    about: 'About Us',
    aboutContent: 'We are an architecture and visualization firm that brings building concepts to life through high-end 3D design. From concept to photorealistic renders, we turn your vision into immersive visual experiences.',
    catalog: 'Our Projects',
    catalogContent: 'Architecture in Every Pixel',
    catalogContent2: 'Explore a collection of our residential, commercial, and public building designs brought to life with stunning 3D visuals.',
    images: [
        './public/photo3.png',
        './public/photo4.png',
        './public/photo5.png',
        './public/photo6.png',
        './public/photo7.png',
        './public/photo8.png',
    ],
    solutions: 'Our Services',
    solutionsContent: [
        {
            title: 'Architectural Visualization',
            images: [
                './public/photo11.png',
                './public/photo18.png',
                './public/photo12.png',
            ],
            description: 'We create high-quality 3D models and renders of building exteriors and interiors to showcase your designs before construction.'
        },
        {
            title: '3D Floor Plans & Layouts',
            images: [
                './public/photo10.png',
                './public/photo14.png',
                './public/photo15.png',
            ],
            description: 'Visualize space, proportions, and flow through interactive 3D floor plans tailored for clients and developers.'
        },
        {
            title: 'Virtual Walkthroughs',
            images: [
                './public/photo16.png',
                './public/photo17.png',
                './public/photo19.png',
            ],
            description: 'Step into your future space with immersive virtual tours designed to showcase every detail and material choice.'
        }
    ],
    processSection: {
    title: 'Our Process',
    steps: [
            {
                title: 'Discovery & Brief',
                description: 'We begin by understanding your goals, design intent, and vision. This includes gathering references, architectural plans, and project requirements.'
            },
            {
                title: 'Concept Design',
                description: 'We build a foundational 3D model and present early design directions, focusing on massing, layout, and spatial flow.'
            },
            {
                title: 'Modeling & Feedback',
                description: 'We refine the model, materials, lighting, and details based on your feedback to ensure accurate and compelling visual results.'
            },
            {
                title: 'Final Delivery',
                description: 'You receive high-resolution images, videos, or walkthroughs ready for presentation, marketing, or client delivery.'
            }
        ]
    },
    contact: 'Contact Us',
    contactImage: './public/contactImage.png',
    nameContent: 'Name:',
    emailContent: 'Email:',
    messageContent: 'Message:',
    footerDetails: {
        copyright: '&copy; 2025 ArchVista 3D. All rights reserved.',
        builtBy: 'Built and designed by ',
        name: 'Hibah Sindi',
        linkedIn: 'https://www.linkedin.com/in/hibah-sindi/',
        email: 'Email: contact@archvista3d.com',
        phone: 'Phone: +1 (555) 123-4567',
        location: 'Location: 1234 Innovation Blvd, NY, USA',
        socialLinks: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
            { name: 'Instagram', url: 'https://www.instagram.com/' },
            { name: 'Twitter', url: 'https://www.twitter.com/' },
        ]
            }
};

let btn = document.createElement('button');
btn.id = 'mvBtn';
btn.innerHTML = 'Up';
// btn.style.fontFamily = headerStyles;
// btn.style.fontWeight = 'bold';
// btn.style.fontSize = '1rem';
// btn.style.width = '40px';
// btn.style.height = '40px';
// btn.style.backgroundColor = titlesColor;
// btn.style.borderRadius = '50%';
// btn.style.cursor = 'pointer';
// btn.style.border = `1px solid ${descColor}`;
// btn.style.color = descColor;
// btn.style.position = 'fixed';
// btn.style.bottom = '20px';
// btn.style.right = '20px';
// btn.style.boxShadow = '0 2px 5px rgba(244, 239, 230, 0.2)';
// btn.style.display = 'none';
// btn.style.zIndex = '1000';



onscroll = function() {
    if (scrollY > 400) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
}
btn.onclick = function() {
    scrollTo({
        left: 0,
        top: 0, 
        behavior: 'smooth'
    });
}

document.body.appendChild(btn);



function titlesStyles(tagName, content) {
    let element = document.createElement(tagName);
    element.textContent = content;
    element.style.fontFamily = headerStyles;
    element.style.fontSize = headerSize;
    element.style.margin = '0';
    element.style.color = titlesColor;
    return element;
}

// HERO SECTION
let heroSection = document.createElement('div');
heroSection.id = 'home';
heroSection.style.display = 'flex';
heroSection.style.alignItems = 'center';
heroSection.style.justifyContent = 'center';
heroSection.style.gap = '2em';
heroSection.style.flexWrap = 'wrap';
heroSection.style.padding = paddings;
heroSection.style.fontFamily = headerStyles;

let heroTxt = document.createElement('h1');
heroTxt.textContent = titlesContent.hero;
heroTxt.id = 'heroText';
heroTxt.style.fontSize = headerSize;
heroTxt.style.width = '35%';
heroTxt.style.textAlign = 'center';
heroTxt.style.lineHeight = '1.4';
heroTxt.style.fontWeight = titleFontWeight;
heroTxt.style.color = titlesColor;

let heroRight = document.createElement('div');
heroRight.id = 'heroImage';
heroRight.style.width = '55%';
heroRight.style.height = '90vh';
heroRight.style.backgroundImage = `url(${titlesContent.heroImage})`;
heroRight.style.backgroundSize = 'contain';
heroRight.style.backgroundRepeat = 'no-repeat';
heroRight.style.backgroundPosition = 'center';

heroSection.appendChild(heroTxt);
heroSection.appendChild(heroRight);
document.body.appendChild(heroSection);

// ABOUT SECTION
let aboutSection = document.createElement('div');
aboutSection.id = 'about';
aboutSection.style.display = 'flex';
aboutSection.style.flexDirection = 'column';
aboutSection.style.padding = paddings;
aboutSection.style.gap = '.5em';
aboutSection.style.justifyContent = 'center';
aboutSection.style.alignItems = 'center';
aboutSection.style.margin = margin;

let aboutHeader = titlesStyles('h3', titlesContent.about);


let aboutContents = document.createElement('p');
aboutContents.textContent = titlesContent.aboutContent;
aboutContents.style.width = '50%';
aboutContents.style.lineHeight = lineHeights;
aboutContents.style.textAlign = 'center';
aboutContents.style.fontSize = contentSize;
aboutContents.style.color = descColor;
aboutSection.appendChild(aboutHeader);
aboutSection.appendChild(aboutContents);
document.body.appendChild(aboutSection);

// CATALOG SECTION
let catalogSection = document.createElement('div');
catalogSection.id = 'catalog';
catalogSection.style.margin = margin;
catalogSection.style.display = 'flex';
catalogSection.style.flexDirection = 'column';
catalogSection.style.justifyContent = 'center';
catalogSection.style.alignItems = 'center';
catalogSection.style.gap = '1em';
catalogSection.style.padding = paddings;


let catalogHeader = titlesStyles('h3', titlesContent.catalog);


let catalogDiv = document.createElement('div');
catalogDiv.style.display = 'flex';
catalogDiv.style.flexWrap = 'wrap';
catalogDiv.style.justifyContent = 'center';
catalogDiv.style.alignItems = 'stretch';
catalogDiv.style.width = '100%';
catalogDiv.style.padding = paddings;

let catalogLeft = document.createElement('div');
catalogLeft.id = 'catalogLeft';
catalogLeft.style.background = ' #B77B44';
catalogLeft.style.width = '20%';
catalogLeft.style.padding = '1em 1.5em';
catalogLeft.style.borderRadius = '.5em';
catalogLeft.style.display = 'flex';
catalogLeft.style.flexDirection = 'column';
catalogLeft.style.gap = '1em';
catalogLeft.style.margin = '0';
catalogLeft.style.justifyContent = 'center';
catalogLeft.style.alignItems = 'center';
catalogLeft.style.textAlign = 'center';

let catalogLeftTxt = document.createElement('h3');
catalogLeftTxt.textContent = titlesContent.catalogContent;
catalogLeftTxt.style.fontFamily = headerStyles;
catalogLeftTxt.style.fontSize = '2rem';
catalogLeftTxt.style.color = 'white';
catalogLeftTxt.style.margin = '0';
catalogLeftTxt.style.color = titlesColor;
catalogLeftTxt.style.fontWeight = titleFontWeight;
catalogLeftTxt.style.lineHeight = lineHeights;

let catalogLeftTxt2 = document.createElement('p');
catalogLeftTxt2.textContent = titlesContent.catalogContent2;
catalogLeftTxt2.style.fontSize = contentSize;
catalogLeftTxt2.style.color = titlesColor;
catalogLeftTxt2.style.lineHeight = lineHeights;


catalogLeft.appendChild(catalogLeftTxt);
catalogLeft.appendChild(catalogLeftTxt2);
let catalogRight = document.createElement('div');
catalogRight.id = 'catalogRight';
catalogRight.style.width = '70%';

catalogDiv.appendChild(catalogLeft);
catalogDiv.appendChild(catalogRight);
catalogSection.appendChild(catalogHeader);
catalogSection.appendChild(catalogDiv);
document.body.appendChild(catalogSection);

// IMAGE GRID CONTAINER
let container = document.createElement('div');
container.className = 'container';
catalogRight.appendChild(container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.gap = '1em';


function elements(imgSrc) {
    if (!imgSrc) return;

    let elements = document.createElement('div');
    let image = document.createElement('img');

    image.src = imgSrc;
    image.style.width = '100%';
    image.style.height = 'auto';
    image.style.borderRadius = '.5em';
    image.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

    elements.style.width = 'calc(30% - 1em)';
    elements.style.textAlign = 'center';

    elements.appendChild(image);
    container.appendChild(elements);
}

for (let i = 0; i < titlesContent.images.length; i++) {
    elements(titlesContent.images[i]);
}





// PROCESS SECTION
let processSection = document.createElement('div');
processSection.id = 'process';
processSection.style.margin = margin;
processSection.style.padding = paddings;
processSection.style.display = 'flex';
processSection.style.flexDirection = 'column';
processSection.style.alignItems = 'center';
processSection.style.gap = '2em';

let processHeader = titlesStyles('h3', titlesContent.processSection.title);
processSection.appendChild(processHeader);

// Container for process steps
let processTimeline = document.createElement('div');
processTimeline.style.margin = margin;
processTimeline.style.padding = paddings;
processTimeline.style.display = 'flex';
processTimeline.style.flexWrap = 'wrap';
processTimeline.style.justifyContent = 'center';
processTimeline.style.gap = '2em';
processTimeline.style.width = '100%';
processTimeline.style.maxWidth = '1000px';

titlesContent.processSection.steps.forEach(step => {
    let stepContainer = document.createElement('div');
    stepContainer.style.display = 'flex';
    stepContainer.style.flexDirection = 'column';
    stepContainer.style.gap = '1em';
    stepContainer.style.width = 'calc(50% - 1em)';
    stepContainer.style.padding = paddings;
    stepContainer.style.borderLeft = `4px solid ${descColor}`;
    stepContainer.style.boxSizing = 'border-box';

    stepContainer.style.background = 'rgba(255, 255, 255, 0.05)';
    stepContainer.style.backdropFilter = 'blur(10px)';
    stepContainer.style.webkitBackdropFilter = 'blur(10px)';
    stepContainer.style.borderRadius = '1em';
    stepContainer.style.border = `1px solid ${descColor}`;
    stepContainer.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';

    let stepTitle = document.createElement('h4');
    stepTitle.textContent = step.title;
    stepTitle.style.fontFamily = headerStyles;
    stepTitle.style.fontSize = '1.6rem';
    stepTitle.style.color = contentColor;
    stepTitle.style.margin = '0';

    let stepDesc = document.createElement('p');
    stepDesc.textContent = step.description;
    stepDesc.style.fontSize = contentSize;
    stepDesc.style.lineHeight = lineHeights;
    stepDesc.style.color = descColor;
    stepDesc.style.margin = '0';

    stepContainer.appendChild(stepTitle);
    stepContainer.appendChild(stepDesc);
    processTimeline.appendChild(stepContainer);
});

processSection.appendChild(processTimeline);
document.body.appendChild(processSection);



// Solutions Section
let solutionsSection = document.createElement('div');
solutionsSection.id = 'solutions';
solutionsSection.style.margin = margin;
solutionsSection.style.padding = paddings;
solutionsSection.style.display = 'flex';
solutionsSection.style.flexDirection = 'column';
solutionsSection.style.alignItems = 'center';
solutionsSection.style.gap = '1em';

let solutionsHeader = titlesStyles('h3', titlesContent.solutions);

solutionsSection.appendChild(solutionsHeader);

// Solutions content
let solutionsGrid = document.createElement('div');
solutionsGrid.style.display = 'flex';
solutionsGrid.style.flexWrap = 'wrap';
solutionsGrid.style.justifyContent = 'center';
solutionsGrid.style.gap = '1em';
solutionsGrid.style.width = '100%';

titlesContent.solutionsContent.forEach(solution => {
    let solutionCard = document.createElement('div');
    solutionCard.style.padding = paddings;
    solutionCard.style.display = 'flex';
    solutionCard.style.flexDirection = 'column';
    solutionCard.style.gap = '1.5em';
    solutionCard.style.justifyContent = 'center';
    solutionCard.style.alignItems = 'center';

    let title = document.createElement('h4');
    title.textContent = solution.title;
    title.style.fontFamily = headerStyles;
    title.style.margin = '0';
    title.style.color = contentColor;
    title.style.fontSize = '2rem';
    title.style.color = contentColor;
    title.style.fontWeight = titleFontWeight;

    let desc = document.createElement('p');
    desc.textContent = solution.description;
    desc.style.fontSize = contentSize;
    desc.style.color = descColor;
    desc.style.margin = '0';
    desc.style.color = descColor;

    let imagesContainer = document.createElement('div');
    imagesContainer.style.display = 'flex';
    imagesContainer.style.flexWrap = 'wrap';
    imagesContainer.style.gap = '1em';
    solution.images.forEach(imageSrc => {
        let imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.style.width = 'calc(30% - 1em)';
        imgElement.style.height = 'auto';
        imgElement.style.borderRadius = '.5em';
        imagesContainer.appendChild(imgElement);
    });
    
    solutionCard.appendChild(title);
    solutionCard.appendChild(desc);
    solutionCard.appendChild(imagesContainer);
    solutionsGrid.appendChild(solutionCard);
});

solutionsSection.appendChild(solutionsGrid);
document.body.appendChild(solutionsSection);


let contactSection = document.createElement('div');
contactSection.id = 'contact';
contactSection.style.padding = paddings;
contactSection.style.margin = margin;
contactSection.style.display = 'flex';
contactSection.style.flexDirection = 'column';
contactSection.style.alignItems = 'center';
contactSection.style.gap = '1em';

let contactHeader = titlesStyles('h3', titlesContent.contact);

let contactDiv = document.createElement('div');
contactDiv.style.display = 'flex';
contactDiv.style.justifyContent = 'center';
contactDiv.style.alignItems = 'center';
contactDiv.style.gap = '6em';

let contactImage = document.createElement('img');
contactImage.src = titlesContent.contactImage;

let contactForm = document.createElement('form');
contactForm.style.display = 'flex';
contactForm.style.flexDirection = 'column';
contactForm.style.gap = '1em';
contactForm.style.width = '100%';
contactForm.style.maxWidth = '500px';


let personDetails = document.createElement('div');
personDetails.style.display = 'flex';
personDetails.style.gap = '3em';

// Name
let nameDiv = document.createElement('div');
nameDiv.style.display = 'flex';
nameDiv.style.flexDirection = 'column';
nameDiv.style.width = '100%';
nameDiv.style.gap = '1em';

let nameLabel = document.createElement('label');
nameLabel.innerHTML = titlesContent.nameContent;
nameLabel.style.color = contentColor;
nameLabel.style.fontSize = contentSize;
nameLabel.style.fontFamily = headerStyles;


let nameInput = document.createElement('input');
nameInput.type = 'text';
// nameInput.placeholder = titlesContent.nameContent;
nameInput.required = true;
nameInput.style.width = '100%';
nameInput.style.background = 'transparent';
nameInput.style.border = 'none';
nameInput.style.borderBottom = `2px solid ${contentColor}`;
nameInput.style.padding = '1em';
nameInput.style.color = descColor;

nameDiv.appendChild(nameLabel);
nameDiv.appendChild(nameInput);



// Email
let emailDiv = document.createElement('div');
emailDiv.style.display = 'flex';
emailDiv.style.flexDirection = 'column';
emailDiv.style.width = '100%';
emailDiv.style.gap = '1em';

let emailLabel = document.createElement('label');
emailLabel.innerHTML = titlesContent.emailContent;
emailLabel.style.color = contentColor;
emailLabel.style.fontSize = contentSize;
emailLabel.style.fontFamily = headerStyles;

let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.required = true;
emailInput.style.width = '100%';
emailInput.style.background = 'transparent';
emailInput.style.border = 'none';
emailInput.style.borderBottom = `2px solid ${contentColor}`;
emailInput.style.padding = '1em';
emailInput.style.color = descColor;


emailDiv.appendChild(emailLabel);
emailDiv.appendChild(emailInput);





// Message
let messageDiv = document.createElement('div');
messageDiv.style.display = 'flex';
messageDiv.style.flexDirection = 'column';
messageDiv.style.width = '100%';
messageDiv.style.gap = '1em';

let messageLabel = document.createElement('label');
messageLabel.innerHTML = titlesContent.messageContent;
messageLabel.style.color = contentColor;
messageLabel.style.fontSize = contentSize;
messageLabel.style.fontFamily = headerStyles;

messageDiv.appendChild(messageLabel);


let messageInput = document.createElement('textarea');
messageInput.rows = 5;
messageInput.required = true;

messageInput.style.width = '100%';
messageInput.style.background = 'transparent';
messageInput.style.border = 'none';
messageInput.style.borderBottom = `2px solid ${contentColor}`;
messageInput.style.padding = '1em';
messageInput.style.color = descColor;

messageDiv.appendChild(messageInput);

// Submit button
let submitBtn = document.createElement('button');
submitBtn.classList.add('custom-submit-button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Send Message';
submitBtn.style.padding = paddings;

submitBtn.style.fontFamily = headerStyles;
submitBtn.style.cursor = 'pointer';


// Append elements to form
personDetails.appendChild(nameDiv);
personDetails.appendChild(emailDiv);
contactForm.appendChild(personDetails);
contactDiv.appendChild(contactImage);
contactDiv.appendChild(contactForm);
contactForm.appendChild(messageDiv);
contactForm.appendChild(submitBtn);

// Add header and form to section
contactSection.appendChild(contactHeader);
contactSection.appendChild(contactDiv);

// Add contact section to body
document.body.appendChild(contactSection);


// FOOTER
let footer = document.createElement('footer');
footer.style.color = titlesColor;
footer.style.padding = paddings;
footer.style.margin = margin;
footer.style.textAlign = 'center';
footer.style.fontSize = '1rem';
footer.style.display = 'flex';
footer.style.flexDirection = 'column';
footer.style.gap = '0.5em';


let footerCopy = document.createElement('div');
footerCopy.style.display = 'flex';
footerCopy.style.justifyContent = 'space-between';
footerCopy.style.alignItems = 'center';

// Create footer elements using content from object
let footerCopyright = document.createElement('p');
footerCopyright.innerHTML = titlesContent.footerDetails.copyright;

let footerContact = document.createElement('div');
footerContact.style.display = 'flex';
footerContact.style.justifyContent = 'space-between';
footerContact.style.alignItems = 'center';

let footerContactOne = document.createElement('div');

let footerEmail = document.createElement('p');
footerEmail.textContent = titlesContent.footerDetails.email;

let footerPhone = document.createElement('p');
footerPhone.textContent = titlesContent.footerDetails.phone;

let footerLocation = document.createElement('p');
footerLocation.textContent = titlesContent.footerDetails.location;

let footerContactTwo = document.createElement('div');
footerContactTwo.style.display = 'flex';
footerContactTwo.style.flexDirection = 'column';
footerContactTwo.style.gap = '1em';


titlesContent.footerDetails.socialLinks.forEach(link => {
    let a = document.createElement('a');
    a.style.textDecoration = 'none';
    a.href = link.url;
    a.target = '_blank';
    a.textContent = link.name;
    a.title = link.name;
    a.style.color = titlesColor;
    a.style.transition = 'color 0.3s ease';

    a.addEventListener('mouseenter', () => a.style.color = contentColor);
    a.addEventListener('mouseleave', () => a.style.color = titlesColor);

    footerContactTwo.appendChild(a);
});


let footerLine = document.createElement('hr');
footerLine.style.color = contentColor;
footerLine.style.width = '100%';

let footerBuiltBy = document.createElement('p');
footerBuiltBy.innerHTML = titlesContent.footerDetails.builtBy;
let footerBuiltByName = document.createElement('a');
footerBuiltByName.href = titlesContent.footerDetails.linkedIn;
footerBuiltByName.target = '_blank';
footerBuiltByName.title = titlesContent.footerDetails.name;
footerBuiltByName.style.textDecoration = 'none';
footerBuiltByName.style.fontWeight = 'bold';
footerBuiltByName.innerHTML = titlesContent.footerDetails.name;
footerBuiltByName.style.color = descColor;
footerBuiltByName.style.fontFamily = headerStyles;
footerBuiltByName.style.fontSize = contentSize;
footerBuiltBy.appendChild(footerBuiltByName);

// Append all to footer
footerContactOne.appendChild(footerEmail);
footerContactOne.appendChild(footerPhone);
footerContactOne.appendChild(footerLocation);
footerContact.appendChild(footerContactOne);
footerContact.appendChild(footerContactTwo);
footer.appendChild(footerContact);
footer.appendChild(footerLine);
footerCopy.appendChild(footerCopyright);
footerCopy.appendChild(footerBuiltBy);
footer.appendChild(footerCopy);


// Append footer to body
document.body.appendChild(footer);




