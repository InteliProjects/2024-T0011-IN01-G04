class Onboarding extends Phaser.Scene {
    constructor() {
        super({ key:'Onboarding'});
    }

    preload() {
        // Preload de assets
        this.load.image('mapaBG', './assets/RedwoodCity.png');
        this.load.image('button','./assets/botaotexto1.png' )
        this.load.image('mapapopup', './assets/mapaPopup.png')
        this.load.image('predio1', './assets/predio-cadastro.png')
        this.load.image('predio2', './assets/predio2.png')
        this.load.image('predio3', './assets/predio-canais.png')
        this.load.image('predio4', './assets/predio-cloud.png')
        this.load.image('predio5', './assets/predio-suporte.png')
        this.load.image('lockedPredio2', './assets/lockedPredio2.png');
        this.load.image('lockedPredio3', './assets/lockedPredio3.png');
        this.load.image('lockedPredio4', './assets/lockedPredio4.png');
        this.load.image('lockedPredio5', './assets/lockedPredio5.png');
        this.load.image('carroCinza', './assets/carro-cinza-cima.png',);
        this.load.image ('popupMapa2','./assets/popupMapa2.png');
        this.load.image ('popupMapa3','./assets/popupMapa3.png');
        this.load.image ('popupMapa4', './assets/popupMapa4.png');
        this.load.image ('popupMapa5', './assets/popupMapa5.png');
        this.load.audio('popupAppear', './assets/sounds/popupAppearFX.mp3');
        this.load.audio('popupDismiss', './assets/sounds/popupDismissFX.mp3');
        this.load.spritesheet('carroVermelho', './assets/carroVermelho.png', { frameWidth: 48, frameHeight: 32 });
        this.load.spritesheet('barraProgresso', './assets/barraProgresso.png', {frameWidth: 400, frameHeight: 60});


    }
    
    

    create() {

        // Adicionar background
        const background = this.add.image(0, 0, 'mapaBG').setOrigin(0);
        // Ajusta a escala do background para preencher a tela
        this.cameras.main.setBounds(1024, 0, 2048, 640);
        
        const barraProgresso = this.add.sprite(1825, 60, 'barraProgresso').setFrame(0).setScale(0.75);

        this.lockedPredio2 = this.add.image(1256.1, 216.3, 'lockedPredio2').setScale(0.992).setDepth(1);
        this.lockedPredio3 = this.add.image(1487.7, 159.5, 'lockedPredio3').setScale(0.999).setDepth(1);
        this.lockedPredio4 = this.add.image(1752, 215.5, 'lockedPredio4').setScale(0.999).setDepth(1);
        this.lockedPredio5 = this.add.image(1903.9, 239.4,  'lockedPredio5').setScale(1).setDepth(1);

        this.carroVermelho = this.add.sprite(1150, 440, 'carroVermelho').setScale(1.2);
        this.carroVermelho.setFrame(1);
        
        const predio1 = this.add.image( 1152, 295.2, 'predio1').setInteractive().setScale(0.85);
        predio1.on('pointerdown', () => {
            this.scene.start('Level1');
            this.input.setDefaultCursor("default")
        });
        predio1.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        predio1.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        

        const predio2 = this.add.image(1256.1, 216.3, 'predio2').setInteractive().setScale(0.992);

        if (gameState.jaEntrouFase1){
            predio2.on('pointerdown', () => {
                this.scene.start('Level2')
                this.input.setDefaultCursor("default")
            });
            predio2.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
             predio2.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })
        }
        const predio3 = this.add.image(1487.7, 159.5, 'predio3').setInteractive().setScale(0.999);
        if (gameState.jaEntrouFase2){
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
        }
        const predio4 = this.add.image( 1752, 215.5, 'predio4').setInteractive().setScale(0.999);
        if (gameState.jaEntroufase3){
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
    }

        const predio5 = this.add.image(1903.9, 239.4,  'predio5').setInteractive().setScale(1);
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

        

        // Array com as posições x e y dos retângulos
        // const positions = [
        //     { x: 95, y: 190.2 },
        //     { x: 242, y: 103 },
        //     { x: 500, y: 35.3 },
        //     { x: 375, y: 35.3 },
        //     { x: 580, y: 35.3 },
        //     { x: 700, y: 35.3 },
        //     { x: 1090, y: 158.7 },
        //     { x: 890, y: 101.8 }
        // ];

        // // Loop para criar os retângulos com base nas posições
        // positions.forEach((position, index) => {
        //     const rectangle = this.add.rectangle(position.x, position.y, 150, 250, 0xFFFFFF).setInteractive();
        //     rectangle.setFillStyle(0xFFFFFF, 0);
        //     rectangle.on('pointerdown', () => {
        //         // Transição para uma scene diferente em cada retângulo
        //         switch (index) {
        //             case 0:
        //                 this.scene.start('Scene1');
        //                 break;
        //             case 1:
        //                 this.scene.start('Scene2');
        //                 break;
        //             case 2:
        //                 this.scene.start('Scene3');
        //                 break;
        //             case 3:
        //                 this.scene.start('Scene3');
        //                 break;
        //             case 4:
        //                 this.scene.start('Scene3');
        //                 break;
        //             case 5:
        //                 this.scene.start('Scene3');
        //                 break;
        //             case 6:
        //                 this.scene.start('Scene4');
        //                 break;
        //             case 7:
        //                 this.scene.start('Scene5');
        //                 break;
        //         }
        //     });
        // });

        // Add squares
        // const squareSize = 100;
        // const squareSpacing = 20;
        // const topRowY = this.cameras.main.centerY - squareSize - squareSpacing;
        // const bottomRowY = this.cameras.main.centerY + squareSpacing;
        // const squareColors = [0x0000ff, 0x0000ff, 0x0000ff, 0x0000ff, 0x0000ff];
        // const squares = squareColors.map((color, index) => {
        // const x = this.cameras.main.centerX - (squareSize + squareSpacing) * 2 + (squareSize + squareSpacing) * index;
        // const y = index < 3 ? topRowY : bottomRowY;
        // const square = this.add.rectangle(x, y, squareSize, squareSize, color).setInteractive();
        // square.on('pointerdown', () => {
        //     // Transition to a different scene when clicked
        //     switch (index) {
        //     case 0:
        //         this.scene.start('Scene1');
        //         break;
        //     case 1:
        //         this.scene.start('Scene2');
        //         break;
        //     case 2:
        //         this.scene.start('Scene3');
        //         break;
        //     case 3:
        //         this.scene.start('Scene4');
        //         break;
        //     case 4:
        //         this.scene.start('Scene5');
        //         break;
        //     }
        // });
        // return square;
        // });

        // // Fade in all elements
        // this.cameras.main.fadeIn(1000);
        // Adicione um retângulo transparente sobre toda a cena para bloquear interações
        


        if (!gameState.jaEntrouFase1) { 


            const blocker = this.add.rectangle(1024, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0);
            blocker.setOrigin(0);
             blocker.setInteractive(); // Torna o retângulo bloqueador interativo para capturar cliques
    
            
    
            // Add popup panel after 2 seconds
            this.time.delayedCall(1300, () => {
            const panel = this.add.image(1536, 355, 'mapapopup').setOrigin(0.5, -0.1);
    
                // Add text to the panel
    
            panel.setAlpha(0);

            // toca som de aparecer popup
            this.sound.play('popupAppear');

            // tweens para fazer o fade in do painel e do texto
            this.tweens.add({
            targets: [panel],
            alpha: 0.9, // Destino do alpha (totalmente visível)
            duration: 1000, // Duração do tween em milissegundos
            ease: 'Linear', // Tipo de easing (linear para um fade linear)
            delay: 0, // Atraso antes do tween começar
        
             });
            
    
            // Função para lidar com o clique no painel
            this.time.delayedCall(0, () => {
                const botaoTexto = this.add.sprite( 1945, 550, 'button').setInteractive().setScale(1.5);
    
                
                botaoTexto.setAlpha(0)
                
    
                this.tweens.add({
                    targets: [botaoTexto],
                    alpha: 1, // Destino do alpha (totalmente visível)
                    duration: 1000, // Duração do tween em milissegundos
                    ease: 'Linear', // Tipo de easing (linear para um fade linear)
                    delay: 0, // Atraso antes do tween começar
            
                });

                this.tweens.add({
                    targets: [botaoTexto],
                    scaleX: botaoTexto.scaleX * 1.1, 
                    scaleY: botaoTexto.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                }); 
    
                botaoTexto.on('pointerdown', () => {
        
                    // toca som de dispensar popup/confirmar
                    this.sound.play('popupDismiss');

                    // Adiciona tweens para fazer o painel e o texto desaparecerem
                    this.tweens.add({
                        targets: [panel, botaoTexto],
                        alpha: 0, // Destino do alpha (totalmente invisível)
                        duration: 1000, // Duração do tween em milissegundos
                        ease: 'Linear', // Tipo de easing (linear para um fade linear)
                        onComplete: () => {
                            // Após o desaparecimento, você pode remover os objetos ou fazer outras ações, se necessário
                            panel.destroy();
                            blocker.disableInteractive();
                            botaoTexto.destroy();
                            this.tweens.add({
                                targets: predio1,
                                scaleX: predio1.scaleX * 1.06, // Aumenta a escala em 15%
                                scaleY: predio1.scaleY * 1.06,
                                duration: 500, // duração em milissegundos
                                yoyo: true, // faça a animação voltar ao estado original
                                repeat: -1, // -1 para repetir indefinidamente
                                
                            });
                          
                    }
                    });
                    this.input.setDefaultCursor("default")
    
                    
    
    
        
                });
    
    
                botaoTexto.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                botaoTexto.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
            });

            });


        }        
    }
}





