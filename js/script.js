// @ts-nocheck
const imgContainer = document.getElementById("image-container");
const urlAPI = "https://picsum.photos/v2/list";

const getPicture = () => {
  fetch(urlAPI)
    .then((data) => data.json())
    .then((items) => {
      //   console.log(items);
      items.forEach((photoObject) => {
        const newContainer = document.createElement("div");
        newContainer.classList.add("image-container-item");

        const newImag = document.createElement("img");
        newImag.src = photoObject.download_url;
        newImag.style.width = "300px";
        newImag.style.height = "200px";
        newContainer.appendChild(newImag);

        const newAuthor = document.createElement("p");
        newAuthor.textContent = photoObject.author;
        newContainer.appendChild(newAuthor);

        imgContainer.appendChild(newContainer);
      });
    });
};

getPicture();
