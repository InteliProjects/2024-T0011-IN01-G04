class Level3 extends Phaser.Scene {
    constructor (){
        super({ key: 'Level3'});
        this.cameraLocked = false
    }

    preload() {

        this.load.image('escritorio3', './assets/office_canais.png');
        this.load.spritesheet('computador', './assets/computador.png', {frameWidth: 32, frameHeight: 13});
        this.load.image('popupCanais', './assets/popupCanais.png');
        this.load.image('botao','./assets/botaoSeta.png');
        this.load.image ('prancheta', './assets/prancheta.png');
        this.load.image('painel', './assets/painel.png');
        this.load.image('seta', './assets/seta.png');
        this.load.image('popupCanais3', './assets/popupCanais3.png');

    }

    create(){

        this.escritorio3 = this.add.image(0, 0, 'escritorio3').setOrigin(0)
        this.computador = this.add.sprite(690, 487, 'computador').setScale(3.7).setInteractive().setAlpha(1)
        this.painel = this.add.image (1350, 497, 'painel').setScale(2).setInteractive()
        
        //Animação do computador de ligado e desligado
        this.anims.create({
            key: 'ligar1', 
            frames: this.anims.generateFrameNumbers('computador', { start: 0, end: 2 }), 
            frameRate: 10, 
            repeat: 0 
        });

        this.cameraLocked = true; //travando a movimentação da tela

        //pop-up de boas-vindas da tela inicial
        this.popup1 = this.add.image(512, 355, 'popupCanais').setOrigin(0.5, -0.1).setAlpha(0);

        //pop-up de direcionamento para o minigame
        this.popup2 = this.add.image(512, 355, 'popupCanais3').setOrigin(0.5, -0.1).setAlpha(0);

        //botão do pop-up 3
        this.botaoPopup2 = this.add.sprite( 921, 550, 'botao').setInteractive().setAlpha(0).setScale(1.5);

        //adicionando seta para maior intuitividade para o jogador
        this.seta = this.add.image( 900, 400, 'seta').setScale(2).setAlpha(0)

        // Caso seja a primeira vez a entrar na cena Level3 irá executar todo comando contido nas chaves
        if (!gameState.jaEntrouFase3) { 

            //botão do pop-up
            this.botaoPopup1 = this.add.sprite( 921, 550, 'botao').setInteractive().setAlpha(0).setScale(1.5);

            //animação para tornar visível o pop-up e o botão
            this.tweens.add ({
                targets: [this.popup1, this.botaoPopup1],
                alpha: 1, 
                duration: 250, 
                ease: 'Linear',  
            });

            //animação para o botão ficar piscando
            this.tweens.add({
                targets: this.botaoPopup1,
                scaleX: this.botaoPopup1.scaleX * 1.15, // Aumenta a escala em 15%
                scaleY: this.botaoPopup1.scaleY * 1.15,
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
                    duration: 250, 
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

                            this.time.delayedCall(500, () => { //adicionando um delay para que o usuario consiga vizualizar a animação do ligado

                                this.scene.start ('Level3tutorial');
                            
                            })            
                        });

                        this.computador.on('pointerover', () => {
                            this.input.setDefaultCursor("pointer");
                        })
                        this.computador.on('pointerout', () => {
                            this.input.setDefaultCursor("default");
                        })

                    }

                });
                
            }) 

            this.botaoPopup1.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.botaoPopup1.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })
        }
        //Senão for a primeira vez a entrar no Level3 irá executar todo comando contido nas chaves
        else {

            this.cameraLocked = true //travando a movimentação da tela
            
            //animação para tornar visível o pop-up e o botão
            this.tweens.add ({
                targets: [this.popup2, this.botaoPopup2],
                    alpha: 1, 
                    duration: 250, 
                    ease: 'Linear',  
            });

            //animação para botãoPopup2
            this.tweens.add({
                targets: this.botaoPopup2,
                scaleX: this.botaoPopup2.scaleX * 1.15, // Aumenta a escala em 15%
                scaleY: this.botaoPopup2.scaleY * 1.15,
                duration: 500, // duração em milissegundos
                yoyo: true, // faça a animação voltar ao estado original
                repeat: -1 // -1 para repetir indefinidamente
            }); 


            //Comandos que irão ser executados quando o botaoPopup3 for acionado
            this.botaoPopup2.on('pointerdown', () => { 

                //animação para tornar invisível o pop-up e o botão
                this.tweens.add ({
                    targets: [this.popup2, this.botaoPopup2],
                    alpha: 0, 
                    duration: 250, 
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


                        //Animação para o painel ficar piscando e atrair a atenção do jogador
                        this.tweens.add({
                            targets: this.painel,
                            scaleX: this.painel.scaleX * 1.08, // Aumenta a escala em 15%
                            scaleY: this.painel.scaleY * 1.08,
                            duration: 500, // duração em milissegundos
                            yoyo: true, // faça a animação voltar ao estado original
                            repeat: -1 // -1 para repetir indefinidamente
                        }); 

                    }
                })
            })

            this.botaoPopup2.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.botaoPopup2.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })

            //Caso o painel seja clicado seja redirecionado para a cena do minigame do nível 3
            this.painel.on('pointerdown', () => { 
                this.scene.start ('Minigame3');
            });

            this.painel.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.painel.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })
        } 



        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setBounds(0, 0, 2370, 600);

        gameState.jaEntrouFase3 = true;


    }

    update(){

        const cameraSpeed = 2;

        if (!this.cameraLocked) { // Verifica se a câmera está bloqueada
            if (this.cursors.left.isDown && this.cameras.main.scrollX > 0) {
                this.cameras.main.scrollX -= cameraSpeed;
            } 
            else if (this.cursors.right.isDown && this.cameras.main.scrollX < 580) {
                this.cameras.main.scrollX += cameraSpeed;
           }
        }


    }

}


