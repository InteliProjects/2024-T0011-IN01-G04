class Minigame3 extends Phaser.Scene {
    constructor() {
        super({key:'Minigame3'});
    }

    preload() {
        this.load.image('fundo2', './assets/miniGame3.png');
        this.load.image('card1', './assets/canaisCard1.png');
        this.load.image('card2', './assets/canaisCard2.png');
        this.load.image('card3', './assets/canaisCard3.png');
        this.load.image('destinoCanais', './assets/destinoCanais.png');
        this.load.image('errado2', './assets/canaisErrado.png');
        this.load.image('certo2', './assets/canaisCerto.png');
        this.load.image('canaisParabens', './assets/canaisParabens.png');
        this.load.image('button','./assets/botaotexto1.png');
        this.load.image('canaisPopup', './assets/popupMinigame3.png')
    }

    create() {
        this.fundo = this.add.image(0, 0, 'fundo2').setOrigin(0);

        this.canaisPopup = this.add.image(512, 355, 'canaisPopup').setOrigin(0.5, -0.1).setAlpha(0).setDepth(1);
        // destino dos cards que serão arrastados
        this.encaixarCard1 = this.add.image(510, 255, 'destinoCanais').setAlpha(0.2);
        this.encaixarCard2 = this.add.image(840, 255, 'destinoCanais').setAlpha(0.2);
        this.encaixarCard3 = this.add.image(190, 255, 'destinoCanais').setAlpha(0.2);

        // cards que serão arrastados
        this.card1 = this.add.image(510, 460, 'card1').setInteractive().setAlpha(1);
        this.card2 = this.add.image(840, 460, 'card2').setInteractive().setAlpha(1);
        this.card3 = this.add.image(190, 460, 'card3').setInteractive().setAlpha(1);

        // adicionando pop up de certo e errado
        this.errado = this.add.image(512, 320, 'errado2').setAlpha(0);
        this.certo = this.add.image (512, 320, 'certo2').setAlpha(0);

        // adicionando pop up de parabéns
        this.canaisParabens = this.add.image (512, 320, 'canaisParabens').setAlpha(0)
        this.botaoMapa = this.add.image( 750, 445, 'button').setInteractive().setScale(1.5).setAlpha(0);

        // Atribuindo identificadores aos cards
        this.card1.id = 1;
        this.card2.id = 2;
        this.card3.id = 3;

        // Variáveis para verificar se os blocos estão sobre as áreas corretas
        this.over1 = false;
        this.over2 = false;
        this.over3 = false;

        // configuração para arrastar cards
        this.input.setDraggable([this.card1, this.card2, this.card3]);

        // Referência ao objeto Minigame3 dentro dos eventos de entrada
        const self = this;

        this.tweens.add({
            targets: [this.canaisPopup],
            alpha: 1, // Destino do alpha (totalmente visível)
            duration: 250, // Duração do tween em milissegundos
            ease: 'Linear', // Tipo de easing (linear para um fade linear)
            delay: 0, // Atraso antes do tween começar
        });

        this.tweens.add({
            targets: [this.fundo, this.encaixarCard1, this.encaixarCard2, this.encaixarCard3, this.card1, this.card2, this.card3],
            alpha: 0.3,
            duration: 250,
            ease: 'Linear',
        })
        


        this.time.delayedCall(0, () => {
            this.botaoTexto = this.add.image( 921, 550, 'button').setInteractive().setScale(1.5).setDepth(1);
            
             
            this.botaoTexto.setAlpha(0)
             
            this.tweens.add({
                 targets: [this.botaoTexto],
                 alpha: 1, // Destino do alpha (totalmente visível)
                 duration: 1000, // Duração do tween em milissegundos
                 ease: 'Linear', // Tipo de easing (linear para um fade linear)
                 delay: 0, // Atraso antes do tween começar
            });
            
            this.tweens.add({
                targets: [this.botaoTexto],
                scaleX: this.botaoTexto.scaleX * 1.1, 
                scaleY: this.botaoTexto.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            });

            this.botaoTexto.on('pointerdown', () => {
     
 
                 // Adiciona tweens para fazer o painel e o texto desaparecerem
                 this.tweens.add({
                     targets: [this.canaisPopup, this.botaoTexto],
                     alpha: 0, // Destino do alpha (totalmente invisível)
                     duration: 250, // Duração do tween em milissegundos
                     ease: 'Linear', // Tipo de easing (linear para um fade linear)
                     
                     onComplete: () => {
                         // Após o desaparecimento, você pode remover os objetos ou fazer outras ações, se necessário
                         this.canaisPopup.destroy();
                         this.botaoTexto.destroy();
                         this.tweens.add({
                            targets: [this.fundo, this.encaixarCard1, this.encaixarCard2, this.encaixarCard3, this.card1, this.card2, this.card3],
                            alpha: 1,
                            duration: 250,
                            ease: 'Linear',
                        })
                    }
                     
                });
                this.input.setDefaultCursor("default")
            });
             
            this.botaoTexto.on('pointerover', () => {
                 this.input.setDefaultCursor("pointer");
            })
            this.botaoTexto.on('pointerout', () => {
                 this.input.setDefaultCursor("default");
            })
         });



        // Habilitando o drop zone
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // Verificando se o card está na area correta
        self.input.on('dragend', function (pointer, gameObject) {
            if (gameObject.x > 400 && gameObject.x < 600 && gameObject.y > 200 && gameObject.y < 350) {

                if (gameObject.id === 2) {
                    gameObject.x = 510; //520
                    gameObject.y = 255; //175
                    self.over1 = true;

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 0.3,
                        duration: 500,
                        ease: 'Linear',
                    })

                    // animação para aparecer o pop up de certo
                    self.tweens.add({
                        targets: [self.certo],
                        alpha: 1,
                        duration: 600,
                        ease: 'Linear',
                    });

                    //animação para sumir depois de 5 segundos
                    self.tweens.add({
                        targets: [self.certo],
                        alpha: 0,
                        duration: 600,
                        ease: 'Linear',
                        delay: 1000,
                    });

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    });
                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 0.3,
                        duration: 500,
                        ease: 'Linear',
                    })

                    // animação para aparecer o pop up de errado
                    self.tweens.add({
                        targets: [self.errado],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                    });

                    //animação para sumir depois de 5 segundos
                    self.tweens.add({
                        targets: [self.errado],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    });

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    })

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    })

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    })

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    })

                    
                }
            } 
            else if (gameObject.x > 730 && gameObject.x < 970 && gameObject.y > 200 && gameObject.y < 350) {

                if (gameObject.id === 3) {
                    gameObject.x = 840; 
                    gameObject.y = 255;
                    self.over2 = true;

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 0.3,
                        duration: 500,
                        ease: 'Linear',
                    });

                    // animação para aparecer o pop up de certo
                    self.tweens.add({
                        targets: [self.certo],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                    });

                    //animação para sumir depois de 5 segundos
                    self.tweens.add({
                        targets: [self.certo],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000,
                    });

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000,
                    });

                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;


                    // animação para aparecer o pop up de errado
                    self.tweens.add({
                        targets: [self.errado],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                    });

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 0.3,
                        duration: 500,
                        ease: 'Linear',
                    })

                    //animação para sumir depois de 5 segundos
                    self.tweens.add({
                        targets: [self.errado],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    });

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    })

                }
            } 
            else if (gameObject.x > 70 && gameObject.x < 310 && gameObject.y > 200 && gameObject.y < 350) {

                if (gameObject.id === 1) {
                    gameObject.x = 190;
                    gameObject.y = 255;
                    self.over3 = true;

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 0.3,
                        duration: 500,
                        ease: 'Linear',
                    });

                    // animação para aparecer o pop up de certo
                    self.tweens.add({
                        targets: [self.certo],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                    });

                    //animação para sumir depois de 5 segundos
                    self.tweens.add({
                        targets: [self.certo],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000,
                    });

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000,
                    });

                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                    // animação para aparecer o pop up de errado
                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 0.3,
                        duration: 500,
                        ease: 'Linear',
                    })

                    // animação para aparecer o pop up de errado
                    self.tweens.add({
                        targets: [self.errado],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                    });

                    //animação para sumir depois de 5 segundos
                    self.tweens.add({
                        targets: [self.errado],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    });

                    self.tweens.add({
                        targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                        alpha: 1,
                        duration: 500,
                        ease: 'Linear',
                        delay: 1000, 
                    })
                }
            } else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }

            // Verifica se todos os cards estão no local correto
            if (self.over1 && self.over2 && self.over3) {
                

                // Se todos os cards estiverem no lugar certo, irá aparecer um pop up de parabéns
                self.tweens.add({
                    targets: [self.canaisParabens, self.botaoMapa],
                    alpha: 1,
                    duration: 500,
                    ease: 'Linear',
                    delay: 2000,
                    
                }); 

                self.tweens.add({
                    targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                });

                self.tweens.add({
                    targets: [self.botaoMapa],
                    scaleX: self.botaoMapa.scaleX * 1.1, 
                    scaleY: self.botaoMapa.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });
                
                self.botaoMapa.on('pointerdown', () => {
                    self.tweens.add({
                        targets: [self.canaisParabens, self.botaoMapa],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        onComplete: () => {
                            self.botaoMapa.destroy();
                            self.canaisParabens.destroy();
                            self.scene.start ('Mapa')
                            self.scene.stop ('Minigame3')
                            self.scene.stop ('Level3')
                            gameState.jaConcluiuFase3 = true;

                            self.tweens.add({
                                targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    
                });

                self.botaoMapa.on('pointerover', () => {
                    self.input.setDefaultCursor("pointer");
                });

                self.botaoMapa.on('pointerout', () => {
                    self.input.setDefaultCursor("default");
                });

                self.tweens.add({
                    targets: [self.fundo, self.encaixarCard1, self.encaixarCard2, self.encaixarCard3, self.card1, self.card2, self.card3],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                });
            }
        });
    }

    update() {}
}
