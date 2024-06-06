class Level2 extends Phaser.Scene {
    constructor (){
        super({ key: 'Level2'});
        this.cameraLocked = false
    }
    preload() {
        this.load.image('escritorio2', './assets/office_plataformas.png');
        this.load.spritesheet('computador1', './assets/computador.png', {frameWidth: 32, frameHeight: 13});
        this.load.image('button','./assets/botaotexto1.png' );
        this.load.image('quadro2', './assets/quadro_caca_palavras.png');
        this.load.image('popUp1', './assets/plataformasPopup.png');
        this.load.image('popUp2', './assets/cacapalavrasPopup.png');
        this.load.image('seta', './assets/seta.png');
        this.load.spritesheet('elevador', './assets/elevator.png', {frameWidth: 32, frameHeight: 48});
    }
    create(){
        const escritorio2 = this.add.image(0, 0, 'escritorio2').setOrigin(0);
        
        this.computador = this.add.sprite(750, 487, 'computador1').setScale(3.7).setInteractive().setAlpha(1);

        this.cameraLocked = true;
        this.anims.create({
            key: 'ligar', // Nome da animação
            frames: this.anims.generateFrameNumbers('computador1', { start: 0, end: 2 }), // Quadros da animação
            frameRate: 10, // Taxa de quadros por segundo
            repeat: 0 // Repetição infinita da animação
        });
        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, 1728 , 600);


        if (!gameState.jaEntrouFase2){
            this.time.delayedCall(250, () => {
            this.panel = this.add.image(512, 355, 'popUp1').setOrigin(0.5, -0.1).setAlpha(1);
            this.botaoTexto = this.add.sprite( 921, 550, 'button').setInteractive().setScale(1.5).setAlpha(1);
            this.tweens.add ({
                targets: [this.panel],
                alpha: 1,
                duration: 500,
                ease: 'Linear',
            });
            this.tweens.add({
                targets: [this.botaoTexto],
                alpha: 1,
                scaleX: this.botaoTexto.scaleX * 1.1,
                scaleY: this.botaoTexto.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            });
            this.botaoTexto.on('pointerdown', () => {
                this.tweens.add({
                    targets: [this.panel, this.botaoTexto],
                    alpha: 0,
                    duration: 500,
                    ease: 'Linear',
                        onComplete: () => {
                            this.botaoTexto.destroy();
                            this.panel.destroy();
                            this.cameraLocked = false;
                            this.yoyoTween = this.tweens.add({
                                targets: this.computador,
                                scaleX: this.computador.scaleX * 1.15, // Aumenta a escala em 15%
                                scaleY: this.computador.scaleY * 1.15,
                                duration: 500, // duração em milissegundos
                                yoyo: true, // faça a animação voltar ao estado original
                                repeat: -1 // -1 para repetir indefinidamente
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
            this.computador.on('pointerdown', () => {
                this.computador.anims.play('ligar', true);
                this.input.setDefaultCursor("default");
                if (this.yoyoTween && this.yoyoTween.isPlaying()) {
                    this.yoyoTween.stop();
                }
                this.time.delayedCall(500, () => {
                    this.scene.start('Level2tutorial');
                })
        });
        this.computador.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
            if (this.yoyoTween && this.yoyoTween.isPlaying()) {
                this.yoyoTween.stop(); // Interrompe a animação yoyoTween
            }
        });
        this.computador.on('pointerout', () => {
            if (this.yoyoTween && !this.yoyoTween.isPlaying()) {
                this.yoyoTween.play(); // Retoma a animação yoyoTween se não estiver reproduzindo
            }
        });
        }
        const quadro2 = this.add.image(1025, 175, 'quadro2').setOrigin(0).setScale(4).setInteractive();
        if (gameState.jaEntrouFase2){
            this.time.delayedCall(250, () => {
                const panel2 = this.add.image(512, 355, 'popUp2').setOrigin(0.5, -0.1);
                panel2.setAlpha(0);
            // tweens para fazer o fade in do painel e do texto
            this.tweens.add({
            targets: [panel2],
            alpha: 1, // Destino do alpha (totalmente visível)
            duration: 500, // Duração do tween em milissegundos
            ease: 'Linear', // Tipo de easing (linear para um fade linear)
            delay: 0, // Atraso antes do tween começar
         });
        

                this.botaoTexto2 = this.add.sprite( 921, 550, 'button').setInteractive().setScale(1.5);
    
                
                this.botaoTexto2.setAlpha(0)
                
    
                this.tweens.add({
                    targets: [this.botaoTexto2],
                    alpha: 1, // Destino do alpha (totalmente visível)
                    duration: 500, // Duração do tween em milissegundos
                    ease: 'Linear', // Tipo de easing (linear para um fade linear)
                    delay: 0, // Atraso antes do tween começar
                });
                
                this.tweens.add({
                    targets: [this.botaoTexto2],
                    scaleX: this.botaoTexto2.scaleX * 1.1, 
                    scaleY: this.botaoTexto2.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                }); 

                this.botaoTexto2.on('pointerdown', () => {
        
    
                    // Adiciona tweens para fazer o painel e o texto desaparecerem
                    this.tweens.add({
                        targets: [panel2, this.botaoTexto2],
                        alpha: 0, // Destino do alpha (totalmente invisível)
                        duration: 500, // Duração do tween em milissegundos
                        ease: 'Linear', // Tipo de easing (linear para um fade linear)
                        onComplete: () => {
                            // Após o desaparecimento, você pode remover os objetos ou fazer outras ações, se necessário
                            panel2.destroy();
                            this.botaoTexto2.destroy();
                            this.cameraLocked = false;
                            this.yoyoTween = this.tweens.add({
                                targets: quadro2,
                                scaleX: quadro2.scaleX * 1.03, // Aumenta a escala em 15%
                                scaleY: quadro2.scaleY * 1.03,
                                duration: 500, // duração em milissegundos
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
                });
                    this.input.setDefaultCursor("default")
                });
    
                
    
                this.botaoTexto2.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.botaoTexto2.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
            });
            quadro2.on('pointerdown', () => {
                this.scene.start('Minigame2');
                this.input.setDefaultCursor("default");
            });
            quadro2.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
                if (this.yoyoTween && this.yoyoTween.isPlaying()) {
                    this.yoyoTween.stop(); // Interrompe a animação yoyoTween
                }
            });
            quadro2.on('pointerout', () => {
                if (this.yoyoTween && !this.yoyoTween.isPlaying()) {
                    this.yoyoTween.play(); // Retoma a animação yoyoTween se não estiver reproduzindo
                }
            });
        }
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