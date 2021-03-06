let affiliates = null
let randomNumbers = []

const requestURL = 'https://luckysandwich7.github.io/wdd230/chamber/directory/data.json';
const cards = document.querySelector('.cards');

async function runFetch() {
  await fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing

      affiliates = jsonObject.affiliates;
      // affiliates.forEach(displayAffiliates);
    });
}

function getRandomAffiliate() {
  // Returns a random integer from 0 to 9:
  const random = getRandomNumber() //Math.floor(Math.random() * 9);
  return affiliates[random];
}

function getRandomNumber() {
  let random = Math.floor(Math.random() * 3);
  for (let count = 0; count < 100; count++) {
    // if ensures the number isn't the same if number is not the same it breaks out of loop.
    if (!randomNumbers.includes(random)) break
    random = Math.floor(Math.random() * 3);
  }
  randomNumbers.push(random);
  return random;
}

function displayAffiliate(affiliate, parentElement) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let website = document.createElement('p');
  let image = document.createElement('img');
  let membership = document.createElement('p');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${affiliate.name}`;
  phone.textContent = `Phone: ${affiliate.phone}`;
  email.textContent = `Email: ${affiliate.email}`;
  website.textContent = `Website: ${affiliate.website}`;
  membership.textContent = `${affiliate.membership} Member`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  image.setAttribute('src', affiliate.image);
  image.setAttribute('alt', `Company logo of ${affiliate.name}, Great Lakes Chamber of Commerce Affiliiate`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.classList.add('card')
  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(website);
  card.appendChild(membership);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector(parentElement).appendChild(card);
}