document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".btn");
  const storeProducts = document.querySelectorAll(".store-product");
  const search = document.getElementById("search");
  const productName = document.querySelectorAll(".product-details h2");
  const noResult = document.querySelector(".no-result");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      // Switch Tab content
      const filter = e.target.dataset.filter;
      storeProducts.forEach((product) => {
        if (filter === "all") {
          product.style.display = "block";
        } else if (product.classList.contains(filter)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  }

  // SEARCH FILTER
  search.addEventListener("keyup", filterProducts);

  function filterProducts(e) {
    const text = e.target.value.toLowerCase();

    productName.forEach((product) => {
      const item = product.textContent.toLowerCase();
      const parentProduct = product.parentElement.parentElement;

      if (item.includes(text)) {
        parentProduct.classList.remove("hidden");
        noResult.style.display = "none";
      } else {
        parentProduct.classList.add("hidden");
        noResult.style.display = "block";
      }
    });
  }
});
