let tamagotchi;
class Game {
    constructor(name) {
        this.name = name;
        document.getElementById("name").textContent = name;

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
        }, 10 * 1000) //10 sec
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
}

const newGame = () => {
    tamagotchi = new Game(document.getElementById("nameInput").value);
    document.getElementById("setup").setAttribute("hidden", "");
    document.getElementById("game").removeAttribute("hidden");
}