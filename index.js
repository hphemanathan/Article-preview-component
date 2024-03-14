const shareButton = document.querySelector(".section__author__share--icon");
const shareComponent = document.querySelector(".section__share");
const shareAuthor = document.querySelector(".section__author");

console.log (shareButton, shareComponent, shareAuthor);

function shareHandle(event) {
    shareComponent.classList.add("open")
    shareAuthor.classList.add("hide");
}

shareButton.addEventListener('click', shareHandle)