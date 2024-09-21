// Adapted from: https://www.educative.io/answers/how-to-implement-infinite-scrolling-in-javascript

const container = document.querySelector('.container');

// Inserts new stanzas.
function loadRenditions(numRenditions = 10) {
    let i = 0;
    while (i < numRenditions) {
        const p = document.createElement('p');
        p.innerHTML = `I have eaten<br />
the plums<br />
that were in<br />
the icebox<br />
<br />
and which<br />
you were probably<br />
saving<br />
for breakfast<br />
<br />
Forgive me<br />
they were delicious<br />
so sweep<br />
and so cold<br />
<br />
`
        container.appendChild(p);
        i++;
    }
}

loadRenditions();

// Listens for scroll events; loads more if bottom of the window is reached.
// One limitation of this design is that it won't scroll if the previous load
// doesn't overflow the window.
window.addEventListener('scroll', () => {
    console.log("scrolled", window.scrollY) // Scrolled from top.
    console.log(window.innerHeight) // Visible part of screen.
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadRenditions();
    }
})
