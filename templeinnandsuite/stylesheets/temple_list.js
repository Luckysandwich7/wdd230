let affiliates = null
let randomNumbers = []

const requestURL = 'https://luckysandwich7.github.io/wdd230/templeinnandsuite/temple.json';
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
    let random = Math.floor(Math.random() * 9);
    for (let count = 0; count < 100; count++) {
      // if ensures the number isn't the same if number is not the same it breaks out of loop.
      if (!randomNumbers.includes(random)) break
      random = Math.floor(Math.random() * 9);
    }
    randomNumbers.push(random);
    return random;
  }

function displayAffiliates(affiliate) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let address = document.createElement('p');
  let image = document.createElement('img');
  let ordinance = document.createElement('p');
  let session = document.createElement('p');
  let closed = document.createElement('p');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${affiliates.name}`;
  phone.textContent = `Phone: ${affiliates.phone}`;
  email.textContent = `Email: ${affiliates.email}`;
  address.textContent = `Address: ${affiliates.address}`;
  ordinance.textContent = `Ordinances: ${affiliates.ordinance}`;
  session.textContent = `Schedule Session: ${affiliates.session}`;
  closed.textContent =  `Closed: ${affiliates.closed}`

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  image.setAttribute('src', affiliates.image);
  image.setAttribute('alt', `${affiliates.name}`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.classList.add('card')
  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(address);
  card.appendChild(ordinance);
  card.appendChild(session);
  card.appendChild(closed);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('.templedisplay .cards').appendChild(card);
}