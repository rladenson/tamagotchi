let tamagotchi;
class Game {
    constructor(name) {
        this.name = name;
        if (name === "")
            this.name = "Your tamagotchi";
        document.getElementById("name").textContent = this.name;

        this.hunger = document.getElementById("hunger");
        this.hunger.textContent = 3;
        this.sleepiness = document.getElementById("sleepiness");
        this.sleepiness.textContent = 0;
        this.boredom = document.getElementById("boredom");
        this.boredom.textContent = 3;
        this.age = document.getElementById("age");
        this.age.textContent = 0;

        this.lock = false;
        document.getElementById("feed").onclick = this.feed;
        document.getElementById("lights").onclick = this.lights;
        document.getElementById("play").onclick = this.play;

        this.ageInterval = setInterval(() => this.age.textContent++, 1 * 60 * 1000) //1min
        this.statsInterval = setInterval(() => {
            this.hunger.textContent++;
            this.sleepiness.textContent++;
            this.boredom.textContent++;
            if (this.hunger.textContent >= 10 ||
                this.sleepiness.textContent >= 10 ||
                this.boredom.textContent >= 10) {
                this.die();
            }
        }, 10 * 1000) //10 sec
        this.timeActive = 0;
        this.state = "neutral";
        this.fishInterval = setInterval(() => {
            this.timeActive++;
            updateFish(this.state, this.timeActive, this.age.textContent);
        }, 1000); // 1 sec
    }
    feed = () => {
        if (!this.lock) {
            this.lock = true;
            this.state = "eating";
            updateFish(this.state, this.timeActive, this.age.textContent);
            setTimeout(() => {
                this.state = "neutral";
                updateFish(this.state, this.timeActive, this.age.textContent);
                this.lock = false;
            }, 2000)
            let hunger = this.hunger.textContent;
            hunger -= 4;
            if (hunger <= 0)
                this.hunger.textContent = 0;
            else
                this.hunger.textContent = hunger;
        }
    }
    lights = () => {
        if (!this.lock) {
            this.lock = true;
            document.getElementById("light").src = "img/light_off.png";
            document.body.style.backgroundColor = "rgba(79, 79, 37, 0.2)"
            this.state = "asleep";
            updateFish(this.state, this.timeActive, this.age.textContent);
            setTimeout(() => {
                document.getElementById("light").src = "img/light_on.png";
                this.state = "neutral";
                updateFish(this.state, this.timeActive, this.age.textContent);
                document.body.style.backgroundColor = "rgba(255, 255, 154, .2)"
                this.lock = false;
            }, 2000)
            let sleepiness = this.sleepiness.textContent;
            sleepiness -= 10;
            if (sleepiness <= 0)
                this.sleepiness.textContent = 0;
            else
                this.sleepiness.textContent = sleepiness;
        }
    }
    play = () => {
        if (!this.lock) {
            this.lock = true;
            this.playX = 0;
            this.playInterval = setInterval(() => {
                if(this.playX % 2 === 0) {
                    document.getElementById("fish").style.transform = "scaleX(-1)";
                } else {
                    document.getElementById("fish").style.transform = "";
                }
                
                this.playX++;
                if(this.playX >= 4) {
                    this.lock = false;
                    clearInterval(this.playInterval);
                    this.playX = undefined;
                }
            }, 500)
            this.set
            let boredom = this.boredom.textContent;
            boredom -= 3;
            if (boredom <= 0)
                this.boredom.textContent = 0;
            else
                this.boredom.textContent = boredom;
        }
    }
    die = () => {
        clearInterval(this.ageInterval);
        clearInterval(this.statsInterval);
        clearInterval(this.fishInterval);
        updateFish("dead", undefined, this.age.textContent);
        document.getElementById("actions").style.display = "none";
        let endgame = document.getElementById("endgame");
        if (!endgame) {
            endgame = document.createElement("h1");
            endgame.id = "endgame";
            document.getElementById("game").appendChild(endgame);
        } else {
            endgame.style.display = "revert";
        }
        const color = "rgba(255, 0, 0, 0.4)";
        endgame.style.textShadow = `-1px 0 2px ${color}, 0 1px 2px ${color}, 1px 0 2px ${color}, 0 -1px 2px ${color}`;
        endgame.innerHTML = `${this.name} died. They lived to the age of ${this.age.textContent}<br><button onclick="newGame()">Play Again?</button>`;
    }
}

const newGame = () => {
    tamagotchi = new Game(document.getElementById("nameInput").value);
    document.getElementById("setup").setAttribute("hidden", "");
    document.getElementById("game").removeAttribute("hidden");
    const endgame = document.getElementById("endgame");
    if(endgame) {
        endgame.style.display = "none";
    }
}