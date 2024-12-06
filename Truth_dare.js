class Gamme_truth_dare{
    
    constructor(){
        this.truth = []
        this.dare  = []

        this.ch = document.getElementById('choice');
        this.choices = {
            1: "Truth",
            2: "Dare"
        }
        this.our_game = null
        this.players= []
        this.n_game_for_you = 1;
    }

    choice(){
        let index = Math.floor(Math.random() * 2 +1)
        console.log(index);
        
        return this.choices[index]
    }
    generatePlayers(){
        let index = Math.floor(Math.random() * (this.players.length))
        console.log('Generating players',' ', index);
        
        return this.players[index]
    }

    srart(){
        let btn_start = document.getElementById('btn-start');
        let player = document.getElementsByClassName('name_payer')
        const suggestion = document.querySelector('.suggestion-box');
        
        btn_start.addEventListener('click', ()=>{
            suggestion.style.visibility = 'visible';
            btn_start.disabled = true;
            const player_name = this.generatePlayers();
            player[0].textContent = `Hello ${player_name}`
            player[1].textContent = `${player_name}`
        })
    }

    generate(game){
        let index = Math.floor(Math.random() * game.length)
        console.log('ito no izy',index);

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

    take_action(){
        const btn_take_Action = document.querySelector('.action-btn');
        
        
        btn_take_Action.addEventListener('click', () =>{
            // get number :
            const n_game = document.getElementById("n_game")
            this.n_game_for_you = Math.floor(Math.random() * 3)+1;
            n_game.textContent = this.n_game_for_you
            btn_take_Action.disabled=true;
            this.ch.textContent = this.choice()
            if (this.ch.textContent === 'Truth'){
                this.our_game =this.truth
            }else{
                this.our_game = this.dare
            }
            
        });
        
        console.log('take_action');
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
        this.players = [
            "John",
            "Jean",
            "Robert",
            "Michael",
            "David",
            "Sophia",
            "Emma",
            "Olivia"
        ]
        const choice = document.getElementById("choice")
        const name_player = document.getElementById("name_player")
        // const n_game = document.getElementById("n_game")

        const t_d = document.getElementById("t_d")
        const resultat = document.getElementById("resultat")
        const restart = document.getElementById("restart")
        const truth_dare = [
            this.truth,
            this.dare,
        ]

        restart.disabled = true
        // let n_game_for_you = Math.floor(Math.random() * 4)
        let count = 1;
        
        t_d.addEventListener('click', () =>{
            let rand = this.generate(this.our_game)
            // console.log(this.our_game);
            
            // resultat.innerHTML = `Game : Truth <br>  ${rand}`
            this.printTextWithDelay(resultat,rand,100)
            restart.disabled = true
            count++;
            if(count>this.n_game_for_you){
                restart.disabled = false
                t_d.disabled = true;
                restart.addEventListener('click',()=>{
                    count = 1;
                    resultat.innerHTML = "";
                    t_d.disabled = false;
                    restart.disabled = true;
                    location.reload();
                })
            }
            
        })

    }
    
}

let game = new Gamme_truth_dare();
game.srart()
game.take_action()
game.play();
// game.generatePlayers();