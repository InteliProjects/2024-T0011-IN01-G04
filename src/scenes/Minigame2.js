class Minigame2 extends Phaser.Scene{
    constructor(){
        super({key: 'Minigame2'});
    }
    preload(){ // carrega as imagens
        this.load.image('caçaPalavras', './assets/caçapalavras.png');
        this.load.image('popup', './assets/popupPalavras.png');
        this.load.image('button','./assets/botaotexto1.png' )
        this.load.image('hud', './assets/hudPalavras.png')
        this.load.image('circulado1', './assets/Workshops.png')
        this.load.image('circulado2', './assets/Curriculo.png')
        this.load.image('circulado3', './assets/Apex.png')
        this.load.image('circulado4', './assets/Database.png')
        this.load.image('circulado5', './assets/Java.png')
        this.load.image('circulado6', './assets/Primavera.png')
        this.load.image('circulado7', './assets/Cloud.png')
        this.load.image('circulado8', './assets/Netsuite.png')
        this.load.image('popupCloud', './assets/PopupCloud.png')
        this.load.image('popupCurriculo', './assets/PopupCurriculo.png')
        this.load.image('popupDatabase', './assets/PopupDatabase.png')
        this.load.image('popupJava', './assets/PopupJava.png')
        this.load.image('popupNetsuite', './assets/PopupNetsuite.png')
        this.load.image('popupPrimavera', './assets/PopupPrimavera.png')
        this.load.image('popupWorkshops', './assets/PopupWorkshop.png')
        this.load.image('popupApex', './assets/PopupApex.png')
        this.load.image('apexRiscado', './assets/apexRiscado.png');
        this.load.image('workshopsRiscado', './assets/workshopsRiscado.png');
        this.load.image('curriculoRiscado', './assets/curriculoRiscado.png');
        this.load.image('databaseRiscado', './assets/databaseRiscado.png');
        this.load.image('javaRiscado', './assets/javaRiscado.png');
        this.load.image('primaveraRiscado', './assets/primaveraRiscado.png');
        this.load.image('cloudRiscado', './assets/cloudRiscado.png');
        this.load.image('netsuiteRiscado', './assets/netsuiteRiscado.png');
        this.load.image('parabensPalavras', './assets/ParabensPalavras.png');

    }

    create(){
        this.caçaPalavras = this.add.image(0, 0, 'caçaPalavras').setOrigin(0).setAlpha(0.3);

        //Carerga os circulados das palavras
        this.Workshops = this.add.image( 413, 228, 'circulado1').setOrigin(0).setInteractive().setAlpha(0.001);
        this.Curriculo = this.add.image( 523, 261, 'circulado2').setOrigin(0).setInteractive().setAlpha(0.001);
        this.Apex = this.add.image( 723, 294, 'circulado3').setOrigin(0).setInteractive().setAlpha(0.001);
        this.Database = this.add.image( 485, 365, 'circulado4').setOrigin(0).setInteractive().setAlpha(0.001);
        this.Java = this.add.image( 315, 195, 'circulado5').setOrigin(0).setInteractive().setAlpha(0.001);
        this.Primavera = this.add.image( 277, 225, 'circulado6').setOrigin(0).setInteractive().setAlpha(0.001);
        this.Cloud = this.add.image( 793, 360, 'circulado7').setOrigin(0).setInteractive().setAlpha(0.001);
        this.Netsuite = this.add.image( 485, 537, 'circulado8').setOrigin(0).setInteractive().setAlpha(0.001);

        this.popupWorkshops = this.add.image(510, 310, 'popupWorkshops').setAlpha(0);
        this.popupCurriculo = this.add.image(522, 305, 'popupCurriculo').setAlpha(0);
        this.popupApex = this.add.image(530, 310, 'popupApex').setAlpha(0);
        this.popupDatabase = this.add.image(515, 330, 'popupDatabase').setAlpha(0);
        this.popupJava = this.add.image(510, 340, 'popupJava').setAlpha(0);
        this.popupPrimavera = this.add.image(490, 323, 'popupPrimavera').setAlpha(0);
        this.popupCloud = this.add.image(340, 560, 'popupCloud').setAlpha(0);
        this.popupNetsuite = this.add.image(520, 320, 'popupNetsuite').setAlpha(0);

        this.botaoSkip1 = this.add.image( 750, 490, 'button').setInteractive().setScale(1.1).setAlpha(0);
        this.botaoSkip2 = this.add.image( 855, 530, 'button').setInteractive().setScale(1.1).setAlpha(0);
        this.botaoSkip3 = this.add.image( 665, 450, 'button').setInteractive().setScale(1.1).setAlpha(0);
        this.botaoSkip4 = this.add.image( 805, 310, 'button').setInteractive().setScale(1.1).setAlpha(0);
        this.botaoSkip5 = this.add.image( 866, 287, 'button').setInteractive().setScale(1.1).setAlpha(0);
        this.botaoSkip6 = this.add.image( 728, 470, 'button').setInteractive().setScale(1.1).setAlpha(0);
        this.botaoSkip7 = this.add.image( 735, 540, 'button').setInteractive().setScale(1.1).setAlpha(0);
        this.botaoSkip8 = this.add.image( 810, 480, 'button').setInteractive().setScale(1.1).setAlpha(0);


        this.hud = this.add.image(507, 320, 'hud').setScale(1).setAlpha(0).setDepth(2);

        this.workshopsRiscado = this.add.image(-5, 0, 'workshopsRiscado').setOrigin(0).setAlpha(0).setDepth(3);
        this.curriculoRiscado = this.add.image(-5, 0, 'curriculoRiscado').setOrigin(0).setAlpha(0).setDepth(3);
        this.apexRiscado = this.add.image(-5, 0, 'apexRiscado').setOrigin(0).setAlpha(0).setDepth(3);
        this.databaseRiscado = this.add.image(-5, 0, 'databaseRiscado').setOrigin(0).setAlpha(0).setDepth(3);
        this.javaRiscado = this.add.image(-5, 0, 'javaRiscado').setOrigin(0).setAlpha(0).setDepth(3);
        this.primaveraRiscado = this.add.image(-5, 0, 'primaveraRiscado').setOrigin(0).setAlpha(0).setDepth(3);
        this.cloudRiscado = this.add.image(-5, 0, 'cloudRiscado').setOrigin(0).setAlpha(0).setDepth(3);
        this.netsuiteRiscado = this.add.image(-5, 0, 'netsuiteRiscado').setOrigin(0).setAlpha(0).setDepth(3);

        //interatividade da palavra workshops
        if (!gameState.achouWorkshops){ // se a palavra não foi encontrada
            this.Workshops.on('pointerdown', () => {//quando clicar na palavra
                this.tweens.add({ //faz o circulado aparecer
                    targets: [this.Workshops],
                    alpha: 1,
                    duration: 250,
                    ease: 'Linear',
                })
                this.tweens.add({
                    targets: [this.hud, this.caçaPalavras],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.time.delayedCall (500, () => {
                    this.tweens.add({
                        targets: [this.workshopsRiscado, this.popupWorkshops, this.botaoSkip1],
                        alpha: 1,
                        duration: 250,
                        ease: 'Linear',
                        
                    })
                })

                this.tweens.add({
                    targets: [this.botaoSkip1],
                    scaleX: this.botaoSkip1.scaleX * 1.1, 
                    scaleY: this.botaoSkip1.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                }); 

                this.botaoSkip1.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.popupWorkshops, this.botaoSkip1],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoSkip1.destroy();
                            this.popupWorkshops.destroy();
                            gameState.achouWorkshops = true;

                            this.tweens.add({
                                targets: [this.hud, this.caçaPalavras],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })

                this.botaoSkip1.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoSkip1.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
    
                
                
            })
        }
        if (!gameState.achouCurriculo){
            this.Curriculo.on('pointerdown', () => {
                this.tweens.add({
                    targets: [this.Curriculo],
                    alpha: 1,
                    duration: 250,
                    ease: 'Linear',

                })
                this.tweens.add({
                    targets: [this.hud, this.caçaPalavras],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.time.delayedCall (500, () => {
                    this.tweens.add({
                        targets: [this.curriculoRiscado, this.popupCurriculo, this.botaoSkip2],
                        alpha: 1,
                        duration: 250,
                        ease: 'Linear',
                        
                    })
                })

                this.tweens.add({
                    targets: [this.botaoSkip2],
                    scaleX: this.botaoSkip2.scaleX * 1.1, 
                    scaleY: this.botaoSkip2.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });

                this.botaoSkip2.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.popupCurriculo, this.botaoSkip2],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoSkip2.destroy();
                            this.popupCurriculo.destroy();
                            gameState.achouCurriculo = true;

                            this.tweens.add({
                                targets: [this.hud, this.caçaPalavras],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })

                this.botaoSkip2.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoSkip2.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                
            })
        }
        if (!gameState.achouApex){//se a palavra não foi encontrada
            this.Apex.on('pointerdown', () => {
                this.tweens.add({
                    targets: [this.Apex],
                    alpha: 1,
                    duration: 250,
                    ease: 'Linear',

                })
                this.tweens.add({
                    targets: [this.hud, this.caçaPalavras],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.time.delayedCall (500, () => {
                    this.tweens.add({
                        targets: [this.apexRiscado, this.popupApex, this.botaoSkip3],
                        alpha: 1,
                        duration: 250,
                        ease: 'Linear',
                        
                    })
                })

                this.tweens.add({
                    targets: [this.botaoSkip3],
                    scaleX: this.botaoSkip3.scaleX * 1.1, 
                    scaleY: this.botaoSkip3.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });

                this.botaoSkip3.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.popupApex, this.botaoSkip3],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoSkip3.destroy();
                            this.popupApex.destroy();
                            gameState.achouApex = true;

                            this.tweens.add({
                                targets: [this.hud, this.caçaPalavras],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })

                this.botaoSkip3.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoSkip3.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                
            })
        }
        if (!gameState.achouDatabase){//se a palavra não foi encontrada
            this.Database.on('pointerdown', () => {
                this.tweens.add({
                    targets: [this.Database],
                    alpha: 1,
                    duration: 250,
                    ease: 'Linear',

                })
                this.tweens.add({
                    targets: [this.hud, this.caçaPalavras],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.time.delayedCall (500, () => {
                    this.tweens.add({
                        targets: [this.databaseRiscado, this.popupDatabase, this.botaoSkip4],
                        alpha: 1,
                        duration: 250,
                        ease: 'Linear',
                        
                    })
                })

                this.tweens.add({
                    targets: [this.botaoSkip4],
                    scaleX: this.botaoSkip4.scaleX * 1.1, 
                    scaleY: this.botaoSkip4.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });

                this.botaoSkip4.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.popupDatabase, this.botaoSkip4],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoSkip4.destroy();
                            this.popupDatabase.destroy();
                            gameState.achouDatabase = true;

                            this.tweens.add({
                                targets: [this.hud, this.caçaPalavras],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })

                this.botaoSkip4.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoSkip4.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                
            })
        }
        if (!gameState.achouJava){ //   se a palavra não foi encontrada
            this.Java.on('pointerdown', () => {
                this.tweens.add({
                    targets: [this.Java],
                    alpha: 1,
                    duration: 250,
                    ease: 'Linear',

                })
                this.tweens.add({
                    targets: [this.hud, this.caçaPalavras],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.time.delayedCall (500, () => {
                    this.tweens.add({
                        targets: [this.javaRiscado, this.popupJava, this.botaoSkip5],
                        alpha: 1,
                        duration: 250,
                        ease: 'Linear',
                        
                    })
                })

                this.tweens.add({
                    targets: [this.botaoSkip5],
                    scaleX: this.botaoSkip5.scaleX * 1.1, 
                    scaleY: this.botaoSkip5.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });

                this.botaoSkip5.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.popupJava, this.botaoSkip5],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoSkip5.destroy();
                            this.popupJava.destroy();
                            gameState.achouJava = true;

                            this.tweens.add({
                                targets: [this.hud, this.caçaPalavras],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })

                this.botaoSkip5.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoSkip5.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                
            })
        }
        if (!gameState.achouPrimavera){//se a palavra não foi encontrada
            this.Primavera.on('pointerdown', () => {
                this.tweens.add({
                    targets: [this.Primavera],
                    alpha: 1,
                    duration: 250,
                    ease: 'Linear',

                })
                this.tweens.add({
                    targets: [this.hud, this.caçaPalavras],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.time.delayedCall (500, () => {
                    this.tweens.add({
                        targets: [this.primaveraRiscado, this.popupPrimavera, this.botaoSkip6],
                        alpha: 1,
                        duration: 250,
                        ease: 'Linear',
                        
                    })
                })

                this.tweens.add({
                    targets: [this.botaoSkip6],
                    scaleX: this.botaoSkip6.scaleX * 1.1, 
                    scaleY: this.botaoSkip6.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });

                this.botaoSkip6.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.popupPrimavera, this.botaoSkip6],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoSkip6.destroy();
                            this.popupPrimavera.destroy();
                            gameState.achouPrimavera = true;

                            this.tweens.add({
                                targets: [this.hud, this.caçaPalavras],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })

                this.botaoSkip6.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoSkip6.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                
            })
        }
        if (!gameState.achouCloud){//se a palavra não foi encontrada
            this.Cloud.on('pointerdown', () => {
                this.tweens.add({
                    targets: [this.Cloud],
                    alpha: 1,
                    duration: 250,
                    ease: 'Linear',

                })
                this.tweens.add({
                    targets: [this.hud, this.caçaPalavras],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.time.delayedCall (500, () => {
                    this.tweens.add({
                        targets: [this.cloudRiscado, this.popupCloud, this.botaoSkip7],
                        alpha: 1,
                        duration: 250,
                        ease: 'Linear',
                        
                    })
                })

                this.tweens.add({
                    targets: [this.botaoSkip7],
                    scaleX: this.botaoSkip7.scaleX * 1.1, 
                    scaleY: this.botaoSkip7.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });

                this.botaoSkip7.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.popupCloud, this.botaoSkip7],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoSkip7.destroy();
                            this.popupCloud.destroy();
                            gameState.achouCloud = true;

                            this.tweens.add({
                                targets: [this.hud, this.caçaPalavras],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })

                this.botaoSkip7.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoSkip7.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                
            })
        }
        if (!gameState.achouNetsuite){//se a palavra não foi encontrada
            this.Netsuite.on('pointerdown', () => {
                this.tweens.add({
                    targets: [this.Netsuite],
                    alpha: 1,
                    duration: 250,
                    ease: 'Linear',

                })
                this.tweens.add({
                    targets: [this.hud, this.caçaPalavras],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.time.delayedCall (500, () => {
                    this.tweens.add({
                        targets: [this.netsuiteRiscado, this.popupNetsuite, this.botaoSkip8],
                        alpha: 1,
                        duration: 250,
                        ease: 'Linear',
                        
                    })
                })

                this.tweens.add({
                    targets: [this.botaoSkip8],
                    scaleX: this.botaoSkip8.scaleX * 1.1, 
                    scaleY: this.botaoSkip8.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });

                this.botaoSkip8.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.popupNetsuite, this.botaoSkip8],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoSkip8.destroy();
                            this.popupNetsuite.destroy();
                            gameState.achouNetsuite = true;

                            this.tweens.add({
                                targets: [this.hud, this.caçaPalavras],
                                alpha: 1,
                                duration: 250,
                                ease: 'Linear',
                            })
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })

                this.botaoSkip8.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoSkip8.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
                
            })
        }
        

        this.time.delayedCall(1500, () => {
            this.popup = this.add.image(512, 355, 'popup').setOrigin(0.5, -0.1);

        this.popup.setAlpha(0);
        



        // tweens para fazer o fade in do painel e do texto
        this.tweens.add({
            targets: [this.popup],
            alpha: 1, // Destino do alpha (totalmente visível)
            duration: 250, // Duração do tween em milissegundos
            ease: 'Linear', // Tipo de easing (linear para um fade linear)
            delay: 0, // Atraso antes do tween começar
         });
    
        

        // Função para lidar com o clique no painel
        this.time.delayedCall(250, () => {
           this.botaoTexto = this.add.image( 921, 550, 'button').setInteractive().setScale(1.5);

            
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
                    targets: [this.popup, this.botaoTexto],
                    alpha: 0, // Destino do alpha (totalmente invisível)
                    duration: 250, // Duração do tween em milissegundos
                    ease: 'Linear', // Tipo de easing (linear para um fade linear)
                    
                    onComplete: () => {
                        // Após o desaparecimento, você pode remover os objetos ou fazer outras ações, se necessário
                        this.popup.destroy();
                        this.botaoTexto.destroy();
                        this.tweens.add({
                            targets: [this.hud, this.caçaPalavras],
                            alpha: 1, // Destino do alpha (totalmente visivel)
                            duration: 250, // Duração do tween em milissegundos
                            ease: 'Linear', // Tipo de easing (linear para um fade linear)
                        });


                        
                        
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

        });

        this.parabensPalavras = this.add.image(512, 320, 'parabensPalavras').setAlpha(0);

        this.botaoMapa = this.add.image( 750, 445, 'button').setInteractive().setScale(1.5).setAlpha(0);

    }

    update(){
        if (gameState.achouWorkshops && gameState.achouCurriculo && gameState.achouApex && gameState.achouDatabase && gameState.achouJava && gameState.achouPrimavera && gameState.achouCloud && gameState.achouNetsuite){
            this.time.delayedCall(1000, () => { 
                
                this.tweens.add({
                    targets: [this.hud, this.apexRiscado, this.workshopsRiscado, this.curriculoRiscado, this.cloudRiscado, this.netsuiteRiscado, this.javaRiscado, this.databaseRiscado, this.primaveraRiscado],
                    alpha: 0,
                    duration: 500,
                    ease: 'Linear',
                })

                this.tweens.add({
                    targets: [this.caçaPalavras],
                    alpha: 0.3,
                    duration: 500,
                    ease: 'Linear',
                })

                this.tweens.add({
                    targets: [this.parabensPalavras, this.botaoMapa],
                    alpha: 1,
                    duration: 500,
                    ease: 'Linear',

                })

                this.botaoMapa.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.parabensPalavras, this.botaoMapa],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        onComplete: () => {
                            this.botaoMapa.destroy();
                            this.parabensPalavras.destroy();
                            gameState.jaConcluiuFase2 = true;

                            this.scene.start('Mapa');
                        }
                    })
                    this.input.setDefaultCursor("default");
                    
                })
                this.botaoMapa.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoMapa.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })

            })

        }
    }
}