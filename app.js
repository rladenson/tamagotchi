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

        document.getElementById("feed").onclick = this.feed;
        document.getElementById("lights").onclick = this.lights;
        document.getElementById("play").onclick = this.play;

        this.ageInterval = setInterval(() => this.age.textContent++, 1 * 1000 * 60) //1min
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
        this.fishInterval = setInterval(() => {
            updateFish(this.emotion, this.timeActive % 3);
            this.timeActive++;
        }, 1000); // 1 sec
    }
    feed = () => {
        let hunger = this.hunger.textContent;
        hunger -= 4;
        if (hunger <= 0)
            this.hunger.textContent = 0;
        else
            this.hunger.textContent = hunger;
    }
    lights = () => {
        let sleepiness = this.sleepiness.textContent;
        sleepiness -= 10;
        if (sleepiness <= 0)
            this.sleepiness.textContent = 0;
        else
            this.sleepiness.textContent = sleepiness;
    }
    play = () => {
        let boredom = this.boredom.textContent;
        boredom -= 3;
        if (boredom <= 0)
            this.boredom.textContent = 0;
        else
            this.boredom.textContent = boredom;
    }
    die = () => {
        clearInterval(this.ageInterval);
        clearInterval(this.statsInterval);
        document.getElementById("actions").style.display = "none";
        const endgame = document.createElement("h1");
        const color = "rgba(255, 0, 0, 0.4)";
        endgame.style.textShadow = `-1px 0 2px ${color}, 0 1px 2px ${color}, 1px 0 2px ${color}, 0 -1px 2px ${color}`;
        endgame.textContent = `${this.name} died. They lived to the age of ${this.age.textContent}`;
        document.getElementById("game").appendChild(endgame);
    }
}

const newGame = () => {
    tamagotchi = new Game(document.getElementById("nameInput").value);
    document.getElementById("setup").setAttribute("hidden", "");
    document.getElementById("game").removeAttribute("hidden");
}