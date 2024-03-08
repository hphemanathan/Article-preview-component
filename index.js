const shareButton = document.querySelector(".section__author__share--icon");
const shareComponent = document.querySelector(".section__share");

console.log (shareButton, shareComponent);

function shareHandle(event) {
    shareComponent.classList.add("open")
}

shareButton.addEventListener('click', shareHandle)