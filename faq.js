const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector(".accordion__icon"); 

  header.addEventListener("click", () => toggleAccordion(index, content, icon));
});

function toggleAccordion(index, content, icon) {
  const isOpen = content.style.height === `${content.scrollHeight}px`;

  accordions.forEach((accordion, i) => {
    const c = accordion.querySelector(".accordion__content");
    const ic = accordion.querySelector(".accordion__icon"); 

    if (i === index) {
      c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
      ic.classList.toggle("ri-add-line", !isOpen);
      ic.classList.toggle("ri-subtract-fill", !isOpen);
    } else {
      c.style.height = "0px";
      ic.classList.add("ri-add-line");
      ic.classList.remove("ri-subtract-fill");
    }
  });
}