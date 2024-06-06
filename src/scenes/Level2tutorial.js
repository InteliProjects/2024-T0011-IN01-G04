class Level2tutorial extends Phaser.Scene {
    constructor (){
        super({ key: 'Level2tutorial'});
        this.cameraLocked = false;
        
    };

    preload () {

        this.load.image ('fundo1', './assets/MonitorPC.png')
        this.load.image ('botaoSeta', './assets/botaoSeta.png');
        this.load.image ('botaoFinalizar', './assets/botaotexto1.png');
        this.load.image ('certo', './assets/certo.png');
        this.load.image('popupTutorial2', './assets/popupTutorial2.png');
        this.load.image ('errado','./assets/errado.png');
        this.load.image('monitorTutorialFase2', './assets/tutorialMonitorFase2.png');

    };

    create () {

        this.telaPC = this.add.image(0, 0, 'fundo1').setOrigin(0)
        this.popup2 = this.add.image (512,355, 'popupTutorial2').setAlpha(0).setOrigin(0.5, -0.1);
        this.botaoPopup = this.add.image ( 921, 550, 'botaoSeta').setInteractive().setAlpha(0).setScale(1.5);
        this.tutorial = this.add.image (0,0, 'monitorTutorialFase2').setOrigin(0).setAlpha(0);
        this.botaoTutorial = this.add.image(921, 550, 'botaoFinalizar').setInteractive().setAlpha(0).setScale(1.5);


        //animação para tornar visível o pop-up e o botão
        this.tweens.add ({
            targets: [this.popup2, this.botaoPopup],
            alpha: 1, 
            duration: 500, 
            ease: 'Linear',  
        });

        //animação para o botão ficar piscando
        this.tweens.add({
            targets: this.botaoPopup,
            scaleX: this.botaoPopup.scaleX * 1.1, // Aumenta a escala em 15%
            scaleY: this.botaoPopup.scaleY * 1.1,
            duration: 500, // duração em milissegundos
            yoyo: true, // faça a animação voltar ao estado original
            repeat: -1 // -1 para repetir indefinidamente
        });

        
            //Comandos que irão ser executados quando o botaoPopup for acionado
            this.botaoPopup.on('pointerdown', () => { 

                //animação para tornar invisível o pop-up e o botão
                this.tweens.add ({
                    targets: [this.popup2, this.botaoPopup],
                    alpha: 0, 
                    duration: 500, 
                    ease: 'Linear',  

                    // Comando estabelecendo outra ordem de comandos quando o anterior for concluído
                    onComplete: () => {

                        this.tweens.add ({
                            targets: [this.tutorial, this.botaoTutorial],
                            alpha: 1, 
                            duration: 500, 
                            ease: 'Linear'
                        })

                        //animação para o botão ficar piscando
                        this.tweens.add({
                            targets: this.botaoTutorial,
                            scaleX: this.botaoTutorial.scaleX * 1.1, // Aumenta a escala em 15%
                            scaleY: this.botaoTutorial.scaleY * 1.1,
                            duration: 500, // duração em milissegundos
                            yoyo: true, // faça a animação voltar ao estado original
                            repeat: -1 // -1 para repetir indefinidamente
                        });


                    }
                })
                this.input.setDefaultCursor("default");
            })

            this.botaoPopup.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.botaoPopup.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })

            this.botaoTutorial.on('pointerdown', () => {
                gameState.jaEntrouFase2 = true;
                this.scene.start ('Level2');
                this.input.setDefaultCursor("default");
            })

            this.botaoTutorial.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.botaoTutorial.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })


  




                // this.tweens.add({
                //         targets: [text5, botao3],
                //         alpha: 1,
                //         duration: 500, // Duração do tween em milissegundos
                //         ease: 'Linear'
                //     })


                    

                    // tela.setAlpha(0.2);

                    // certo = this.add.image(600, 300, 'certo').setScale(0.7)
                    // certo.setAlpha (0)

                    // errado = this.add.image(600, 300, 'errado')
                    // errado.setAlpha (0)

                    // text3 = this.add.text( 1020, 530, 
                    //     ` Entendi! `, 
                    //     {
                    //         fontFamily: 'Oracle Sans',
                    //         fontSize: 35,
                    //         color: '#FFFFFF',
                    //         align: 'center',
                    //          wordWrap: { width: this.cameras.main.width * 0.8 },
                           
                    //     }
                    // ).setAlpha(0);

                    // this.tweens.add({
                    //     targets: [certo, text3, botaopassar],
                    //     alpha: 1, // Destino do alpha (totalmente invisível)
                    //     duration: 500, // Duração do tween em milissegundos
                    //     ease: 'Linear', 
    
    };

    update () {

    };
}

 var tela
 var certo
 var errado
 var caixa
 var text3
 var botaoPassar
 var botaoPassar2
 var text4
 var text5
