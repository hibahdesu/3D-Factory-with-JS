let nav = document.createElement('nav');
nav.innerHTML = ` 
    <ul>
        <li><a href="#index">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#catalog">Catalog</a></li>
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <style>
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 1em;
            justify-content: center;
        }
        nav ul li a {
            text-decoration: none;
            color: #333;
        }
        nav ul li a:hover {
            text-decoration: underline;
        }
        nav {
            background-color: #f8f9fa;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            border-top: 1px solid #ddd;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
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
        }
    </style>
`;

document.body.insertBefore(nav, document.body.firstChild);
document.body.style.backgroundColor = '#1d1d1d';

let headerStyles = '"Dancing Script", cursive';
let headerSize = '4rem';
let contentSize = '1.2rem';
let lineHeights = '1.8';
let margin = '2em 0';
let paddings = '1em 2em';

let titlesContent = {
    hero: 'Step Into the Future of Dining',
    about: 'About Us',
    aboutContent: 'A 3D restaurant is not just a place to eat, it’s a fully immersive environment where walls, tables, and even plates come to life using 3D projection mapping and interactive lighting.',
    catalog: 'Our Catalog',
    catalogContent: 'Our Work Speaks for Itself. Our past projects include collaborations with global chefs, themed installations, and luxury event showcases',
    images: [
    './public/photo3.png',
    './public/photo4.png',
    './public/photo5.png',
    './public/photo6.png',
    './public/photo7.png',
    './public/photo8.png',
],
    solutions: 'Our Solutions',
solutionsContent: [
    {
        title: 'Interactive 3D Tables',
        images: [
            './public/photo13.png',
            './public/photo11.png',
            './public/photo12.png',
        ],
        description: 'Bring your tables to life with interactive visuals that respond to gestures and movement.'
    },
    {
        title: 'Immersive Wall Projections',
        images: [
            './public/photo10.png',
            './public/photo14.png',
            './public/photo15.png',
        ],
        description: 'Transform your restaurant’s ambiance with wall-to-wall 3D projections tailored to themes and events.'
    },
    {
        title: 'Virtual Menu Experiences',
        images: [
            './public/photo16.png',
            './public/photo17.png',
            './public/photo18.png',
        ],
        description: 'Allow guests to explore menus in 3D, view dishes in augmented reality, and make interactive orders.'
    }
], 
    contact: 'Contact Us',

};

function titlesStyles(tagName, content) {
    let element = document.createElement(tagName);
    element.textContent = content;
    element.style.fontFamily = headerStyles;
    element.style.fontSize = headerSize;
    element.style.margin = '0';
    element.style.color = '#fff';
    return element;
}

// HERO SECTION
let heroSection = document.createElement('div');
heroSection.id = 'home';
heroSection.style.height = '90vh';
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
heroTxt.style.fontWeight = '800';

let heroRight = document.createElement('div');
heroRight.id = 'heroImage';
heroRight.style.width = '55%';
heroRight.style.height = '100%';
heroRight.style.backgroundImage = `url('./public/heroSection.png')`;
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

// let aboutHeader = document.createElement('h3');
// aboutHeader.textContent = titlesContent.about;
// aboutHeader.style.fontFamily = headerStyles;
// aboutHeader.style.fontSize = headerSize;
// aboutHeader.style.margin = '0';

let aboutHeader = titlesStyles('h3', titlesContent.about);


let aboutContents = document.createElement('p');
aboutContents.textContent = titlesContent.aboutContent;
aboutContents.style.width = '50%';
aboutContents.style.lineHeight = lineHeights;
aboutContents.style.textAlign = 'center';
aboutContents.style.fontSize = contentSize;

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

// let catalogHeader = document.createElement('h3');
// catalogHeader.textContent = titlesContent.catalog;
// catalogHeader.style.fontSize = headerSize;
// catalogHeader.style.fontFamily = headerStyles;

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
catalogLeft.style.background = 'red';
catalogLeft.style.width = '20%';
catalogLeft.style.padding = '1em 1.5em';
catalogLeft.style.borderRadius = '.5em'

let catalogLeftTxt = document.createElement('p');
catalogLeftTxt.textContent = titlesContent.catalogContent;
catalogLeft.style.display = 'flex';
catalogLeft.style.justifyContent = 'center';
catalogLeft.style.alignItems = 'center';
catalogLeftTxt.style.fontFamily = headerStyles;
catalogLeftTxt.style.fontSize = '2rem';
catalogLeftTxt.style.color = 'white';

catalogLeft.appendChild(catalogLeftTxt);
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




let solutionsSection = document.createElement('div');
solutionsSection.id = 'solutions';
solutionsSection.style.margin = margin;
solutionsSection.style.padding = paddings;
solutionsSection.style.display = 'flex';
solutionsSection.style.flexDirection = 'column';
solutionsSection.style.alignItems = 'center';
solutionsSection.style.gap = '1em';

// Header
// let solutionsHeader = document.createElement('h3');
// solutionsHeader.textContent = titlesContent.solutions;
// solutionsHeader.style.fontSize = headerSize;
// solutionsHeader.style.fontFamily = headerStyles;
// solutionsHeader.style.textAlign = 'center';

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
    // solutionCard.style.width = 'calc(30% - 1em)';
    // solutionCard.style.backgroundColor = '#f1f1f1';
    // solutionCard.style.padding = '1em';
    // solutionCard.style.borderRadius = '.5em';
    // solutionCard.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
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
    title.style.color = '#333';
    title.style.fontSize = '2rem';

    let desc = document.createElement('p');
    desc.textContent = solution.description;
    desc.style.fontSize = contentSize;
    desc.style.color = '#666';
    desc.style.margin = '0';

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

// let contactHeader = document.createElement('h3');
// contactHeader.textContent = 'Contact Us';
// contactHeader.style.fontSize = headerSize;
// contactHeader.style.fontFamily = headerStyles;

let contactHeader = titlesStyles('h3', titlesContent.contact);


let contactForm = document.createElement('form');
contactForm.style.display = 'flex';
contactForm.style.flexDirection = 'column';
contactForm.style.gap = '1em';
contactForm.style.width = '100%';
contactForm.style.maxWidth = '500px';

// Name
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Your Name';
nameInput.required = true;

// Email
let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Your Email';
emailInput.required = true;

// Message
let messageInput = document.createElement('textarea');
messageInput.placeholder = 'Your Message';
messageInput.rows = 5;
messageInput.required = true;

// Submit button
let submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Send Message';
submitBtn.style.padding = '0.8em';
submitBtn.style.backgroundColor = '#333';
submitBtn.style.color = '#fff';
submitBtn.style.border = 'none';
submitBtn.style.cursor = 'pointer';

// Append elements to form
contactForm.appendChild(nameInput);
contactForm.appendChild(emailInput);
contactForm.appendChild(messageInput);
contactForm.appendChild(submitBtn);

// Add header and form to section
contactSection.appendChild(contactHeader);
contactSection.appendChild(contactForm);

// Add contact section to body
document.body.appendChild(contactSection);


// FOOTER
let footer = document.createElement('footer');
footer.innerHTML = '&copy; 2025 Your 3D Restaurant. All rights reserved.';
document.body.appendChild(footer);
