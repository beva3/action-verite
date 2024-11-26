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
            "Be true to yourself"
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
        const resultat = document.getElementById("resultat")
        const restart = document.getElementById("restart")

        let n_person = 8
        let count = 0;
        
        t_d.addEventListener('click', () =>{
            let rand = this.generate(this.truth)
            resultat.innerHTML = `Game : Truth <br>  ${rand}`
            restart.disabled = true
            count++;
            if(count>n_person){
                restart.disabled = false
                restart.addEventListener('click',()=>{
                    count = 0;
                    resultat.innerHTML = "";
                    t_d.disabled = false;
                    restart.disabled = true;
                })
                t_d.disabled = true;
            }
            
        })

    }
    
}

let game = new Gamme_truth_dare();
game.play();