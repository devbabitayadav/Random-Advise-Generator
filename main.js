
let btn = document.querySelector(".advice-generate-btn");
let text = document.querySelector(".advice-text");



async function fetchData() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
console.log(response)
  return (text.innerText = data.slip.advice);

}

btn.addEventListener("click", fetchData);

