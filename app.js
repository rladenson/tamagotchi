class Game {
    constructor() {
        this.hunger = document.getElementById("hunger");
        this.hunger.textContent = 3;
        this.sleepiness = document.getElementById("sleepiness");
        this.sleepiness.textContent = 3;
        this.boredom = document.getElementById("boredom");
        this.boredom.textContent = 3;
        this.age = document.getElementById("age");
        this.age.textContent = 0;
    }
}

const tamagotchi = new Game();

