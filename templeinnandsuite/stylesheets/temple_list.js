const requestURL = 'https://luckysandwich7.github.io/wdd230/templeinnandsuite/temple.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const affiliates = jsonObject['affiliates'];
    affiliates.forEach(displayAffiliates);
  });

function displayAffiliates(affiliate) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let heart = document.createElement('img');
  let h3 = document.createElement('h3');
  let phone = document.createElement('a');
  let email = document.createElement('a');
  let address = document.createElement('p');
  let image = document.createElement('img');
  let history = document.createElement('p');
  let ordinance = document.createElement('p');
  let session = document.createElement('a');
  let closed = document.createElement('p');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h3.textContent = `${affiliate.name}`;
  phone.textContent = `Phone: ${affiliate.phone}`;
  email.textContent = `Email: ${affiliate.email}`;
  address.textContent = `Address: ${affiliate.address}`;
  history.textContent = `History: ${affiliate.history}`
  ordinance.textContent = `Ordinances: ${affiliate.ordinance}`;
  session.textContent = `Schedule Session: ${affiliate.session}`;
  closed.textContent =  `Closed: ${affiliate.closed}`

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  heart.setAttribute('src', affiliate.heart);
  heart.setAttribute('alt', `heart`);
  heart.setAttribute('loading', 'lazy');
  // heart.setAttribute('id', 'open');
  // heart.onclick = toggleHeart
  image.setAttribute('src', affiliate.image);
  image.setAttribute('alt', `${affiliate.name}`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.classList.add('card')
  card.appendChild(heart);
  card.appendChild(h3);
  card.appendChild(image);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(address);
  card.appendChild(history);
  card.appendChild(ordinance);
  card.appendChild(session);
  card.appendChild(closed);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}