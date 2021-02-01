// const apiUrl = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

const card = document.querySelector('.js-card')
const flipToggle = document.querySelectorAll('.js-flipcard')

const flipCard = () => {
  card.classList.toggle('is-flipped')
}

flipToggle.forEach(toggle => toggle.addEventListener('click', flipCard))

// API is no longer working

// const getData = async (url, params) => {
//   const response = await fetch(url, params)
//   return response.json()
// }

// getData(`${apiUrl}/squads/1/teams/3/members`)
//   .then(data => console.log(data))