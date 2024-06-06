class Level3tutorial extends Phaser.Scene {

    constructor (){
        super({ key: 'Level3tutorial'});
    }

    preload() {

        this.load.image ('telaPC', './assets/MonitorPC.png');
        this.load.image ('popupCanais2', './assets/popupCanais2.png');
        this.load.image ('botao', './assets/botaoSeta.png');
        this.load.image ('canais', './assets/canais.png')

    }

    create(){

        // adicionando os assets e suas configirações no jogo 
        this.telaPC = this.add.image(0, 0, 'telaPC').setOrigin(0)
        this.popup2 = this.add.image (512,355, 'popupCanais2').setOrigin(0.5, -0.1).setAlpha(0);
        this.botaoPopup2 = this.add.image ( 921, 550, 'botao').setInteractive().setAlpha(0).setScale(1.5);
        this.canais = this.add.image (0,0, 'canais').setOrigin(0).setAlpha(0);
        this.botaoCanais = this.add.image ( 921, 550, 'botao').setInteractive().setAlpha(0).setScale(1.5);
        

        //animação para tornar visível o pop-up e o botão
        this.tweens.add ({
            targets: [this.popup2, this.botaoPopup2],
            alpha: 1, 
            duration: 500, 
            ease: 'Linear',  
        });

        //animação para o botão ficar piscando
        this.tweens.add({
            targets: this.botaoPopup2,
            scaleX: this.botaoPopup2.scaleX * 1.15, // Aumenta a escala em 15%
            scaleY: this.botaoPopup2.scaleY * 1.15,
            duration: 500, // duração em milissegundos
            yoyo: true, // faça a animação voltar ao estado original
            repeat: -1 // -1 para repetir indefinidamente
        });

        
            //Comandos que irão ser executados quando o botaoPopup2 for acionado
            this.botaoPopup2.on('pointerdown', () => { 

                //animação para tornar invisível o pop-up e o botão
                this.tweens.add ({
                    targets: [this.popup2, this.botaoPopup2],
                    alpha: 0, 
                    duration: 500, 
                    ease: 'Linear',  

                    // Comando estabelecendo outra ordem de comandos quando o anterior for concluído
                    onComplete: () => {

                        this.tweens.add ({
                            targets: [this.canais, this.botaoCanais],
                            alpha: 1, 
                            duration: 500, 
                            ease: 'Linear'
                        })

                        //animação para o botão ficar piscando
                        this.tweens.add({
                            targets: this.botaoCanais,
                            scaleX: this.botaoCanais.scaleX * 1.15, // Aumenta a escala em 15%
                            scaleY: this.botaoCanais.scaleY * 1.15,
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

            this.botaoCanais.on('pointerdown', () => {
                this.scene.start ('Level3');
            })

            this.botaoCanais.on('pointerover', () => {
                this.input.setDefaultCursor("pointer");
            })
            this.botaoCanais.on('pointerout', () => {
                this.input.setDefaultCursor("default");
            })
    }

    update(){
    }
}