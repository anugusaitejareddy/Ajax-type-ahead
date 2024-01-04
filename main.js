const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const prom = fetch(endpoint);
prom.then((res) => res.json()).then((data) => cities.push(...data));

function showResults() {
  let res = cities.filter(
    (place) =>
      place.city.toLowerCase().includes(input.value.toLowerCase()) ||
      place.state.toLowerCase().includes(input.value.toLowerCase())
  );

  let html = res.map(
    (place) => `<li>
            <span>${place.city}, ${place.state}</span>
            <span>${place.population}</span>
            </li>`
  );
  citiesList.innerHTML = html.join("");
}

const input = document.querySelector(".search");
const citiesList = document.querySelector(".suggestions");

input.addEventListener("change", showResults);
input.addEventListener("keyup", showResults);
