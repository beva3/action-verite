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
    printTextWithDelay(element, text, delay = 10) {
        element.textContent = ""; // Clear the div
        let i = 0;

        const interval = setInterval(() => {
            element.textContent += text[i]; // Add one character at a time
            i++;
            if (i >= text.length) {
                clearInterval(interval); // Stop when all characters are printed
            }
        }, delay);
    }
    play(){
        this.truth = [
            "Tell the truth",
            "Be honest",
            "Share your thoughts and feelings",
            "Be true to yourself",
            "Be open to new ideas",
            "Say the truth even if it hurts",
            "Be honest about yourself",
            "Be honest about yourself",
            "Be honest about yourself"
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
        restart.disabled = true

        let n_person = 8
        let count = 1;
        
        t_d.addEventListener('click', () =>{
            let rand = this.generate(this.truth)
            // resultat.innerHTML = `Game : Truth <br>  ${rand}`
            this.printTextWithDelay(resultat,rand,100)
            restart.disabled = true
            count++;
            if(count>n_person){
                restart.disabled = false
                t_d.disabled = true;
                restart.addEventListener('click',()=>{
                    count = 1;
                    resultat.innerHTML = "";
                    t_d.disabled = false;
                    restart.disabled = true;
                   
                })
            }
            
        })

    }
    
}

let game = new Gamme_truth_dare();
game.play();