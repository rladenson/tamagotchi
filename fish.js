const fishEl = document.getElementById("fish");
const fish = [
    "${bubble1}",
    "&nbsp;${bubble2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___",
    "&nbsp;&nbsp;${bubble3}&nbsp;&nbsp;&nbsp;___======____=<span class='${color2}'>-</span><span class='${color3}'>-</span><span class='${color2}'>-=</span>)",
    "&nbsp;&nbsp;&nbsp;${mouth}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_<span class='${color3}'>--=</span><span class='${color2}'>==</span>)",
    "&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;\\&nbsp;<span class='${color2}'>${eye}</span>&nbsp;&nbsp;&nbsp;\\~&nbsp;&nbsp;&nbsp;&nbsp;\\_<span class='${color3}>-=</span><span class='${color2}'>=</span>)",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;)J<span class='${color2}'>~~</span>&nbsp;&nbsp;&nbsp;&nbsp;\\<span class='${color3}'>-=</span>)",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\\___/&nbsp;&nbsp;)JJ<span class='${color2}'>~</span><span class='${color3}'>~~</span>&nbsp;&nbsp;&nbsp;\\)",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_____/JJJ<span class='${color2}'>~~</span><span class='${color3}'>~~</span>&nbsp;&nbsp;&nbsp;&nbsp;\\",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='${color2}'>/</span>&nbsp;\\&nbsp;&nbsp;<span class='${color3}'>,&nbsp;\\</span>J<span class='${color2}'>~~~<span class='${color3}'>~~</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='${color2}'>(-</span><span class='${color3}'>\\)</span>\\=<span class='${color2}'>|<span class='${color3}'>\\\\\\</span>~~<span class='${color3}'>~~</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L_</span><span class='${color3}'>_</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='${color2}'>(<span class='${color1}'>\\</span>\\)&nbsp;&nbsp;(<span class='${color3}'>\\</span>\\\\)</span>_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='${color3}'>\\==</span><span class='${color2}'>__</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\V&nbsp;&nbsp;&nbsp;&nbsp;<span class='${color2}'>\\\\</span>\\)&nbsp;==<span class='${color2}'>=_____&nbsp;&nbsp;&nbsp;<span class='${color3}'>\\\\\\\\</span>\\\\</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\V)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_)&nbsp;<span class='${color2}'>\\\\<span class='${color3}'>\\\\JJ\\</span>J\\)</span>",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<span class='${color2}'>J<span class='${color3}'>\\</span>J<span class='${color1}'>T\\</span>JJJ</span>J)",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(J<span class='${color2}'>JJ</span>|&nbsp;\\UUU",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(UU)"
];

const updateFish = (state = "neutral", timeActive = 0, age = 0) => {
    fishEl.innerHTML = "";
    let height = 0;
    switch (timeActive % 4) {
        case 1:
        case 3:
            height = 2;
            break;
        case 2:
            height = 3;
            break;
        default:
            height = 0;
            break;
    }
    for (let i = 0; i < height + 2; i++) {
        fishEl.innerHTML += "<br>";
    }

    let bubble1 = "O";
    let bubble2 = "o";
    let bubble3 = ".";
    let eye = "(<span class='${color3}'>0</span>)";
    let mouth = "/T";
    if (state === "asleep") {
        bubble1 = "Z";
        bubble2 = "z";
        bubble3 = "z";
        eye = "--'";
        height = 4;
    } else if (state === "eating") {
        height = 0;
        bubble1 = "&nbsp;&nbsp;★";
        bubble2 = "◆";
        bubble3 = "●";
        mouth = "\\'"
    } else if (state === "dead") {
        bubble1 = "&nbsp;"
        bubble2 = "&nbsp;"
        bubble3 = "&nbsp;"
        eye = "--'";
        height = 4;
    }

    let color1 = "purple";
    let color2 = "blue";
    let color3 = "cyan";
    let size = "little";
    if (age >= 10) {
        color1 = "red";
        color2 = "orange";
        color3 = "yellow";
        size = "big";
    } else if (age >= 5) {
        color1 = "redpurple";
        color2 = "orangeblue";
        color3 = "yellowcyan";
        size = "middle";
    }

    fish.forEach((line, i) => {
        fishEl.innerHTML += `<span>${line
            .replace(/\${bubble1}/, bubble1)
            .replace(/\${bubble2}/, bubble2)
            .replace(/\${bubble3}/, bubble3)
            .replace(/\${eye}/, eye)
            .replace(/\${mouth}/, mouth)
            .replace(/\${color1}/g, color1)
            .replace(/\${color2}/g, color2)
            .replace(/\${color3}/g, color3)
            }</span><br>`;
    });
    fishEl.classList = [];
    fishEl.classList.add(color1, size);
}

updateFish();