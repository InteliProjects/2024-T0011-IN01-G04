class StartScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScreen' });
    }

    create() {
        // Exibir fundo sólido adequado às brand guidelines
        this.add.graphics()
            .fillStyle(0xF1EFED, 1)
            .fillRect(0, 0, this.game.config.width, this.game.config.height);

        // Exibe texto "clique em qualquer lugar para iniciar"
        this.startText = this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'CLIQUE PARA INICIAR', {
            fontSize: '24px',
            fontFamily: 'Oracle Sans',
            color: '#312D2A'
        }).setOrigin(0.5);

        this.startText.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        this.startText.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        // Define o comportamento interativo para a cena
        this.input.on('pointerdown', () => {
            this.scene.start('OASplashScreen');
        });
    

    }
}
