class Level5 extends Phaser.Scene {

    constructor (){

        super({ key: 'Level5'});
        this.cameraLocked = false

    }
    preload() {

        this.load.image('escritorio5', './assets/office_suporte.png');
        this.load.image('poupupInicio', './assets/popupLevel5.png');
        this.load.image('poupupAfterTutorial', './assets/poupupAfterTutorial.png');
        this.load.image('botao', './assets/botaoSeta.png');
        this.load.image('botaoCheck', './assets/botaotexto1.png')
        this.load.spritesheet('computador', './assets/computador.png', {frameWidth: 32, frameHeight: 13});
        this.load.image('seta', './assets/seta.png')

    }


    create() {
        this.escritorio5 = this.add.image(0, 0, 'escritorio5').setOrigin(0);
        this.computador  = this.add.sprite(805, 490, 'computador').setScale(3.7).setInteractive().setAlpha(1)
        this.computador2  = this.add.sprite(1550, 490, 'computador').setScale(3.7).setInteractive().setAlpha(1)
        //this.computador3  = this.add.sprite(1130, 500, 'computador').setScale(3.7).setInteractive().setAlpha(1)

        //Animação do computador de ligado e desligado
        this.anims.create({
            key: 'ligar1',
            frames: this.anims.generateFrameNumbers('computador', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: 0
        });
        this.cameraLocked = false; //travando a movimentação da tela

        //pop-up de boas-vindas da tela inicial
        this.popup1 = this.add.image(512,355, 'poupupInicio').setAlpha(0).setOrigin(0.5, -0.1);

        //pop-up de direcionamento para o minigame
        this.poupupAfterTutorial = this.add.image(512,355, 'poupupAfterTutorial').setOrigin(0.5, -0.1).setAlpha(0);

        //botão do pop-up 3
        this.botaoPopup2 = this.add.sprite( 921, 550, 'botaoCheck').setInteractive().setAlpha(0).setScale(1.5);

        //adicionando seta para maior intuitividade para o jogador
        this.seta = this.add.image( 900, 400, 'seta').setScale(2).setAlpha(0)

        // Caso seja a primeira vez a entrar na cena Level5 irá executar todo comando contido nas chaves
        if (!gameState.jaEntrouFase5) {

            //botão do pop-up
            this.botaoPopup1 = this.add.sprite( 921, 550, 'botaoCheck').setInteractive().setAlpha(0).setScale(1.5);

            //animação para tornar visível o pop-up e o botão
            this.tweens.add ({
                targets: [this.popup1, this.botaoPopup1],
                alpha: 1,
                duration: 1000,
                ease: 'Linear',
            });
            
            //animação para o botão ficar piscando
            this.tweens.add({
                targets: [this.botaoPopup1],
                scaleX: this.botaoPopup1.scaleX * 1.1, 
                scaleY: this.botaoPopup1.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            }); 

            //Comandos que irão ser executados quando o botaoPopup1 for acionado
            this.botaoPopup1.on('pointerdown', () => {
                //animação para tornar invisível o pop-up e o botão
                this.tweens.add ({
                    targets: [this.popup1, this.botaoPopup1],
                    alpha: 0,
                    duration: 1000,
                    ease: 'Linear',
                    // Comando estabelecendo outra ordem de comandos quando o anterior for concluído
                    onComplete: () => {
                        //Animação para o computador ficar piscando e atrair a atenção do jogador
                        this.tweens.add({
                            targets: this.computador,
                            scaleX: this.computador.scaleX * 1.15, // Aumenta a escala em 15%
                            scaleY: this.computador.scaleY * 1.15,
                            duration: 500, // duração em milissegundos
                            yoyo: true, // faça a animação voltar ao estado original
                            repeat: -1 // -1 para repetir indefinidamente
                        });
                        //Adicionando a mudança de cena quando o botão do computador for clicado
                        this.computador.on('pointerdown', () => {
                            this.computador.anims.play('ligar1', true); //adicionando a animação do computador ligado
                            this.time.delayedCall(1000, () => { //adicionando um delay para que o usuario consiga vizualizar a animação do ligado
                                this.scene.start ('Level5tutorial');
                                
                            })
                            this.input.setDefaultCursor("default");
                        });
                        this.computador.on('pointerover', () => {
                            this.input.setDefaultCursor("pointer");
                        })
                        this.computador.on('pointerout', () => {
                            this.input.setDefaultCursor("default");
                        })
                    }
                });
                this.input.setDefaultCursor("default");
            })
            this.botaoPopup1.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.botaoPopup1.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })
        }

        //Senão for a primeira vez a entrar no Level5 irá executar todo comando contido nas chaves
        else {
            this.cameraLocked = true //travando a movimentação da tela
            //animação para tornar visível o pop-up e o botão
            this.tweens.add ({
                targets: [this.poupupAfterTutorial, this.botaoPopup2],
                    alpha: 1,
                    duration: 1000,
                    ease: 'Linear',

            });
            //animação para botãoPopup2
            this.tweens.add({
                targets: [this.botaoPopup2],
                scaleX: this.botaoPopup2.scaleX * 1.1, 
                scaleY: this.botaoPopup2.scaleY * 1.1,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            });

            //Comandos que irão ser executados quando o botaoPopup3 for acionado
            this.botaoPopup2.on('pointerdown', () => {
                //animação para tornar invisível o pop-up e o botão
                this.tweens.add ({
                    targets: [this.poupupAfterTutorial, this.botaoPopup2],
                    alpha: 0,
                    duration: 1000,
                    ease: 'Linear',
                    // Comando estabelecendo outra ordem de comandos quando o anterior for concluído
                    onComplete: () => {
                        this.cameraLocked = false; //destravando a movimentação da tela
                        this.seta.setAlpha(1)

                                    //Adicionando animação da seta para deixar mais intuitivo para o jogador
                        this.tweens.add({
                            targets: this.seta, // Adiciona a imagem da seta como um alvo do tween
                            x: 1000, // Define o destino X para onde a seta vai
                            duration: 500, // Duração do tween em milissegundos para ir para frente
                            yoyo: true, // Permite o retorno da seta
                            repeat: -1 // Repete indefinidamente
                        });
                        // Animação para o computador2 ficar piscando e atrair a atenção do jogador
                        this.tweens.add({
                            targets: this.computador2,
                            scaleX: this.computador2.scaleX * 1.08, // Aumenta a escala em 15%
                            scaleY: this.computador2.scaleY * 1.08,
                            duration: 500, // duração em milissegundos
                            yoyo: true, // faça a animação voltar ao estado original
                            repeat: -1 // -1 para repetir indefinidamente
                        });
                    }
                })
                this.input.setDefaultCursor("default");
            })
            this.botaoPopup2.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.botaoPopup2.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })

                // Caso o computador2 seja clicado seja redirecionado para a cena do minigame do nível 3
                this.computador2.on('pointerdown', () => {
                    this.scene.start ('Minigame5');
                    this.input.setDefaultCursor("default");
                });
                this.computador2.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                })
                this.computador2.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                })
        }


        this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, 1856, 640);
        gameState.jaEntrouFase5 = true;
    }
    update(){
        const cameraSpeed = 2;
        if (!this.cameraLocked) { // Verifica se a câmera está bloqueada
            if (this.cursors.left.isDown) {
                this.cameras.main.scrollX -= cameraSpeed;
            }
            else if (this.cursors.right.isDown) {
                this.cameras.main.scrollX += cameraSpeed;
           }
        }
    }
}