let nav = document.createElement('nav');
nav.innerHTML = ` 
    <ul>
        <li><a href="#index">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#catalog">Catalog</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
    </ul>
    <style>
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin-right: 10px;
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
    </style>
`;

let headerStyles = '"Dancing Script", cursive';
let headerSize = '4rem';
let contentSize = '1.2rem';
let lineHeights = '1.8';
let margin = '2em 0';
let paddings = '1em 2em'

let titlesContent = 
    {
        hero: 'Step Into the Future of Dining',
        about: 'About Us',
        aboutContent: 'A 3D restaurant is not just a place to eat, it’s a fully immersive environment where walls, tables, and even plates come to life using 3D projection mapping and interactive lighting. Guests are transported to magical worlds through animated visuals, soundscapes, and storytelling, all while enjoying world-class cuisine.',
        catalog: 'Our Catalog',
        catalogContent: 'Our Work Speaks for Itself',
    
    }

document.body.insertBefore(nav, document.body.firstChild);

let heroSection = document.createElement('div');

let heroImage = './public/heroSection.png'
heroSection.style.height = '90vh';
heroSection.style.display = 'flex';
heroSection.style.alignItems = 'center';
heroSection.style.justifyContent = 'center';
heroSection.style.gap = '2em';
heroSection.style.flexWrap = 'wrap';
heroSection.style.padding = paddings;
heroSection.style.fontFamily = headerStyles;
heroSection.id = 'home';


let heroRight = document.createElement('div');
heroRight.style.width = '55%';
heroRight.style.height = '100%';
heroRight.style.backgroundImage = `url(${heroImage})`;
heroRight.style.backgroundSize = 'contain';
heroRight.style.backgroundRepeat = 'no-repeat';
heroRight.style.backgroundPosition = 'center';

let heroTxtContent = titlesContent.hero;
let heroTxt = document.createElement('h1');
heroTxt.textContent = heroTxtContent;
heroTxt.style.fontSize = headerSize;
heroTxt.style.width = '35%';
heroTxt.style.textAlign = 'center';
heroTxt.style.lineHeight = '1.4';
heroTxt.style.fontWeight = '800';
console.log(heroTxt);

heroSection.appendChild(heroTxt);
heroSection.appendChild(heroRight);
document.body.appendChild(heroSection);

let aboutSection = document.createElement('div');
aboutSection.id = 'about';
// aboutSection.style.height = '90vh';
aboutSection.style.display = 'flex';
aboutSection.style.flexDirection = 'column';
aboutSection.style.padding = paddings;
aboutSection.style.gap = '.5em';
aboutSection.style.justifyContent = 'center';
aboutSection.style.alignItems = 'center';
aboutSection.style.margin = margin;

let aboutHeader = document.createElement('h3');
aboutHeader.textContent = titlesContent.about;
aboutHeader.style.fontFamily = headerStyles;
aboutHeader.style.fontSize = headerSize;
aboutHeader.style.margin = '0';

let aboutContents = document.createElement('p');
aboutContents.textContent = titlesContent.aboutContent;
aboutContents.style.width = '50%';
aboutContents.style.lineHeight = lineHeights;
aboutContents.style.textAlign = 'center';
aboutContents.style.fontSize = contentSize;

aboutSection.appendChild(aboutHeader);
aboutSection.appendChild(aboutContents);
document.body.appendChild(aboutSection);

let catalogSection = document.createElement('div');
catalogSection.id = 'catalog';

let catalogHeader = document.createElement('h3');
catalogHeader.textContent = titlesContent.catalog;
catalogHeader.style.fontSize = headerSize;
catalogHeader.style.fontFamily = headerStyles;

let catalogDiv = document.createElement('div');
catalogDiv.style.display = 'flex';
catalogDiv.style.justifyContent = 'center';
catalogDiv.style.flexWrap = 'wrap';
catalogDiv.style.height = '400px'; 
catalogDiv.style.alignItems = 'stretch';




catalogSection.appendChild(catalogHeader);
catalogSection.style.margin = margin;
catalogSection.style.display = 'flex';
catalogSection.style.flexDirection = 'column';
catalogSection.style.justifyContent = 'center';
catalogSection.style.alignItems = 'center';


catalogSection.style.padding = paddings;

let catalogLeft = document.createElement('div');
catalogLeft.style.background = 'red';
catalogLeft.textContent = titlesContent.catalogContent;
catalogLeft.style.width = '30%';
catalogLeft.style.height = '100%';
catalogLeft.style.padding = paddings;
catalogLeft.style.fontFamily = headerStyles;
catalogLeft.style.fontSize = contentSize;

let catalogRight = document.createElement('div');
catalogRight.style.width = '60%';

catalogDiv.appendChild(catalogLeft);
catalogDiv.appendChild(catalogRight);
catalogSection.appendChild(catalogDiv);
document.body.appendChild(catalogSection);


let container = document.createElement('div');
container.className = 'container';
catalogRight.appendChild(container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.gap = '1em';
container.style.padding = '2em';





let titles = ['Welcome to Our Website',
    'Explore Our Services',
    'Contact Us Today',
    'Read Our Latest Blog Posts',
    'Learn More About Us'
];



let images = [
    './public/hero.jpg',
    './public/Can.jpg',
    './public/can2.jpg',
    './public/juice.jpg',
    './public/milk.jpg'
];

function elements(imgSrc) {
    if (!imgSrc) return;

    let elements = document.createElement('div');
    let image = document.createElement('img');

    image.src = imgSrc;
    image.style.width = '100%';
    image.style.height = 'auto';
    image.style.borderRadius = '8px';
    image.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

    elements.style.width = 'calc(30% - 1em)';
    elements.style.textAlign = 'center';

    elements.appendChild(image);
    container.appendChild(elements);
}


for (let i = 0; i < 4; i++) {
    elements(images[i]);
}



let footer = document.createElement('footer');
