const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector(".accordion__icon");

  header.addEventListener("click", () => toggleAccordion(index));
});

function toggleAccordion(activeIndex) {
  accordions.forEach((accordion, index) => {
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon");
    const isActive = index === activeIndex;
    const isOpen = content.classList.contains("open");

    if (isActive && !isOpen) {
      content.style.height = `${content.scrollHeight}px`;
      content.classList.add("open");
      icon.classList.replace("ri-add-line", "ri-subtract-fill");
    } else {
      content.style.height = "0px";
      content.classList.remove("open");
      icon.classList.replace("ri-subtract-fill", "ri-add-line");
    }

    if (!isActive) {
      content.style.height = "0px";
      content.classList.remove("open");
      icon.classList.replace("ri-subtract-fill", "ri-add-line");
    }
  });
}
