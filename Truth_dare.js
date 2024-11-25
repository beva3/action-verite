class Gamme_truth_dare{
    constructor(){
        this.truth = []
        this.dare  = []
        this.choices = {
            truth: "Truth",
            dare: "Dare"
        }
    }

    choice(){
        return this.choices['truth']
    }
    generate(game){
        console.log(`playing ${game} game`);
    }
    play(){
        console.log("Playing");
        let game = this.choice();
        this.generate(game);
    }
}

let game = new Gamme_truth_dare();
game.play();