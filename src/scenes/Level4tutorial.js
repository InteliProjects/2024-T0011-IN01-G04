class Level4tutorial extends Phaser.Scene {
    constructor (){
        super({ key: 'Level4tutorial'});
        this.cameraLocked = false;
        this.currentTutorial = 1;
    };

    preload() {

        this.load.image('telaComFundo', './assets/computadorsemfundo.png');
        this.load.image ('botaoCheck', './assets/botaotexto1.png');
        this.load.image ('botaoSeta', './assets/botaoSeta.png');
        this.load.image('TutorialCloud1', './assets/TutorialCloud1.png');
        this.load.image('TutorialCloud2', './assets/TutorialCloud2.png');
        this.load.image('TutorialCloud3', './assets/TutorialCloud3.png');
        this.load.image('TutorialCloud4', './assets/TutorialCloud4.png');
        this.load.image('TutorialCloud5', './assets/TutorialCloud5.png');
        

    }

    create(){

        // adicionando os assets e suas configirações no jogo 
        this.telaPC = this.add.image(0, 0, 'telaComFundo').setOrigin(0)
        
        this.botaoSeta = this.add.image (850, 550, 'botaoSeta').setInteractive().setAlpha(1).setScale(1.5)

        this.botaoCheck = this.add.image (850, 550, 'botaoCheck').setInteractive().setAlpha(0).setScale(1.5)

        this.TutorialCloud1 = this.add.image(150, 100, 'TutorialCloud1').setOrigin(0).setAlpha(1).setScale(0.955)
        this.TutorialCloud2 = this.add.image(150, 100, 'TutorialCloud2').setOrigin(0).setAlpha(0).setScale(0.955)
        this.TutorialCloud3 = this.add.image(150, 100, 'TutorialCloud3').setOrigin(0).setAlpha(0).setScale(0.955)
        this.TutorialCloud4 = this.add.image(150, 100, 'TutorialCloud4').setOrigin(0).setAlpha(0).setScale(0.955)
        this.TutorialCloud5 = this.add.image(150, 100, 'TutorialCloud5').setOrigin(0).setAlpha(0).setScale(0.955)



        this.tweens.add({
            targets: [this.botaoSeta],
            alpha: 1,
            scaleX: this.botaoSeta.scaleX * 1.1, 
            scaleY: this.botaoSeta.scaleY * 1.1,
            duration: 500, // duração em milissegundos
            yoyo: true, // faça a animação voltar ao estado original
            repeat: -1 // -1 para repetir indefinidamente
        }); 

        


        this.botaoSeta.on('pointerdown', () => {
            if (this.currentTutorial <= 4) { // Verifica se ainda há tutoriais para mostrar
                this.hideCurrentTutorial();
                if (this.currentTutorial === 4) {
                    // No quarto clique, esconde botaoSeta e mostra botaoCheck
                    this.botaoSeta.destroy();
                    this.botaoCheck.setAlpha(1);
                    this.tweens.add({
                        targets: [this.botaoCheck],
                        alpha: 1,
                        scaleX: this.botaoSeta.scaleX * 1.1, 
                        scaleY: this.botaoSeta.scaleY * 1.1,
                        duration: 500, // duração em milissegundos
                        yoyo: true, // faça a animação voltar ao estado original
                        repeat: -1 // -1 para repetir indefinidamente
                    });  // Faz o botaoCheck visível e interativo
                }
                this.currentTutorial++; // Avança para o próximo tutorial
                this.showNextTutorial();
            }
            this.input.setDefaultCursor("default"); 


        });
        this.botaoSeta.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botaoSeta.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });



        this.botaoCheck.on('pointerdown', () => {
            this.scene.start('Level4');
            gameState.jaEntrouFase4 = true;
            this.input.setDefaultCursor("default");
        });

        this.botaoCheck.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botaoCheck.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });

        

   

                


    }
    hideCurrentTutorial() {
        // Esconde o tutorial atual
        this.tweens.add ({  
            targets: [this[`TutorialCloud${this.currentTutorial}`]],
            alpha: 0, 
            duration: 500, 
            ease: 'Linear',  
        });
    }

    showNextTutorial() {
        // Mostra o próximo tutorial
        this.tweens.add ({  
            targets: [this[`TutorialCloud${this.currentTutorial}`]],
            alpha: 1, 
            duration: 500, 
            ease: 'Linear',  
        });
    }

    update(){


 
    }

}


