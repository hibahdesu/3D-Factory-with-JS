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
            gap: 2em;
            justify-content: center;
        }
        nav ul li a {
            text-decoration: none;
            color: #F4EFE6;
            font-size: 1.2rem;
            padding-bottom: .5em;
            transition: color 0.3s ease, text-decoration 0.3s ease
        }
        nav ul li a:hover {
            color: #D8C3A5;
            border-bottom: 2px solid #D8C3A5;
        }
        nav {
            padding: 2em;
        }
        body {
            font-family: 'Open Sans', sans-serif; 
            margin: 0;
            padding: 0;
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
let titlesColor = ' #F4EFE6';
let descColor = ' #B77B44';
let contentColor = ' #D8C3A5';
let titleFontWeight = '800';

let titlesContent = {
    hero: 'Step Into the Future of Dining',
    heroImage: './public/photo1.png',
    about: 'About Us',
    aboutContent: 'A 3D restaurant is not just a place to eat, it’s a fully immersive environment where walls, tables, and even plates come to life using 3D projection mapping and interactive lighting.',
    catalog: 'Our Catalog',
    catalogContent: 'Our Work Speaks for Itself.',
    catalogContent2: 'Explore our stunning 3D visuals and interactive designs that redefine the dining experience.',
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
            './public/photo11.png',
            './public/photo18.png',
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
            './public/photo19.png',
        ],
        description: 'Allow guests to explore menus in 3D, view dishes in augmented reality, and make interactive orders.'
    }
], 
    contact: 'Contact Us',
    nameContent: 'Name:',
    emailContent: 'Email:',
    messageContent: 'Message:',
    footertitle: '&copy; 2025. All rights reserved.',

};

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
heroTxt.style.fontWeight = titleFontWeight;
heroTxt.style.color = titlesColor;

let heroRight = document.createElement('div');
heroRight.id = 'heroImage';
heroRight.style.width = '55%';
heroRight.style.height = '100%';
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
// emailInput.placeholder = titlesContent.emailContent;
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
submitBtn.type = 'submit';
submitBtn.textContent = 'Send Message';
submitBtn.style.padding = '0.8em';
submitBtn.style.backgroundColor = '#333';
submitBtn.style.color = contentColor;
submitBtn.style.fontFamily = headerStyles;
submitBtn.style.fontSize = contentSize;
submitBtn.style.border = 'none';
submitBtn.style.cursor = 'pointer';

// Append elements to form
personDetails.appendChild(nameDiv);
personDetails.appendChild(emailDiv);
contactForm.appendChild(personDetails);
contactForm.appendChild(messageDiv);
contactForm.appendChild(submitBtn);

// Add header and form to section
contactSection.appendChild(contactHeader);
contactSection.appendChild(contactForm);

// Add contact section to body
document.body.appendChild(contactSection);


// FOOTER
let footer = document.createElement('footer');
let footerDiv = document.createElement('div');
footerDiv.style.display = 'flex';
let footerLeft = document.createElement('p');
footerLeft.innerHTML = titlesContent.footertitle;

footer.style.color = titlesColor;
footer.style.padding = paddings;
footer.style.margin = margin;
footer.style.textAlign = 'center';

footerDiv.appendChild(footerLeft)
footer.appendChild(footerDiv);
document.body.appendChild(footer);
