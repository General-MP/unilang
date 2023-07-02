const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards"});
}

var typed = new Typed(".auto-type", {
    strings: ["", "true"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

const letters = "abcdefghijklmnopqrStuvwxYz"
document.querySelector("strong.start").onmouseover = event => {
    let iteration = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iteration){
                return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if(iteration >= event.target.dataset.value.length) clearInterval(interval);

    iteration += 1 / 3;
    }, 30);
}

document.querySelector("strong.young").onmouseover = event => {
    let iteration = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iteration){
                return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if(iteration >= event.target.dataset.value.length) clearInterval(interval);

    iteration += 1 / 3;
    }, 30);
}

const left = document.getElementById("left-side")

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`
}

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]);