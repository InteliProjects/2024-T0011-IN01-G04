class Mapa extends Phaser.Scene {
    constructor() {
        super({ key:'Mapa'});
    }

    preload() {
        // Preload de assets
        this.load.image('mapaBG', './assets/RedwoodCity.png');
        this.load.image('predio1', './assets/predio-cadastro.png')
        this.load.image('predio2', './assets/predio2.png')
        this.load.image('predio3', './assets/predio-canais.png')
        this.load.image('predio4', './assets/predio-cloud.png')
        this.load.image('predio5', './assets/predio-suporte.png')
        this.load.image('carroCinza', './assets/carro-cinza-cima.png',);
        this.load.image('lockedPredio2', './assets/lockedPredio2.png');
        this.load.image('lockedPredio3', './assets/lockedPredio3.png');
        this.load.image('lockedPredio4', './assets/lockedPredio4.png');
        this.load.image('lockedPredio5', './assets/lockedPredio5.png');
        this.load.image('popupConcluiuFase1', './assets/popupConcluiuFase1.png');
        this.load.image('popupConcluiuFase2', './assets/popupConcluiuFase2.png');
        this.load.image('popupConcluiuFase3', './assets/popupConcluiuFase3.png');
        this.load.image('popupConcluiuFase4', './assets/popupConcluiuFase4.png');
        this.load.image('popupConcluiuFase5', './assets/popupConcluiuFase5.png');
        this.load.spritesheet('barraProgresso', './assets/barraProgresso.png', {frameWidth: 400, frameHeight: 60});
        this.load.spritesheet('carroVermelho', './assets/carroVermelho.png', { frameWidth: 48, frameHeight: 32 });
    }
    
    

    create() {

        // Adicionar background
        const background = this.add.image(0, 0, 'mapaBG').setOrigin(0);
        
        const barraProgresso = this.add.sprite(1825, 60, 'barraProgresso').setFrame(0).setScale(0.75);

        // Ajusta a escala do background para preencher a tela
        this.cameras.main.setBounds(1024, 0, 2048, 640);
        
        const predio1 = this.add.image( 1152, 295.2, 'predio1').setInteractive().setScale(0.85);

        const lockedPredio2 = this.add.image(1256.1, 216.3, 'lockedPredio2').setScale(0.992).setDepth(1);
        const lockedPredio3 = this.add.image(1487.7, 159.5, 'lockedPredio3').setScale(0.999).setDepth(1);
        const lockedPredio4 = this.add.image(1752, 215.5, 'lockedPredio4').setScale(0.999).setDepth(1);
        const lockedPredio5 = this.add.image(1903.9, 239.4,  'lockedPredio5').setScale(1).setDepth(1);

        this.carroVermelho = this.add.sprite(1150, 440, 'carroVermelho').setScale(1.2);
        this.carroVermelho.setFrame(1);

        if (!gameState.jaConcluiuFase1) {

            lockedPredio2.setVisible(true);
            lockedPredio3.setVisible(true);
            lockedPredio4.setVisible(true);
            lockedPredio5.setVisible(true);

            predio1.on('pointerdown', () => {

            this.scene.stop('Mapa');
            this.scene.start('Level1');
            this.input.setDefaultCursor("default")
        });
            predio1.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
            predio1.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        this.tweens.add({
            targets: predio1,
            scaleX: predio1.scaleX * 1.06, // Aumenta a escala em 15%
            scaleY: predio1.scaleY * 1.06,
            duration: 500, // duração em milissegundos
            yoyo: true, // faça a animação voltar ao estado original
            repeat: -1, // -1 para repetir indefinidamente
            
        });

        }
        
        const predio2 = this.add.image(1256.1, 216.3, 'predio2').setInteractive().setScale(0.992);


        if(gameState.jaConcluiuFase1) {

            lockedPredio2.setVisible(false);
            lockedPredio3.setVisible(true);
            lockedPredio4.setVisible(true);
            lockedPredio5.setVisible(true);

            barraProgresso.setFrame(1);

        

            if (gameState.jaConcluiuFase1 && !gameState.jaConcluiuFase2 && !gameState.jaConcluiuFase3 && !gameState.jaConcluiuFase4 && !gameState.jaConcluiuFase5) {
                
                predio2.on('pointerdown', () => {
                    this.scene.stop('Mapa');
                    this.scene.start('Level2')
                    this.input.setDefaultCursor("default")
                });
                predio2.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                predio2.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })

                this.time.delayedCall(1500, () => {

                    const panelConcluiuFase1 = this.add.image(1536, 355, 'popupConcluiuFase1').setOrigin(0.5, -0.1);
                    panelConcluiuFase1.setAlpha(0);
                    // tweens para fazer o fade in do painel e do texto
                    this.tweens.add({
                        targets: [panelConcluiuFase1],
                        alpha: 0.9, // Destino do alpha (totalmente visível)
                        duration: 1000, // Duração do tween em milissegundos
                        ease: 'Linear', // Tipo de easing (linear para um fade linear)
                        delay: 0, // Atraso antes do tween começar
                     });

                    this.tweens.add({
                        targets: predio2,
                        scaleX: predio2.scaleX * 1.06, // Aumenta a escala em 15%
                        scaleY: predio2.scaleY * 1.06,
                        duration: 500, // duração em milissegundos
                        yoyo: true, // faça a animação voltar ao estado original
                        repeat: -1, // -1 para repetir indefinidamente
                    });
                })  
            }
             
        }
        const predio3 = this.add.image(1487.7, 159.5, 'predio3').setInteractive().setScale(0.999);
        
        if(gameState.jaConcluiuFase2) {

            lockedPredio2.setVisible(false);
            lockedPredio3.setVisible(false);
            lockedPredio4.setVisible(true);
            lockedPredio5.setVisible(true);

            barraProgresso.setFrame(2);

            if (gameState.jaConcluiuFase1 && gameState.jaConcluiuFase2 && !gameState.jaConcluiuFase3 && !gameState.jaConcluiuFase4 && !gameState.jaConcluiuFase5) {
                predio3.on('pointerdown', () => {
                    this.scene.start('Level3')
                    this.input.setDefaultCursor("default")
                })
                predio3.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                predio3.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                this.time.delayedCall(1500, () => {
                    const panelConcluiuFase2 = this.add.image(1536, 355, 'popupConcluiuFase2').setOrigin(0.5, -0.1);
                    panelConcluiuFase2.setAlpha(0);
                    // tweens para fazer o fade in do painel e do texto
                    this.tweens.add({
                        targets: [panelConcluiuFase2],
                        alpha: 0.9, // Destino do alpha (totalmente visível)
                        duration: 1000, // Duração do tween em milissegundos
                        ease: 'Linear', // Tipo de easing (linear para um fade linear)
                        delay: 0, // Atraso antes do tween começar
                    });

                    this.tweens.add({
                        targets: predio3,
                        scaleX: predio3.scaleX * 1.06, // Aumenta a escala em 15%
                        scaleY: predio3.scaleY * 1.06,
                        duration: 500, // duração em milissegundos
                        yoyo: true, // faça a animação voltar ao estado original
                        repeat: -1, // -1 para repetir indefinidamente
                    });
                })  
            }

           
        }

        const predio4 = this.add.image( 1752, 215.5, 'predio4').setInteractive().setScale(0.999);
       
        if(gameState.jaConcluiuFase3) {

            lockedPredio2.setVisible(false);
            lockedPredio3.setVisible(false);
            lockedPredio4.setVisible(false);
            lockedPredio5.setVisible(true);


            barraProgresso.setFrame(3);

            if (gameState.jaConcluiuFase1 && gameState.jaConcluiuFase2 && gameState.jaConcluiuFase3 && !gameState.jaConcluiuFase4 && !gameState.jaConcluiuFase5) {
                
                predio4.on('pointerdown', () => {
                    this.scene.start('Level4')
                    this.input.setDefaultCursor("default")
                })
                predio4.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                predio4.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                this.time.delayedCall(1500, () => {
                    const panelConcluiuFase3 = this.add.image(1536, 355, 'popupConcluiuFase3').setOrigin(0.5, -0.1);
                    panelConcluiuFase3.setAlpha(0);
                    // tweens para fazer o fade in do painel e do texto
                    this.tweens.add({
                        targets: [panelConcluiuFase3],
                        alpha: 0.9, // Destino do alpha (totalmente visível)
                        duration: 1000, // Duração do tween em milissegundos
                        ease: 'Linear', // Tipo de easing (linear para um fade linear)
                        delay: 0, // Atraso antes do tween começar
                     });
                    this.tweens.add({
                        targets: predio4,
                        scaleX: predio4.scaleX * 1.06, // Aumenta a escala em 15%
                        scaleY: predio4.scaleY * 1.06,
                        duration: 500, // duração em milissegundos
                        yoyo: true, // faça a animação voltar ao estado original
                        repeat: -1, // -1 para repetir indefinidamente
                    });
                })  
            }

            
        }

     

        const predio5 = this.add.image(1903.9, 239.4,  'predio5').setInteractive().setScale(1);
        
        if(gameState.jaConcluiuFase4) {

            lockedPredio2.setVisible(false);
            lockedPredio3.setVisible(false);
            lockedPredio4.setVisible(false);
            lockedPredio5.setVisible(false);
            

            barraProgresso.setFrame(4);

            if (gameState.jaConcluiuFase1 && gameState.jaConcluiuFase2 && gameState.jaConcluiuFase3 && gameState.jaConcluiuFase4 && !gameState.jaConcluiuFase5) {
                predio5.on('pointerdown', () => {
                    this.scene.start('Level5')
                    this.input.setDefaultCursor("default")
                })
                predio5.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                predio5.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })    
                
                this.time.delayedCall(1500, () => {
                    const panelConcluiuFase4 = this.add.image(1536, 355, 'popupConcluiuFase4').setOrigin(0.5, -0.1);
                    panelConcluiuFase4.setAlpha(0);
                    // tweens para fazer o fade in do painel e do texto
                    this.tweens.add({
                        targets: [panelConcluiuFase4],
                        alpha: 0.9, // Destino do alpha (totalmente visível)
                        duration: 1000, // Duração do tween em milissegundos
                        ease: 'Linear', // Tipo de easing (linear para um fade linear)
                        delay: 0, // Atraso antes do tween começar
                    });
                    this.tweens.add({
                        targets: predio5,
                        scaleX: predio5.scaleX * 1.06, // Aumenta a escala em 15%
                        scaleY: predio5.scaleY * 1.06,
                        duration: 500, // duração em milissegundos
                        yoyo: true, // faça a animação voltar ao estado original
                        repeat: -1, // -1 para repetir indefinidamente
                    });
                })  
            }

           
        }

        if(gameState.jaConcluiuFase5) {
            barraProgresso.setFrame(5);

            if (gameState.jaConcluiuFase1 && gameState.jaConcluiuFase2 && gameState.jaConcluiuFase3 && gameState.jaConcluiuFase4 && gameState.jaConcluiuFase5) {
                this.time.delayedCall(1500, () => {
                    const panelConcluiuFase5 = this.add.image(1536, 50, 'popupConcluiuFase5').setOrigin(0.5, 0);
                    panelConcluiuFase5.setAlpha(0);
                    // tweens para fazer o fade in do painel e do texto
                    this.tweens.add({
                    targets: [panelConcluiuFase5],
                    alpha: 0.9, // Destino do alpha (totalmente visível)
                    duration: 1000, // Duração do tween em milissegundos
                    ease: 'Linear', // Tipo de easing (linear para um fade linear)
                    delay: 0, // Atraso antes do tween começar
                
                     });
                })  
            }
        }
    }
}
