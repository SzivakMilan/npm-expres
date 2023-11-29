console.log('loaded')
const rootElement = document.querySelector("#root")

const fetchUrl = async (url) => {
  const data = await fetch(url)
  return data.json()
}

async function init() {
  const data = await fetchUrl("/kismacska")
  console.log(data)
  rootElement.insertAdjacentHTML("beforeend", `<p>${data}</p>`)

  const beerData = await fetchUrl("/beers/101")
  console.log(beerData)
}

init()