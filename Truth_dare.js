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
        console.log(index);
        
        return game[index]
        
    }
    play(){
        this.truth = [
            "Tell the truth",
            "Be honest",
            "Share your thoughts and feelings",
            "Be true to yourself",
            "Be a good listener",
            "Be open and honest",
            "Be a good friend",
            "Be a good listener",
            "Be a good speaker",
            "Be a good team player",
            "Be a good leader"
        ]

        this.dare = [
            "Dare to lie",
            "Be difficult",
            "Do something you don't want to do",
            "Do something out of your comfort zone",
            "Do something you don't know",
            "Do something you're afraid of",
            "Do something you're not comfortable with",
            "Do something you don't want to do",
            "Do something you don't know"
        ]

        const t_d = document.getElementById("t_d")
        resultat = document.getElementById("resultat")
        t_d.addEventListener('click', () =>{
            game = this.choice()
            console.log(`${game} game`);

            
            if (game == "Truth") {
                
                resultat.textContent = 'Truth : ' + this.generate(this.truth)
            } else if (game == "Dare"){
                resultat.textContent = 'Dare : ' + this.generate(this.dare)
            }
        })

        // game = this.choice()
        
        // console.log(`${game} game`);
        // if (game == "Truth") {
        //     this.generate(this.truth)
        // }else if (game == "Dare"){
        //     this.generate(this.dare)
        // }
    }
    
}

let game = new Gamme_truth_dare();
game.play();