const fishEl = document.getElementById("fish");
const fish = ["${bubble1}",
    "&nbsp;${bubble2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___",
    "&nbsp;&nbsp;${bubble3}&nbsp;&nbsp;&nbsp;___======____=<span class='orange'>-</span><span class='yellow'>-</span><span class='orange'>-=</span>)",
    "&nbsp;&nbsp;&nbsp;${mouth}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_<span class='yellow'>--=</span><span class='orange'>==</span>)",
    "&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;\\&nbsp;<span class='orange'>${eye}</span>&nbsp;&nbsp;&nbsp;\\~&nbsp;&nbsp;&nbsp;&nbsp;\\_<span class='yellow>-=</span><span class='orange'>=</span>)",
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

const updateFish = (emotion = "neutral", timeActive = 0) => {
    fishEl.innerHTML = "";
    let height = 0;
    switch(timeActive % 4) {
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
    let bubble1 = "O";
    let bubble2 = "o";
    let bubble3 = ".";
    let eye = "(<span class='yellow'>0</span>)";
    let mouth = "/T";
    if (emotion === "asleep") {
        bubble1 = "Z";
        bubble2 = "z";
        bubble3 = "z";
        eye = "--'";
        height = 4;
    } else if (emotion === "eating") {
        height = 0;
        bubble1 = "&nbsp;&nbsp;★";
        bubble2 = "◆";
        bubble3 = "●";
        mouth = "\\'"
    }
    
    for (let i = 0; i < height + 2; i++) {
        fishEl.innerHTML += "<br>";
    }

    fish.forEach((line, i) => {
        fishEl.innerHTML += `<span>${line.replace("${bubble1}", bubble1)
            .replace("${bubble2}", bubble2)
            .replace("${bubble3}", bubble3)
            .replace("${eye}", eye)
            .replace("${mouth}", mouth)
            }</span><br>`;
    });
}

updateFish();