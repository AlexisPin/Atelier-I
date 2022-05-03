const form = document.querySelector("form");
const succes_message = document.querySelector(".success-message");

const handleSubmit = (e) => {
  e.preventDefault();
  const data = $("form").serializeArray();
  let card = {};
  for (i in data) {
    card[data[i].name] = parseInt(data[i].value, 10)
      ? parseInt(data[i].value, 10)
      : data[i].value;
  }
  fetchData(card);
  clearForm();
  succes_message.style.display = "block";
};

form.addEventListener("submit", handleSubmit);

function fetchData(card) {
  const URL = "https://asi2-backend-market.herokuapp.com/card";
  let context = {
    method: "POST",
    body: JSON.stringify(card),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(URL, context)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

const clearForm = () => {
  form.reset();
};
