document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const username = document.getElementById('name-input')
  let joke; // -> undefined

  // console.log(form, jokeList, newJokeLi, username)
  // debugger

  function fetchJoke(){
    // ADAPTOR pattern
    let originalPromise = fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    let newPromise = originalPromise.then(res => res.json())
    return newPromise
    // return fetch("URL", {}).then(r => r.json())
  }


  form.addEventListener('submit', (event) => {
    event.preventDefault()
    // debugger;

    if(username.value === "") {
      return;
    }
    
    fetchJoke()
    .then(jokeData => {
      const newJokeLi = document.createElement('li')
      joke = jokeData.joke
      newJokeLi.innerHTML = `
      <span class="username">${username.value} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)
    })

  })


















})
