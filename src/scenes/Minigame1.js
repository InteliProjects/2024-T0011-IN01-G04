class Minigame1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Minigame1' });  
    }

    preload() {

        this.load.image ('cards', './assets/CardsQuadro.png');
        this.load.image ('botaocadastro', './assets/botao_cadastro.png');
        this.load.image ('botaocadastro1', './assets/botao_cadastro1.png');
        this.load.image ('botaocadastro2', './assets/botao_cadastro1.png');
        this.load.image ('parabens', './assets/parabensCards.png');
        this.load.image ('errouCard1', './assets/errouCard1.png');
        this.load.image ('errouCard3', './assets/errouCard3.png');
        this.load.image ('voltar', './assets/botaovoltar.png');
        this.load.image ('voltar1', './assets/botaovoltar1.png');
        this.load.image ('textomg1', './assets/textomg1.png');
        this.load.image ('botaoconcluir', './assets/botaoconcluir.png');
        

    }

    create() {

        cards = this.add.image (0,0, 'cards').setOrigin(0,0).setAlpha (0.3);

        botaoCadastro = this.add.image(216, 543, 'botaocadastro').setScale(0.6).setAlpha(0.3).setInteractive();

        botaoCadastro1 = this.add.image(512, 543, 'botaocadastro1').setScale(0.6).setAlpha(0.3).setInteractive();

        botaoCadastro2 = this.add.image(808, 543, 'botaocadastro2').setScale(0.6).setAlpha(0.3).setInteractive();

        popup1 = this.add.image (512, 355, 'textomg1').setAlpha(0).setOrigin(0.5, -0.1);

        const botaoConcluir = this.add.image (921, 550, 'botaoconcluir').setScale(1.5).setAlpha(0).setInteractive();
            
        this.tweens.add({
            targets: [popup1, botaoConcluir],
            alpha: 1, 
            duration: 250, 
            ease: 'Linear',


            onComplete: () => { 
                this.tweens.add({ 
                targets: [botaoConcluir],
                scaleX: botaoConcluir.scaleX * 1.1, 
                scaleY: botaoConcluir.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
                })
            }
        });


        botaoConcluir.on('pointerdown', () => {

            this.tweens.add({
                targets: [popup1, botaoConcluir],
                alpha: 0, 
                duration: 250, 
                ease: 'Linear',

                onComplete: () => { 
                    this.tweens.add ({
                        targets: [cards, botaoCadastro, botaoCadastro1, botaoCadastro2],
                        alpha: 1, 
                        duration: 250, 
                        ease: 'Linear', 
                    });
                }
            });  
            
        });

        botaoConcluir.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        botaoConcluir.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })
        
        botaoCadastro1.on('pointerdown', () => { 
            
            this.tweens.add ({
                targets: [cards],
                alpha: 0.3, 
                duration: 250, 
                ease: 'Linear', 
            });
            this.tweens.add({
                targets: [botaoCadastro, botaoCadastro1, botaoCadastro2],
                alpha: 0, // Destino do alpha (totalmente visível)
                duration: 250, // Duração do tween em milissegundos
                ease: 'Linear', // Tipo de easing (linear para um fade linear)
                delay: 0, // Atraso antes do tween começar
            });
            parabens = this.add.image( 512, 320, 'parabens').setAlpha(0);
            this.botaoMapa = this.add.image( 755, 450, 'botaoconcluir').setInteractive().setScale(1.5).setAlpha(0);
            this.tweens.add ({
                targets: [parabens, this.botaoMapa],
                alpha: 1, 
                duration: 250, 
                ease: 'Linear', 
            });  

            this.tweens.add({
                targets: [this.botaoMapa],
                scaleX: this.botaoMapa.scaleX * 1.1, 
                scaleY: this.botaoMapa.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            });

            this.botaoMapa.on('pointerdown', () => {


                this.tweens.add({
                    targets: [this.parabensPalavras, this.botaoMapa],
                    alpha: 0,
                    duration: 250,
                    ease: 'Linear',
                    onComplete: () => { 
                            this.scene.start ('Mapa')
                            this.scene.stop ('Minigame1')
                            this.scene.stop ('Level1')
                            gameState.jaConcluiuFase1 = true;
                    }
                })
                    
            })

            this.botaoMapa.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.botaoMapa.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })
        })

        botaoCadastro1.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        botaoCadastro1.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        botaoCadastro.on('pointerdown', () => { 
            
            error = this.add.image( 512, 320, 'errouCard1').setAlpha(0);
            botaoVoltar2 = this.add.image (900,460, 'voltar1').setAlpha(0).setInteractive().setScale(1.5)

            this.tweens.add ({
                targets: [error, botaoVoltar2],
                alpha: 1, 
                duration: 250, 
                ease: 'Linear', 

                onComplete: () => { 

                    botaoVoltar2.on ('pointerdown', () => {
                        this.tweens.add ({
                            targets: [error, botaoVoltar2],
                            alpha: 0, 
                            duration: 250, 
                            ease: 'Linear',
                        })
                        this.tweens.add({
                            targets: [botaoCadastro, botaoCadastro1, botaoCadastro2],
                            alpha: 1, // Destino do alpha (totalmente visível)
                            duration: 250, // Duração do tween em milissegundos
                            ease: 'Linear', // Tipo de easing (linear para um fade linear)
                            delay: 0, // Atraso antes do tween começar
                        });
                     })

                    botaoVoltar2.on('pointerover', () => {
                        this.input.setDefaultCursor("pointer");
                    })
                    botaoVoltar2.on('pointerout', () => {
                        this.input.setDefaultCursor("default");
                    })
                }

            });        

            this.tweens.add({
                targets: [botaoVoltar2],
                scaleX: botaoVoltar2.scaleX * 1.1, 
                scaleY: botaoVoltar2.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            });

            this.tweens.add({
                targets: [botaoCadastro, botaoCadastro1, botaoCadastro2],
                alpha: 0, // Destino do alpha (totalmente visível)
                duration: 250, // Duração do tween em milissegundos
                ease: 'Linear', // Tipo de easing (linear para um fade linear)
                delay: 0, // Atraso antes do tween começar
            });
        });

        botaoCadastro.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        botaoCadastro.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        botaoCadastro2.on('pointerdown', () => { 
            
            error = this.add.image( 512, 320, 'errouCard3').setAlpha(0);
            botaoVoltar1 = this.add.image( 615, 460, 'voltar').setScale(1.5).setAlpha(0).setInteractive();

            this.tweens.add ({
                targets: [error, botaoVoltar1],
                alpha: 1, 
                duration: 250, 
                ease: 'Linear', 

                onComplete: () => { 

                    botaoVoltar1.on ('pointerdown', () => {
                        this.tweens.add ({
                            targets: [error, botaoVoltar1],
                            alpha: 0, 
                            duration: 250, 
                            ease: 'Linear',
                        })
                        this.tweens.add({
                            targets: [botaoCadastro, botaoCadastro1, botaoCadastro2],
                            alpha: 1, // Destino do alpha (totalmente visível)
                            duration: 250, // Duração do tween em milissegundos
                            ease: 'Linear', // Tipo de easing (linear para um fade linear)
                            delay: 0, // Atraso antes do tween começar
                        });
                     })
                    botaoVoltar1.on('pointerover', () => {
                        this.input.setDefaultCursor("pointer");
                    })
                    botaoVoltar1.on('pointerout', () => {
                        this.input.setDefaultCursor("default");
                    })
                }

               
            });  

            this.tweens.add({
                targets: [botaoVoltar1],
                scaleX: botaoVoltar1.scaleX * 1.1, 
                scaleY: botaoVoltar1.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            });

            this.tweens.add({
                targets: [botaoCadastro, botaoCadastro1, botaoCadastro2],
                alpha: 0, // Destino do alpha (totalmente visível)
                duration: 250, // Duração do tween em milissegundos
                ease: 'Linear', // Tipo de easing (linear para um fade linear)
                delay: 0, // Atraso antes do tween começar
            });
        });

        botaoCadastro2.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        botaoCadastro2.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })


    }

    update () {

    }
}

var cards
var inicio
var instrução1
var text
var text2
var text3
var botaoCadastro
var botaoCadastro1
var botaoCadastro2
var parabens
var error
var botaoVoltar1
var botaoVoltar2
var popup1
    

