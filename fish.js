const fishEl = document.getElementById("fish");
const fish = ["O",
    "&nbsp;o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___",
    "&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;___======____=<span class='orange'>-</span><span class='yellow'>-</span><span class='orange'>-=</span>)",
    "&nbsp;&nbsp;&nbsp;/T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_<span class='yellow'>--=</span><span class='orange'>==</span>)",
    "&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;\\&nbsp;<span class='orange'>(<span class='yellow'>0</span>)</span>&nbsp;&nbsp;&nbsp;\\~&nbsp;&nbsp;&nbsp;&nbsp;\\_<span class='yellow>-=</span><span class='orange'>=</span>)",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;)J<span class='orange'>~~</span>&nbsp;&nbsp;&nbsp;&nbsp;\\<span class='yellow'>-=</span>)",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\\___/&nbsp;&nbsp;)JJ<span class='orange'>~</span><span class='yellow'>~~</span>&nbsp;&nbsp;&nbsp;\\)",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_____/JJJ<span class='orange'>~~</span><span class='yellow'>~~</span>&nbsp;&nbsp;&nbsp;&nbsp;\\",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='orange'>/</span>&nbsp;\\&nbsp;&nbsp;<span class='yellow'>,&nbsp;\\</span>J<span class='orange'>~~~<span class='yellow'>~~</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='orange'>(-</span><span class='yellow'>\\)</span>\\=<span class='orange'>|<span class='yellow'>\\\\\\</span>~~<span class='yellow'>~~</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L_</span><span class='yellow'>_</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='orange'>(<span class='red'>\\</span>\\)&nbsp;&nbsp;(<span class='yellow'>\\</span>\\\\)</span>_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='yellow'>\\==</span><span class='orange'>__</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\V&nbsp;&nbsp;&nbsp;&nbsp;<span class='orange'>\\\\</span>\\)&nbsp;==<span class='orange'>=_____&nbsp;&nbsp;&nbsp;<span class='yellow'>\\\\\\\\</span>\\\\</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\V)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_)&nbsp;<span class='orange'>\\\\<span class='yellow'>\\\\JJ\\</span>J\\)</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<span class='orange'>J<span class='yellow'>\\</span>J<span class='red'>T\\</span>JJJ</span>J)",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(J<span class='orange'>JJ</span>|&nbsp;\\UUU",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(UU)"];

const updateFish = (emotion, height) => {
    fishEl.innerHTML += "<br><br><br>"
    fish.forEach((line, i) => {
        fishEl.innerHTML += `<span>${line}</span><br>`;
    });
}

updateFish();