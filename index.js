const h2 = document.querySelectorAll("h2");
h2.forEach((each) =>
  each.addEventListener("click", function () {
    each.classList.toggle("toggle");
  })
);
