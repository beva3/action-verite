class Gamme_truth_dare{
    constructor(){
        this.truth = []
        this.dare  = []
        this.choices = {
            1: "Truth",
            2: "Dare"
        }
    }

    choice(){
        let index = Math.floor(Math.random() * 2 +1)
        console.log(index);
        
        return this.choices[index]
    }
    generate(game){
        let index = Math.floor(Math.random() * game.length)
        console.log(`${game[index]}`);
        
    }
    play(){
        const truth = [
            "Tell the truth",
            "Be honest",
            "Share your thoughts and feelings",
            "Be true to yourself"
        ]

        const dare = [
            "Dare to lie",
            "Be difficult",
            "Do something you don't want to do",
            "Do something out of your comfort zone"
        ]
        console.log(truth);
        
        game = this.choice()
        console.log(`${game} game`);
        if (game == "Truth") {
            this.generate(truth)
        }else if (game == "Dare"){
            this.generate(dare)
        }
    }
    
}

let game = new Gamme_truth_dare();
game.play();