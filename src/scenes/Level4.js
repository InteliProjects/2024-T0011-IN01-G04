class Level4 extends Phaser.Scene {
    constructor (){
        super({ key: 'Level4'});
        this.cameraLocked = false
    }
    
    preload() {
        this.load.image('escritorio4', './assets/office_cloud.png');
        this.load.spritesheet('computador1', './assets/computador.png', {frameWidth: 32, frameHeight: 13});
        this.load.image('popupCloud2', './assets/popupCloud2.png');
        this.load.image('button','./assets/botaotexto1.png' )
        this.load.image('seta', './assets/seta.png')
        this.load.image('popupCloud3', './assets/popupCloud3.png')
       
    }

    create(){
        this.escritorio2 = this.add.image(0, 0, 'escritorio4').setOrigin(0);
        
        this.computador = this.add.sprite(675, 490, 'computador1').setScale(3.7).setInteractive().setAlpha(1)

        this.computador2 = this.add.sprite(1550, 490, 'computador1').setScale(3.7).setInteractive().setAlpha(1)

        this.anims.create({
            key: 'ligar', // Nome da animação
            frames: this.anims.generateFrameNumbers('computador1', { start: 0, end: 2 }), // Quadros da animação
            frameRate: 10, // Taxa de quadros por segundo
            repeat: 0 // Repetição infinita da animação
        });
        
        this.seta = this.add.image( 900, 400, 'seta').setScale(2).setAlpha(0)

        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setBounds(0, 0, 1852 , 640);

        if(!gameState.jaEntrouFase4){
        this.popupCloud2 = this.add.image(512, 355, 'popupCloud2').setAlpha(0).setOrigin(0.5, -0.1);
        this.botao = this.add.image( 921, 550, 'button').setInteractive().setAlpha(0).setScale(1.5);    
        this.time.delayedCall(1000, () => {
            this.tweens.add ({
                targets: [this.popupCloud2, this.botao],
                alpha: 1, 
                duration: 250, 
                ease: 'Linear',  
                onComplete:() =>{
                    this.tweens.add({
                        targets: [this.botao],
                        alpha: 1,
                        scaleX: this.botao.scaleX * 1.1, 
                        scaleY: this.botao.scaleY * 1.1,
                        duration: 500, // duração em milissegundos
                        yoyo: true, // faça a animação voltar ao estado original
                        repeat: -1 // -1 para repetir indefinidamente
                    }); 
                }
            });
            
            
        });

        

        this.botao.on('pointerdown', () => {
            this.tweens.add ({
                targets: [this.popupCloud2, this.botao],
                alpha: 0, 
                duration: 1000, 
                ease: 'Linear',  
                onComplete: () => {
                    this.yoyoTween = this.tweens.add({
                        targets: this.computador,
                        scaleX: this.computador.scaleX * 1.1, // Aumenta a escala em 10%.
                        scaleY: this.computador.scaleY * 1.1, // Aumenta a escala em 10%.
                        duration: 500, // Duração da animação.
                        yoyo: true, // A animação volta ao estado inicial após completar, criando um efeito de pulsação.
                        repeat: -1 // A animação se repete indefinidamente.
                    });
                    this.popupCloud2.destroy();
                    this.botao.destroy();
                }
                
            });
            this.input.setDefaultCursor("default");
        })
        this.botao.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botao.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });
        
        this.computador.on('pointerdown', () => {
        this.computador.anims.play('ligar', true); 
            this.input.setDefaultCursor("default");
            if (this.yoyoTween && this.yoyoTween.isPlaying()) {
                this.yoyoTween.stop();
            }
            this.time.delayedCall(1000, () => {
                this.scene.start('Level4tutorial');
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
                this.yoyoTween.play();
                this.input.setDefaultCursor("default"); // Retoma a animação yoyoTween se não estiver reproduzindo
            }
        });
        
}
else {

    this.popupCloud3 = this.add.image(512, 355,  'popupCloud3').setAlpha(0).setOrigin(0.5, -0.1);
    this.botao2 = this.add.image( 921, 550, 'button').setInteractive().setAlpha(0).setScale(1.5); 
    this.time.delayedCall(1000, () => {
        this.tweens.add ({
            targets: [this.popupCloud3, this.botao2],
            alpha: 1, 
            duration: 250, 
            ease: 'Linear',
            onComplete:() =>{
                this.tweens.add({
                    targets: [this.botao2],
                    alpha: 1,
                    scaleX: this.botao2.scaleX * 1.1, 
                    scaleY: this.botao2.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                }); 
            }  
        });
        
    });

    this.botao2.on('pointerdown', () => {
        this.tweens.add ({
            targets: [this.popupCloud3, this.botao2],
            alpha: 0, 
            duration: 1000, 
            ease: 'Linear',  
            onComplete: () => {
               this.botao2.destroy();
               this.popupCloud3.destroy();

               this.seta.setAlpha(1)

                                    //Adicionando animação da seta para deixar mais intuitivo para o jogador
                this.tweens.add({
                    targets: this.seta, // Adiciona a imagem da seta como um alvo do tween
                    x: 1000, // Define o destino X para onde a seta vai
                    duration: 500, // Duração do tween em milissegundos para ir para frente
                    yoyo: true, // Permite o retorno da seta
                    repeat: -1 // Repete indefinidamente
                });
                this.yoyoTween = this.tweens.add({
                targets: this.computador2,
                scaleX: this.computador2.scaleX * 1.1, // Aumenta a escala em 10%.
                scaleY: this.computador2.scaleY * 1.1, // Aumenta a escala em 10%.
                duration: 500, // Duração da animação.
                yoyo: true, // A animação volta ao estado inicial após completar, criando um efeito de pulsação.
                repeat: -1 // A animação se repete indefinidamente.
            });
               
            }
            
        });
        this.input.setDefaultCursor("default");
    })
    this.botao2.on('pointerover', () => {
        this.input.setDefaultCursor("pointer");
    });
    this.botao2.on('pointerout', () => {
        this.input.setDefaultCursor("default");
    });
    this.computador2.on('pointerdown', () => {
        this.computador2.anims.play('ligar', true); 
            this.input.setDefaultCursor("default");
            if (this.yoyoTween && this.yoyoTween.isPlaying()) {
                this.yoyoTween.stop();
            }
            this.time.delayedCall(1000, () => {
                this.scene.start('Minigame4');
            })
            
        });

        this.computador2.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
            if (this.yoyoTween && this.yoyoTween.isPlaying()) {
                this.yoyoTween.stop(); // Interrompe a animação yoyoTween
            }
        });
        
        this.computador2.on('pointerout', () => {
            if (this.yoyoTween && !this.yoyoTween.isPlaying()) {
                this.yoyoTween.play();
                this.input.setDefaultCursor("default"); // Retoma a animação yoyoTween se não estiver reproduzindo
            }
        });
}
        
        


    }

    update(){
        this.cameraSpeed = 2;

        if (!this.cameraLocked) { // Verifica se a câmera está bloqueada
            if (this.cursors.left.isDown) {
                this.cameras.main.scrollX -= this.cameraSpeed;
            } 
            else if (this.cursors.right.isDown) {
                this.cameras.main.scrollX += this.cameraSpeed;
            }
        }
    }

}