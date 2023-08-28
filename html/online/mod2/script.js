function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  const sectionTop = section.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
}
