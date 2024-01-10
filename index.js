const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.querySelector("#form")),
  }).then((res) => {
    if (res.ok) {
      window.location.href = "./success.html/";
    }
  });
});
