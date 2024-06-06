class Level5tutorial extends Phaser.Scene {
    constructor (){
        super({ key: 'Level5tutorial'});
        this.cameraLocked = false
    }
    preload() {
        this.load.image('telaPC', './assets/MonitorPC.png');
        this.load.image ('Tutorial', './assets/poupupLevel5tutorial.png');
        this.load.image ('botaoCheck', './assets/botaotexto1.png');
    }
    create(){

        // adicionando os assets e suas configirações no jogo
        this.telaPC = this.add.image(0, 0, 'telaPC').setOrigin(0)
        this.tutorialSuporte = this.add.image (520,330, 'Tutorial').setScale(1.0).setAlpha(0);
        this.botaoSuporte = this.add.image ( 820, 460, 'botaoCheck').setInteractive().setAlpha(0).setScale(1.2);

        //animação para tornar visível o tutorial e o botão
        this.tweens.add ({
            targets: [this.tutorialSuporte, this.botaoSuporte],
            alpha: 1,
            duration: 1000,
            ease: 'Linear',
        });

        //animação para o botão ficar piscando
        this.tweens.add({
            targets: this.botaoSuporte,
            scaleX: this.botaoSuporte.scaleX * 1.15, // Aumenta a escala em 15%
            scaleY: this.botaoSuporte.scaleY * 1.15,
            duration: 500, // duração em milissegundos
            yoyo: true, // faça a animação voltar ao estado original
            repeat: -1 // -1 para repetir indefinidamente
        });
            
        //Comandos que irão ser executados quando o botaoPopup1 for acionado
        this.botaoSuporte.on('pointerdown', () => {
            
            this.scene.start ('Level5');
            this.input.setDefaultCursor("default");
        })
        this.botaoSuporte.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botaoSuporte.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });
           
    }
    update(){
    }
}