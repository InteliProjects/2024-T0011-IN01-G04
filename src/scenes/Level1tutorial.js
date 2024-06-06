class Level1tutorial extends Phaser.Scene {
    constructor (){
        super({ key: 'level1tutorial'});
        
    };

    preload () {

        this.load.image('telaPC', './assets/MonitorPC.png');
        this.load.image ('fundo', './assets/computadorsemfundo.png');
        this.load.image('popupTutorial1', './assets/popupTutorial1.png');
        this.load.image('popupPlataforma', './assets/oracleAcademyPopup.png');
        this.load.image ('botao1', './assets/botaotexto1.png');
        this.load.image ('certo', './assets/certo.png');
        this.load.image ('errado','./assets/errado.png');
        this.load.image('plataforma', './assets/plataformaoracle.png');
        this.load.image ('passar', './assets/botaoSeta.png');
        this.load.image ('passar1', './assets/botaoSeta2.png');
        this.load.image ('passar2', './assets/botaoSeta3.png');
        this.load.image ('voltar', './assets/botaovoltar.png');

    };

    create () {
        this.monitor = this.add.image(0,0, 'telaPC').setOrigin(0,0);

        this.cameraLocked = true

        plataforma = this.add.image (512, 450, 'plataforma').setAlpha(0).setScale(1);

        tela = this.add.image (0,0,'fundo').setOrigin (0,0).setAlpha(0);

        teclado =  this.input.keyboard.createCursorKeys();

        this.popup1 = this.add.image (512, 355, 'popupTutorial1').setAlpha(0).setOrigin(0.5, -0.1);
        this.popupPlataforma = this.add.image(512, 355, 'popupPlataforma').setAlpha(0).setOrigin(0.5, -0.1);

        this.botaoPopup1 = this.add.image ( 921, 550, 'passar').setInteractive().setAlpha(0).setScale(1.5);

     
            

        this.time.delayedCall(500, () => {

            this.tweens.add({
                targets: [this.popup1, this.botaoPopup1],
                alpha: 1, // Destino do alpha (totalmente invisível)
                duration: 500, // Duração do tween em milissegundos
                ease: 'Linear' 
            });

            this.tweens.add({
                targets: [this.botaoPopup1],
                scaleX: this.botaoPopup1.scaleX * 1.1, 
                scaleY: this.botaoPopup1.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            }); 

        this.botaoSeta = this.add.image( 921, 550, 'passar').setInteractive().setAlpha(0).setScale(1.5);

        this.botaoPopup1.on('pointerdown', () => {

            this.tweens.add({
                targets: [this.popup1],
                alpha: 0, // Destino do alpha (totalmente invisível)
                duration: 500, // Duração do tween em milissegundos
                ease: 'Linear', // Tipo de easing (linear para um fade linear)
                
                onComplete: () => {
                    this.monitor.setAlpha(0);
                    tela.setAlpha(1);
                    this.tweens.add({ 
                        targets: [plataforma, this.botaoSeta, this.popupPlataforma],
                        alpha: 1, // Destino do alpha (totalmente invisível)
                        duration: 500, // Duração do tween em milissegundos
                        ease: 'Linear', // Tipo de easing (linear para um fade linear)
                
                    });

                    this.tweens.add({
                        targets: [this.botaoSeta],
                        scaleX: this.botaoSeta.scaleX * 1.1, 
                        scaleY: this.botaoSeta.scaleY * 1.1,
                        duration: 500, // duração em milissegundos
                        yoyo: true, // faça a animação voltar ao estado original
                        repeat: -1 // -1 para repetir indefinidamente
                    }); 
                }                
            });
        });

        this.botaoPopup1.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        this.botaoPopup1.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        certo = this.add.image(512, 320, 'certo').setAlpha (0)

        errado = this.add.image(512, 320, 'errado').setAlpha (0)

        this.botaoSeta1 = this.add.image (921, 550, 'passar1').setInteractive().setAlpha(0).setScale(1.5)

        this.botaoSeta2 = this.add.image (921, 550, 'botao1').setInteractive().setAlpha(0).setScale(1.5)

        this.botaoVoltar = this.add.image (450,550, 'voltar').setInteractive().setAlpha(0).setScale(1.5)

        this.botaoSeta.on('pointerdown', () => {

            this.tweens.add({
                targets: [plataforma,botaoSeta, this.popupPlataforma],
                alpha: 0, // Destino do alpha (totalmente invisível)
                duration: 500, // Duração do tween em milissegundos
                ease: 'Linear', 
            });  

            this.tweens.add({
                targets: [certo],
                alpha: 1, // Destino do alpha (totalmente invisível)
                duration: 500, // Duração do tween em milissegundos
                ease: 'Linear', 
                delay: 500,
            });  

            this.tweens.add({
                targets: [this.botaoSeta1],
                alpha: 1, // Destino do alpha (totalmente invisível)
                duration: 500, // Duração do tween em milissegundos
                ease: 'Linear', 
            });  

            this.tweens.add({
                targets: [this.botaoSeta1],
                scaleX: this.botaoSeta1.scaleX * 1.1, 
                scaleY: this.botaoSeta1.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            });

            
        });

        this.botaoSeta.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        this.botaoSeta.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        this.botaoSeta1.on('pointerdown', () => {

            this.tweens.add({
                targets: [certo, this.botaoSeta1],
                alpha: 0, // Destino do alpha (totalmente invisível)
                duration: 500, // Duração do tween em milissegundos
                ease: 'Linear', 
            });  

            this.tweens.add({
                targets: [errado],
                alpha: 1, // Destino do alpha (totalmente invisível)
                duration: 500, // Duração do tween em milissegundos
                ease: 'Linear', 
                delay: 500,
            });  

            this.time.delayedCall(0, () => { 

                this.tweens.add({
                    targets: [this.botaoSeta2],
                    alpha: 1, // Destino do alpha (totalmente invisível)
                    duration: 500, // Duração do tween em milissegundos
                    ease: 'Linear', 
                });  

                this.tweens.add({
                    targets: [this.botaoSeta2],
                    scaleX: this.botaoSeta2.scaleX * 1.1, 
                    scaleY: this.botaoSeta2.scaleY * 1.1,
                    duration: 500, // duração em milissegundos
                    yoyo: true, // faça a animação voltar ao estado original
                    repeat: -1 // -1 para repetir indefinidamente
                });

            });
            
        });

        this.botaoSeta1.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        this.botaoSeta1.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        // botaovoltar.on('pointerdown', () => { 
            
        // });

        this.botaoSeta2.on('pointerdown', () => { 
            this.scene.start ('Level1');
            this.scene.stop('Level1tutorial')
        })

        this.botaoSeta2.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        this.botaoSeta2.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })


       });

      this.cameras.main.setBounds(0, 0, 1024, 1280);

      gameState.jaEntrouFase1 = true;
        

    };

    update () {

        const cameraSpeed = 2;
        const plataformaSpeed = 5;


            if (teclado.down.isDown && plataforma.y > 185) {
                plataforma.y -= plataformaSpeed;
            } 
            else if (teclado.up.isDown && plataforma.y < 450) {
                plataforma.y += plataformaSpeed;
           }

           plataforma.y = Phaser.Math.Clamp(plataforma.y, 0, this.cameras.main.height);
            

    };
}

var tela
var certo
var errado
var caixa
var text3
var text4
var text5
var tela2
var plataforma
var teclado
var botaoSeta
var botaoSeta1
var botaoSeta2
var botaoVoltar