const images = [
    "./assets/gallery/0872285883cee475f9533508e645f19ef0939ae8.png",
    "./assets/gallery/3c416b08502bf2ed10a304bdce5c1c782b99c40d.jpg",
    "./assets/gallery/4ac67c63bfc2b6a80cca4919df91a1e498ec4c07.jpg",
    "./assets/gallery/714707b1ea80f159dacba47280dc1091bbebb9c7.jpg",
    "./assets/gallery/872f2a95ab48c88b865e4f11d2e061a802987c88.jpg",
    "./assets/gallery/8bc8dae8f655d7cac8d770f66d76f62367f5b5df.jpg",
    "./assets/gallery/93265accae6c295655b8fd3cc1113f8c76b70797.jpg",
    "./assets/gallery/bbd3479cb0c36ecd872f4526275e11a893e50107.jpg",
    "./assets/gallery/cc1d7f8870c4b98e849a8e36c6c397e0f71486f9.jpg",
    "./assets/gallery/dc4b11f7f36deb9409236c10ebcd6c849b00f447.jpg",
    "./assets/gallery/f1ba9135a20ea8343ad3d5732c6f8a541ec455b5.jpg",
    "./assets/gallery/f2b056a08d5edba809ca216fa6aa66a4bb612ea8.jpg",
];

const titles = [
    "Gewitter",
    "Baum",
    "Vogel auf einem Baum",
    "Stadt",
    "Ente",
    "Nacht",
    "Gletscher",
    "Planet",
    "Katze",
    "See",
    "Vogel auf einem Stein",
    "Berg",
];

function render() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let index = 0; index < images.length; index++) {
        contentRef.innerHTML += getImageHtml(index);
    }

    document.getElementById("myDialog").addEventListener("click", (e) => {
        if (e.target.id === "myDialog") closeDialog();
    });
}

function getImageHtml(i) {
    return `
        <img 
            src="${images[i]}" 
            alt="${titles[i]}" 
            onclick="openModal(${i})"
        >
    `;
}

let currentIndex = 0;

function openModal(i) {
    currentIndex = i;
    updateDialog();
    document.getElementById("myDialog").showModal();
}

function updateDialog() {
    document.getElementById("dialogImg").src = images[currentIndex];
    document.getElementById("dialogTitle").textContent = titles[currentIndex];
    document.getElementById("counter").textContent =
        `${currentIndex + 1}/${images.length}`;
}

function closeDialog() {
    document.getElementById("myDialog").close();
    document.getElementById("dialogImg").src = "";
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateDialog();
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateDialog();
}

// ---------------------------------------------------------
