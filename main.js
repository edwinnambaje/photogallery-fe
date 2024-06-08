// Select all image containers
const containers = document.querySelectorAll(".image-container");

// Add click event listener to each container
containers.forEach((container) => {
  container.addEventListener("click", () => {
    // Select the image inside the clicked container
    const img = container.querySelector("img");

    // Create a clone of the image
    const clone = img.cloneNode();

    // Set the image properties of the clone
    clone.style.width = "100%";
    clone.style.height = "100%";
    clone.style.objectFit = "cover";

    // Create a parent div with backdrop filter and flex properties
    const parentDiv = document.createElement("div");
    parentDiv.style.position = "fixed";
    parentDiv.style.top = "0";
    parentDiv.style.left = "0";
    parentDiv.style.width = "100vw";
    parentDiv.style.height = "100vh";
    parentDiv.style.display = "flex";
    parentDiv.style.justifyContent = "center";
    parentDiv.style.alignItems = "center";
    parentDiv.style.backdropFilter = "blur(10px)";
    parentDiv.style.zIndex = "1000";

    // Create a closing icon
    const closeIcon = document.createElement("span");
    closeIcon.innerHTML = "&#10005;";
    closeIcon.style.position = "absolute";
    closeIcon.style.top = "20px";
    closeIcon.style.right = "20px";
    closeIcon.style.cursor = "pointer";
    closeIcon.style.color = "#00dbff";
    closeIcon.addEventListener("click", () => {
      document.body.removeChild(parentDiv);
    });

    // Append the closing icon to the parent div
    parentDiv.appendChild(closeIcon);

    // Create another div to append the clone to
    const childDiv = document.createElement("div");
    childDiv.style.width = window.innerWidth > 895 ? "25vw" : "50vw";
    childDiv.style.height = window.innerWidth > 895 ? "90vh" : "50vh";
    childDiv.appendChild(clone);

    // Append the child div to the parent div
    parentDiv.appendChild(childDiv);

    // Append the parent div to the body
    document.body.appendChild(parentDiv);
  });
});
