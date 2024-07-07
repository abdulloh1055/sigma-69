let input = document.querySelector("input");
let button = document.querySelector("button");
let fromselek = document.querySelector(".fromselek");
let toselek = document.querySelector(".toselek");
let h2 = document.querySelector("h2");

button.addEventListener("click",(event) =>{
  event.preventDefault();

  let amount = Number(input.value);
  let fromCur = fromselek.value;
  let toCur = toselek.value;

  fetch(`https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${fromCur}&currencies=${toCur}`,{
    headers: {
      "x-rapidapi-key": "fb323d50aemsh021cce6e22c7eccp14cda2jsn5f18a9634617"
  }
  })
  .then((res) => res.json())
  .then((data) =>{

    let result = data.result[toCur.toUpperCase()]*amount
    h2.textContent = result + toCur.toUpperCase(); 
  });
});        