class Minigame5 extends Phaser.Scene {
    constructor (){
        super({ key: 'Minigame5'});
    }

    preload() {

        this.load

        //assets gerais
        this.load.image ('certo3', './assets/suporteCerto.png');
        this.load.image ('errado3', './assets/suporteErrado.png');
        this.load.image('destinoSuporte', './assets/destinoSuporte.png')

        //assets da primeira pergunta
        this.load.image('pergunta1', './assets/pergunta1.png');
        this.load.image('1Card1', './assets/1Card1.png');
        this.load.image('1Card2', './assets/1Card2.png');
        this.load.image('1Card3', './assets/1Card3.png');
        this.load.image('1Card4', './assets/1Card4.png');
        this.load.image('1Card5', './assets/1Card5.png');
        this.load.image('1Card6', './assets/1Card6.png');
        this.load.image('1Card7', './assets/1Card7.png');
        this.load.image('1Card8', './assets/1Card8.png');
        this.load.image('suporteParabens1', './assets/suporteParabens1.png')

        //assets da segunda pergunta
        this.load.image('pergunta2', './assets/pergunta2.png');
        this.load.image('2Card1', './assets/2card1.png');
        this.load.image('2Card2', './assets/2card2.png');
        this.load.image('2Card3', './assets/2card3.png');
        this.load.image('2Card4', './assets/2card4.png');
        this.load.image('2Card5', './assets/2card5.png');
        this.load.image('2Card6', './assets/2card6.png');
        this.load.image('2Card7', './assets/2card7.png');
        this.load.image('2Card8', './assets/2card8.png');
        this.load.image('parabens2', './assets/parabens2.png')

        this.load.image('botaoSeta', './assets/botaoSeta.png')
        this.load.image('botaoCheck', './assets/botaotexto1.png')


        this.load.image('parabensFinalSuporte', './assets/parabensFinalSuporte.png')
    }

