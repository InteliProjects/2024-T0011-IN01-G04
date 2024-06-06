class Level1 extends Phaser.Scene {

    constructor (){

        super({ key: 'Level1'});
        this.cameraLocked = false

    }
    preload() {

        this.load.image('escritorio1', './assets/office_cadastro.png');
        this.load.spritesheet('computador1', './assets/computador.png', {frameWidth: 32, frameHeight: 13});
        this.load.spritesheet('computador2', './assets/compligado.png', {frameWidth: 32, frameHeight: 13});
        this.load.image('botao','./assets/botaotexto1.png');
        this.load.image ('quadro', './assets/quadrotime.png');
        this.load.image ('cadastro', './assets/cadastroPopup.png');
        this.load.image ('cadastro2', './assets/cadastro2.png');
        this.load.image('seta', './assets/seta.png');
        this.load.audio('popupAppear', './assets/sounds/popupAppearFX.mp3');
        this.load.audio('popupDismiss', './assets/sounds/popupDismissFX.mp3');
        this.load.audio('monitorOn', './assets/sounds/monitorON.mp3');

    }

    create() {
        
        // this.sound.stopByKey('ambientSound');
        
        escritorio = this.add.image(0, 0, 'escritorio1').setOrigin(0);

        computador1 = this.add.sprite(828, 487, 'computador1').setScale(3.7).setInteractive().setAlpha(1);

        quadro = this.add.image (1400, 325, 'quadro').setInteractive().setScale(3.8);

        this.anims.create({
            key: 'ligar1', 
            frames: this.anims.generateFrameNumbers('computador1', { start: 0, end: 2 }), 
            frameRate: 10, 
            repeat: 0 
        });

        this.cameraLocked = true;

        computador1.on('pointerdown', () => {
            this.playMonitorOnSound(); // Toca o som de ligar o monitor
            this.input.setDefaultCursor("default");
            computador1.anims.play('ligar1', true); 
            this.time.delayedCall(1000, () => { 
                this.scene.start ('level1tutorial');
            })            
        });

        computador1.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
            if (this.yoyoTween && this.yoyoTween.isPlaying()) {
                this.yoyoTween.stop(); // Interrompe a animação yoyoTween
            }
        });
        
        computador1.on('pointerout', () => {
            this.input.setDefaultCursor("default");
            if (this.yoyoTween && !this.yoyoTween.isPlaying()) {
                this.yoyoTween.play(); // Retoma a animação yoyoTween se não estiver reproduzindo
            }
        });
            
        this.input.setDefaultCursor("default")
            
        //Executa se for a primeira vez no escritório

        if (!gameState.jaEntrouFase1){
            
            this.time.delayedCall(250, () => {

            cadastro = this.add.image(520, 380, 'cadastro').setScale(1.5).setOrigin(0.5, -0.1).setAlpha(0);

                // Toca o som de aparição do popup
                this.playPopupAppearSound();


            cadastro = this.add.image(512, 355, 'cadastro').setAlpha(0).setOrigin(0.5, -0.1);



            botaoTexto = this.add.sprite( 921, 550, 'botao').setInteractive().setAlpha(1).setScale(1.5) ;

            this.tweens.add ({
                targets: [cadastro],
                alpha: 1, 
                duration: 500, 
                ease: 'Linear',  
                
            });

            this.tweens.add({
                targets: [botaoTexto],
                alpha: 1,
                scaleX: botaoTexto.scaleX * 1.1, 
                scaleY: botaoTexto.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            }); 
    
            botaoTexto.on('pointerdown', () => {
                
                // Toca o som de dispensa do popup
                this.playPopupDismissSound();

                this.tweens.add({
                    targets: [cadastro, botaoTexto],
                    alpha: 0, 
                    duration: 500, 
                    ease: 'Linear', 
                    
                        onComplete: () => {
                        
                            botaoTexto.destroy();

                            this.cameraLocked = false;

                            this.yoyoTween = this.tweens.add({
                                targets: computador1,
                                scaleX: computador1.scaleX * 1.15, // Aumenta a escala em 15%
                                scaleY: computador1.scaleY * 1.15,
                                duration: 500, // duração em milissegundos
                                yoyo: true, // faça a animação voltar ao estado original
                                repeat: -1 // -1 para repetir indefinidamente
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

        } else if (gameState.jaEntrouFase1) {

            computador2 = this.add.sprite(828, 487, 'computador2').setScale(3.7).setInteractive()

            cadastro2 = this.add.image(512, 355, 'cadastro2').setAlpha(0).setOrigin(0.5, -0.1);

            this.botaoTexto2 = this.add.sprite( 921, 550, 'botao').setInteractive().setAlpha(1).setScale(1.5);

            computador2.anims.play('ligado', true);

            this.cameraLocked = false

            this.anims.create({
                key: 'ligado', 
                frames: this.anims.generateFrameNumbers('computador2', { start: 1, end: 1 }), 
                frameRate: 10, 
                repeat: 0 
            });

            this.tweens.add({
                targets: [cadastro2],
                alpha: 1, 
                duration: 500, 
                ease: 'Linear', 
            })

            this.tweens.add({
                targets: [this.botaoTexto2],
                scaleX: this.botaoTexto2.scaleX * 1.1, 
                scaleY: this.botaoTexto2.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            }); 

            this.botaoTexto2.on('pointerdown', () => {
                
                // Toca o som de dispensa do popup
                this.playPopupDismissSound();

                this.tweens.add({
                    targets: [cadastro2, this.botaoTexto2],
                    alpha: 0, 
                    duration: 500, 
                    ease: 'Linear',

                    onComplete: () => {
                        
                        this.botaoTexto2.destroy();
                        quadro.setAlpha(1)

                        this.quadroTween = this.tweens.add({
                            targets: [quadro],
                            scaleX: quadro.scaleX * 1.05,
                            scaleY: quadro.scaleY * 1.05,
                            duration: 1000, // duração em milissegundos
                            yoyo: true, // faça a animação voltar ao estado original
                            repeat: -1 // -1 para repetir indefinidamente
                        }); 
                        this.seta = this.add.image( 900, 400, 'seta').setScale(2)
                            this.tweens.add({
                                targets: this.seta, // Adiciona a imagem da seta como um alvo do tween
                                x: 1000, // Define o destino X para onde a seta vai
                                duration: 500, // Duração do tween em milissegundos para ir para frente
                                yoyo: true, // Permite o retorno da seta
                                repeat: -1 // Repete indefinidamente
                            });

                    }

                })

            })

            this.botaoTexto2.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            });
            
            this.botaoTexto2.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            });

            quadro.on('pointerdown', () => {
                this.input.setDefaultCursor("default");
                this.scene.start ('Minigame1');
            });

            quadro.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
                if (this.quadroTween && this.quadroTween.isPlaying()) {
                    this.quadroTween.stop(); // Interrompe a animação yoyoTween
                }
            });
            
            quadro.on('pointerout', () => {
                this.input.setDefaultCursor("default");
                if (this.quadroTween && !this.yoyoTween.isPlaying()) {
                    this.quadroTween.play(); // Retoma a animação yoyoTween se não estiver reproduzindo
                }
            });

        }

        gameState.jaEntrouFase1 = true;


        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setBounds(0, 0, 1728 , 600);

    }

    // funções auxiliares para tocar os sons
    playPopupAppearSound() {
        this.sound.play('popupAppear', { volume: 1 });
    }

    playPopupDismissSound() {
        this.sound.play('popupDismiss', { volume: 1 });
    }
    
    playMonitorOnSound() {
        this.sound.play('monitorOn', { volume: 1 });
    }

    update(){

        const cameraSpeed = 2;

        if (!this.cameraLocked) { // Verifica se a câmera está bloqueada
            if (this.cursors.left.isDown && this.cameras.main.scrollX > 0) {
                this.cameras.main.scrollX -= cameraSpeed;
            } 
            else if (this.cursors.right.isDown && this.cameras.main.scrollX < 2370 - 1200) {
                this.cameras.main.scrollX += cameraSpeed;
           }
        }
    
    }
}

var escritorio;
var computador1;
var panel;
var text;
var botaoTexto;
var text2;
var computador2;
var cadastro;
var quadro;
var cadastro2