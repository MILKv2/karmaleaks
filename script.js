document.addEventListener("DOMContentLoaded", function () {
    var scrollTarget = document.getElementById("scroll-target");
  
    if (scrollTarget) {
      var targetPosition =
        scrollTarget.getBoundingClientRect().top + window.scrollY;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  
    const navigation = document.querySelector(".navigation");
    document.querySelector(".toggle").onclick = function () {
      this.classList.toggle("active");
      navigation.classList.toggle("active");
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  
  function toggleFooterVisibility() {
    var footer = document.getElementById("footer1");
  
    if (footer.style.display === "none" || footer.style.display === "") {
      footer.style.opacity = "1";
      footer.style.display = "block";
    } else {
      footer.style.opacity = "0";
      setTimeout(() => {
        footer.style.display = "none";
      }, 300);
    }
  }
  
  // code for searchbar
  const searchInput = document.getElementById("search");
  console.log(searchInput);
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    console.log(searchValue);
    const allNames = document.querySelectorAll(".header1");
    console.log(allNames[0].innerHTML);
    allNames.forEach((name) => {
      if (name.innerHTML.toLowerCase().startsWith(searchValue)) {
        name.parentElement.style.display = "block";
      } else {
        name.parentElement.style.display = "none";
      }
    });
  });