    create(){

        this.pergunta1 = this.add.image(0, 0, 'pergunta1').setOrigin(0).setAlpha(1);
        this.pergunta2 = this.add.image(0, 0, 'pergunta2').setOrigin(0).setAlpha(0)


        //cars com partes da pergunta 1
        this.card11 = this.add.image(282, 395, '1Card1').setAlpha(1).setInteractive();
        this.card12 = this.add.image(425, 395, '1Card2').setAlpha(1).setInteractive();
        this.card13 = this.add.image(568, 395, '1Card3').setAlpha(1).setInteractive();
        this.card14 = this.add.image(711, 395, '1Card4').setAlpha(1).setInteractive();
        this.card15 = this.add.image(282,465, '1Card5').setAlpha(1).setInteractive();
        this.card16 = this.add.image(425, 465, '1Card6').setAlpha(1).setInteractive();
        this.card17 = this.add.image(568, 465, '1Card7').setAlpha(1).setInteractive();
        this.card18 = this.add.image(711, 465, '1Card8').setAlpha(1).setInteractive();

        // cards com partes da pergunta 2
        this.card21 = this.add.image(282, 395, '2Card1').setAlpha(0).setInteractive();
        this.card22 = this.add.image(425, 395, '2Card2').setAlpha(0).setInteractive();
        this.card23 = this.add.image(568, 395, '2Card3').setAlpha(0).setInteractive();
        this.card24 = this.add.image(711, 395, '2Card4').setAlpha(0).setInteractive();
        this.card25 = this.add.image(282,465, '2Card5').setAlpha(0).setInteractive();
        this.card26 = this.add.image(425, 465, '2Card6').setAlpha(0).setInteractive();
        this.card27 = this.add.image(568, 465, '2Card7').setAlpha(0).setInteractive();
        this.card28 = this.add.image(711, 465, '2Card8').setAlpha(0).setInteractive();

        //espaço para encaixe dos cards da pergunta 1
        this.encaixarcard1 = this.add.image(282, 187, 'destinoSuporte').setAlpha(0);
        this.encaixarcard2 = this.add.image(425, 187, 'destinoSuporte').setAlpha(0);
        this.encaixarcard3 = this.add.image(568, 187, 'destinoSuporte').setAlpha(0);
        this.encaixarcard4 = this.add.image(711, 187, 'destinoSuporte').setAlpha(0);
        this.encaixarcard5 = this.add.image(282, 261, 'destinoSuporte').setAlpha(0);
        this.encaixarcard6 = this.add.image(425, 261, 'destinoSuporte').setAlpha(0);
        this.encaixarcard7 = this.add.image(568, 261, 'destinoSuporte').setAlpha(0);
        this.encaixarcard8 = this.add.image(711, 261, 'destinoSuporte').setAlpha(0);

        //mensagem para quando os cards estiverem corretos
        this.suporteParabens1 = this.add.image(495, 320, 'suporteParabens1').setAlpha(0).setScale(0.93, 0.9)
        this.parabens2 = this.add.image(495, 320, 'parabens2').setAlpha(0).setScale(0.93, 0.9)

        this.parabensFinal = this.add.image(495, 320, 'parabensFinalSuporte').setAlpha(0).setScale(0.93, 0.9)

        this.botaoPassar1 = this.add.image(720, 420, 'botaoSeta').setInteractive().setAlpha(0).setScale(1.5)
        this.botaoPassar1.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botaoPassar1.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });
        this.botaoPassar2 = this.add.image(720, 420, 'botaoSeta').setInteractive().setAlpha(0).setScale(1.5)
        this.botaoPassar2.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botaoPassar2.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });
        this.botaoCheck = this.add.image(720, 420, 'botaoCheck').setInteractive().setAlpha(0).setScale(1.5)
        this.botaoCheck.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botaoCheck.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });

        // Atribuindo identificadores aos cards da pergunta 1
        this.card11.id = 11;
        this.card12.id = 12;
        this.card13.id = 13;
        this.card14.id = 14;
        this.card15.id = 15;
        this.card16.id = 16;
        this.card17.id = 17;
        this.card18.id = 18;

        // Atribuindo identificadores aos cards da pergunta 2
        this.card21.id = 21;
        this.card22.id = 22;
        this.card23.id = 23;
        this.card24.id = 24;
        this.card25.id = 25;
        this.card26.id = 26;
        this.card27.id = 27;
        this.card28.id = 28;

        // Variáveis para verificar se os blocos estão sobre as áreas corretas da pergunta 1
        this.over11 = false;
        this.over12 = false;
        this.over13 = false;
        this.over14 = false;
        this.over15 = false;
        this.over16 = false;
        this.over17 = false;
        this.over18 = false;

        // Variáveis para verificar se os blocos estão sobre as áreas corretas da pergunta 2
        this.over21 = false;
        this.over22 = false;
        this.over23 = false;
        this.over24 = false;
        this.over25 = false;
        this.over26 = false;
        this.over27 = false;
        this.over28 = false;

        // configuração para arrastar cards
        this.input.setDraggable([this.card11, this.card12, this.card13, this.card14, this.card15, this.card16, this.card17, this.card18, this.card21, this.card22, this.card23, this.card24, this.card25, this.card26, this.card27, this.card28]);

        // Referência ao objeto Minigame5 dentro dos eventos de entrada
        const self = this;

        // Habilitando o drop zone
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // Configurações da pergunta 1

        this.input.on('dragend', function (pointer, gameObject) { 

            // verifica cards do encaixe 1
            if (gameObject.x > 182 && gameObject.x < 382 && gameObject.y > 100 && gameObject.y < 250) {

                if (gameObject.id === 17) {
                    gameObject.x = 282; 
                    gameObject.y = 187;
                    self.over17 = true;
                } 

                else if (gameObject.id === 21) {
                    gameObject.x = 282; 
                    gameObject.y = 187;
                    self.over21 = true;
                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                }
            } 

            //Verifica cards encaixe 2
            else if (gameObject.x > 320 && gameObject.x < 510 && gameObject.y > 100 && gameObject.y < 250) {

                if (gameObject.id === 11) {
                    gameObject.x = 425; 
                    gameObject.y = 187;
                    self.over11 = true;
                } 

                else if (gameObject.id === 26) {
                    gameObject.x = 425; 
                    gameObject.y = 187;
                    self.over26 = true;
                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                }
            } 

            //Verifica cards encaixe 3
            if (gameObject.x > 490 && gameObject.x < 640 && gameObject.y > 100 && gameObject.y < 250) {

                if (gameObject.id === 12) {
                    gameObject.x = 568; 
                    gameObject.y = 187;
                    self.over12 = true;
                } 

                else if (gameObject.id === 24) {
                    gameObject.x = 568; 
                    gameObject.y = 187;
                    self.over24 = true;
                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                }
            }

            // verifica cards encaixe 4
            else if (gameObject.x > 650 && gameObject.x < 785 && gameObject.y > 100 && gameObject.y < 250) {

                if (gameObject.id === 16) {
                    gameObject.x = 711; 
                    gameObject.y = 187;
                    self.over16 = true;
                } 

                else if (gameObject.id === 28) {
                    gameObject.x = 711; 
                    gameObject.y = 187;
                    self.over28 = true;
                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                }
            } 

            // verifica cards do encaixe 5
            else if (gameObject.x > 182 && gameObject.x < 382 && gameObject.y > 190 && gameObject.y < 340) {

                if (gameObject.id === 18) {
                    gameObject.x = 282; 
                    gameObject.y = 261;
                    self.over18 = true;

                } 

                else if (gameObject.id === 27) {
                    gameObject.x = 282; 
                    gameObject.y = 261;
                    self.over27 = true;

                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                }
            } 

            // verifica cards encaixe 6
            else if (gameObject.x > 320 && gameObject.x < 510 && gameObject.y > 190 && gameObject.y < 340) {

                if (gameObject.id === 13) {
                    gameObject.x = 425; 
                    gameObject.y = 261;
                    self.over13 = true;

                }  

                else if (gameObject.id === 22) {
                    gameObject.x = 425; 
                    gameObject.y = 261;
                    self.over22 = true;
                }  
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                }
            }

            // verifica cards encaixe 7
            else if (gameObject.x > 490 && gameObject.x < 640 && gameObject.y > 190 && gameObject.y < 340) {

                if (gameObject.id === 15) {
                    gameObject.x = 568; 
                    gameObject.y = 261;
                    self.over15 = true;

                } 

                else if (gameObject.id === 25) {
                    gameObject.x = 568; 
                    gameObject.y = 261;
                    self.over25 = true;

                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                }
            } 

            // verifica cards do encaixe 8
            else if (gameObject.x > 650 && gameObject.x < 785 && gameObject.y > 190 && gameObject.y < 340) {

                if (gameObject.id === 14) {
                    gameObject.x = 711; 
                    gameObject.y = 261;
                    self.over14 = true;

                } 

                else if (gameObject.id === 23) {
                    gameObject.x = 711; 
                    gameObject.y = 261;
                    self.over23 = true;
                } 
                
                // comandos caso o card não esteja no local adequado
                else {

                    // voltar para a origem do card
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;

                }
            } 

             // Verifica se todos os cards estão no local correto
             if (self.over11 && self.over12 && self.over13 && self.over14 && self.over15 && self.over16 && self.over17 && self.over18) {
                self.tweens.add({
                    targets: [self.pergunta1, self.card11, self.card12, self.card13,self.card14, self.card15, self.card16,self.card17, self.card18 ],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                // Se todos os cards estiverem no lugar certo, irá aparecer um pop up de parabéns
                
                self.tweens.add({
                    
                    targets: [self.suporteParabens1, self.botaoPassar1],
                    alpha: 1,
                    duration: 600,
                    ease: 'Linear',

                    onComplete: () => {
                        self.tweens.add({
                            targets: [self.botaoPassar1],
                            scaleX: self.botaoPassar1.scaleX * 1.1, 
                            scaleY: self.botaoPassar1.scaleY * 1.1,
                            duration: 500, // duração em milissegundos
                            yoyo: true, // faça a animação voltar ao estado original
                            repeat: -1 // -1 para repetir indefinidamente
                        });
                        

                        //animação para sumir com todos cards
                       
                        //animação sumir com a mensagem de parabéns
                        self.botaoPassar1.on('pointerdown', () => {
                            self.tweens.add({
                            targets: [self.suporteParabens1, self.botaoPassar1],
                            alpha: 0,
                            duration: 600,
                            ease: 'Linear',
                            onComplete: () => {
                                self.suporteParabens1.destroy()
                                self.botaoPassar1.destroy()
                                self.tweens.add({
                                    targets: [self.card11, self.card12, self.card13, self.card14, self.card15, self.card16, self.card17, self.card18],
                                    alpha: 0,
                                    duration: 600,
                                    ease: 'Linear',
                                    onComplete:() =>{
                                        self.card11.destroy()
                                        self.card12.destroy()
                                        self.card13.destroy()
                                        self.card14.destroy()
                                        self.card15.destroy()
                                        self.card16.destroy()
                                        self.card17.destroy()
                                        self.card18.destroy()
                                        self.over11 = false;
                                        self.over12 = false;
                                        self.over13 = false;
                                        self.over14 = false;
                                        self.over15 = false;
                                        self.over16 = false;
                                        self.over17 = false;
                                        self.over18 = false;
                                    }
                                    
                                })
                                self.tweens.add({
                                    targets: [self.pergunta1, self.pergunta2, self.card21, self.card22, self.card23, self.card24, self.card25, self.card26, self.card27, self.card28],
                                    alpha: 1,
                                    duration: 1000,
                                    ease: 'Linear',
                                    
                        })
                            }
                        })
                        self.input.setDefaultCursor("default");
                    })
                        //animação para apararecer os assets da segunda pergunta
                        

                    }                    
                });                    
            } 

            // Verifica se todos os cards estão no local correto da pergunta 2
            if (self.over21 && self.over22 && self.over23 && self.over24 && self.over25 && self.over26 && self.over27 && self.over28) {
                self.tweens.add({
                    targets: [self.pergunta1, self.pergunta2, self.card21, self.card22, self.card23,self.card24, self.card25, self.card26,self.card27, self.card28 ],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                // Se todos os cards estiverem no lugar certo, irá aparecer um pop up de parabéns
                self.tweens.add({
                    targets: [self.parabens2, self.botaoPassar2],
                    alpha: 1,
                    duration: 600,
                    ease: 'Linear',

                    onComplete: () => {
                        self.tweens.add({
                            targets: [self.botaoPassar2],
                            scaleX: self.botaoPassar2.scaleX * 1.1, 
                            scaleY: self.botaoPassar2.scaleY * 1.1,
                            duration: 500, // duração em milissegundos
                            yoyo: true, // faça a animação voltar ao estado original
                            repeat: -1 // -1 para repetir indefinidamente
                        });
                        
                        

                        self.botaoPassar2.on('pointerdown', () => {

                            
                        self.tweens.add({
                            targets: [self.parabens2, self.botaoPassar2],
                            alpha: 0,
                            duration: 600,
                            ease: 'Linear',
                            onComplete(){
                                self.tweens.add({
                                    targets: [self.parabensFinal, self.botaoCheck],
                                    alpha: 1,
                                    duration: 600,
                                    ease: 'Linear',
                                    onComplete:() => {

                                        self.tweens.add({
                                            targets: [self.botaoCheck],
                                            scaleX: self.botaoCheck.scaleX * 1.1, 
                                            scaleY: self.botaoCheck.scaleY * 1.1,
                                            duration: 500, // duração em milissegundos
                                            yoyo: true, // faça a animação voltar ao estado original
                                            repeat: -1 // -1 para repetir indefinidamente
                                        });
                                        
                                    }
                                })
                                self.botaoCheck.on('pointerdown', () =>{
                                    self.scene.start("Mapa")
                                    gameState.jaConcluiuFase5 = true;
                                    self.input.setDefaultCursor("default");
                                })
                            }
                        })
                        self.input.setDefaultCursor("default");
                        })
                        //animação para sumir com todos cards
                        

                        //animação sumir com a mensagem de parabéns
                        


                    }                    
                });     
                
            


            }


           
        });
    }
}