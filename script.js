const header = document.getElementsByClassName("header");
const sticky = header.offsetTop;

const stickyHeader = () => {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

window.onscroll = stickyHeader; 