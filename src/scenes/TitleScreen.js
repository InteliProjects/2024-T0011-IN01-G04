class TitleScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'TitleScreen' });
        this.carroAndar = false;
    }

    preload() {
        // Carregar fonte e imagens
        this.load.image('TitleScreenBG', './assets/RedwoodCity.png');
        this.load.image('TitleScreenLogo', './assets/logoTitleScreenRedesign.png');
        this.load.image('OracleTag', './assets/OracleTag.png');
        this.load.spritesheet('carroVermelho', './assets/carroVermelho.png', { frameWidth: 48, frameHeight: 32 });
        this.load.image('predio1', './assets/predio-cadastro.png')
        this.load.image('predio2', './assets/predio2.png')
        this.load.image('predio3', './assets/predio-canais.png')
        this.load.image('predio4', './assets/predio-cloud.png')
        this.load.image('predio5', './assets/predio-suporte.png')
        this.load.image('lockedPredio2', './assets/lockedPredio2.png');
        this.load.image('lockedPredio3', './assets/lockedPredio3.png');
        this.load.image('lockedPredio4', './assets/lockedPredio4.png');
        this.load.image('lockedPredio5', './assets/lockedPredio5.png');
        this.load.image('Start', './assets/Start.png');
        this.load.audio('ambientSound', './assets/sounds/daydream.wav');
        this.load.audio('carEngine', './assets/sounds/carEngine.mp3');

    }

    create() {

        this.cameras.main.setBounds(0, 0, 2048, 640);

        // Definir imagem de fundo
        this.add.image(0, 0, 'TitleScreenBG').setOrigin(0);

        const start = this.add.image(504, 410, 'Start').setScale(0.15).setInteractive();

        const predio1 = this.add.image( 1152, 295.2, 'predio1').setScale(0.85);

        const predio2 = this.add.image(1256.1, 216.3, 'predio2').setScale(0.992);

        const predio3 = this.add.image(1487.7, 159.5, 'predio3').setScale(0.999);

        const predio4 = this.add.image( 1752, 215.5, 'predio4').setScale(0.999);

        const predio5 = this.add.image(1903.9, 239.4,  'predio5').setScale(1);

        this.lockedPredio2 = this.add.image(1256.1, 216.3, 'lockedPredio2').setScale(0.992).setDepth(1);
        this.lockedPredio3 = this.add.image(1487.7, 159.5, 'lockedPredio3').setScale(0.999).setDepth(1);
        this.lockedPredio4 = this.add.image(1752, 215.5, 'lockedPredio4').setScale(0.999).setDepth(1);
        this.lockedPredio5 = this.add.image(1903.9, 239.4,  'lockedPredio5').setScale(1).setDepth(1);

        // Esticar a imagem de fundo para preencher a tela do jogo
        

        const gameWidth = this.game.config.width;
        const logoScale = 0.5; // Ajuste a escala conforme necessário
        
        // Carregar e posicionar a tag Oracle para que obedeça o brand guidelines
        const oracleTag = this.add.image(gameWidth - (152 * logoScale), this.game.config.height, 'OracleTag').setOrigin(1, 1);
        oracleTag.setScale(logoScale);

        // // Configurar e adicionar texto de Bem-vindo
        // this.add.text(this.cameras.main.centerX, 100, 'Bem-Vindo', {
        //     fontFamily: 'Oraclesans',
        //     fontSize: '48px',
        //     color: '#ffffff'
        // }).setOrigin(0.5);

        // Configurar imagem do logo
        const logo = this.add.image(500, 350, 'TitleScreenLogo').setScale(1);
        

        this.carroVermelho = this.add.sprite(-200, 565, 'carroVermelho').setScale(1.2);
        
        // Referência para o som do carro
        this.carEngineSound = this.sound.add('carEngine', { loop: false, volume: 0 });

        // Configura a animação de virar o carro
        this.anims.create({ 
            key: 'vira',
            frames: this.anims.generateFrameNumbers('carroVermelho', { start: 0, end: 1 }),
            frameRate: 32,
            repeat: 0
        });
    
        // Interação alteração de cor do botão quando mouse em cima
        // playButton.on('pointerover', () => {
        //     this.game.canvas.style.cursor = 'pointer';
        //     playButton.clear(); // Clear the previous button state
        //     playButton.fillStyle(0xff5555, 1); // Lighter red color
        //     playButton.fillRoundedRect(this.cameras.main.centerX - 100, 425 - 45, 200, 90, 20);
        // });
        
        // Interação alteração de cor do botão quando mouse em cima
        // playButton.on('pointerout', () => {
        //     this.game.canvas.style.cursor = 'default';
        //     playButton.clear(); // Clear the hover state
        //     playButton.fillStyle(0xff0000, 1); // Original dark red color
        //     playButton.fillRoundedRect(this.cameras.main.centerX - 100, 425 - 45, 200, 90, 20);
        // });       

        // Adicionar interatividade ao objeto gráfico em vez do texto
        start.on('pointerdown', () => {
            // Navegar para a próxima cena quando o botão for clicado
            this.carroAndar = true;
           
            if (!this.soundAmbiente) {
                this.soundAmbiente = this.sound.add('ambientSound', { loop: true });
                this.soundAmbiente.play();
            }
            // Mover a câmera para o carro imediatamente
            // this.cameras.main.startFollow(this.carroVermelho);
            this.tweens.add({
                targets: [logo, oracleTag, start],
                alpha: 0,
                duration: 1000,
                ease: 'Linear',
                onComplete: () => {
                    logo.destroy();
                    oracleTag.destroy();
                    start.destroy();
                    // this.cameras.main.setBounds(-600, 400, 2400, 600);
                    this.cameras.main.startFollow(this.carroVermelho);

                } 
                    
            });
            this.input.setDefaultCursor("default");
        });
        start.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        })
        start.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        })

        this.cameras.main.fadeIn(1000, 0, 0, 0);
    }

    update() {
        if (this.carroAndar && this.carroVermelho.x < 1150) {
            
            // Iniciar o som do carro quando o carro começa a se mover
            this.carEngineSound.play();

            // Aumentar o volume de 0 para 1 em 1 segundo
            // this.tweens.add({
            //     targets: this.carEngineSound,
            //     volume: 1,
            //     duration: 1000,
            //     ease: 'Linear'
            // });

            // // Agendar diminuição do volume após 3 segundos
            // this.time.delayedCall(3000, () => {
            //     // Diminuir o volume de 1 para 0 em 1 segundo
            //     this.tweens.add({
            //         targets: this.carEngineSound,
            //         volume: 0,
            //         duration: 1000,
            //         ease: 'Linear',
            //         onComplete: () => {
            //             // Para o som se desejar que ele pare completamente depois de ficar inaudível
            //             this.carEngineSound.stop();
            //         }
            //     });
            // });


            this.carroVermelho.x += 1  ;
    
            const initialZoom = 0.85; // Zoom inicial
            const targetZoom = 3; // Zoom alvo
            let zoomProgress = Phaser.Math.Clamp((this.carroVermelho.x + 600) / 800, 0, 1);
            zoomProgress = Math.pow(zoomProgress, 3.5); // Aplicando uma função exponencial para acelerar o zoom
    
            // Ajustar a velocidade do zoom aumentando o zoom progress diretamente
            const zoom = initialZoom + (targetZoom - initialZoom) * zoomProgress; // Ajuste o multiplicador para alterar a velocidade
    
            // Definir o zoom da câmera com transição suave
            this.tweens.add({
                targets: this.cameras.main,
                zoom: zoom,
                duration: 1000, // Duração da transição em milissegundos
                ease: 'Linear'
            });
    
            // Ajustar a posição da câmera para seguir o carro
            this.cameras.main.scrollX = this.carroVermelho.x - this.cameras.main.width * 0.5;
            this.cameras.main.scrollY = this.carroVermelho.y - this.cameras.main.height * 0.5;
    
            if (this.carroVermelho.y > 440) {
                // Iniciar a animação de virar quando o carro começar a subir
                this.anims.play('vira', this.carroVermelho);
            }
        }
    
        if (this.carroVermelho.x === 1150 && this.carroVermelho.y > 440) {
            this.carroVermelho.y -= 1;

            this.cameras.main.stopFollow(this.carroVermelho);
        
            const initialZoom = 3; // Zoom inicial
            const targetZoom = 1; // Zoom alvo
            let zoomProgress = Phaser.Math.Clamp((this.carroVermelho.x + 600) / 800, 0, 1);
            zoomProgress = Math.pow(zoomProgress, 3.5); // Aplicando uma função exponencial para acelerar o zoom
        
            // Ajustar a velocidade do zoom aumentando o zoom progress diretamente
            const zoom = initialZoom + (targetZoom - initialZoom) * zoomProgress; // Ajuste o multiplicador para alterar a velocidade
        
            // Definir o zoom da câmera com transição suave
            this.tweens.add({
                targets: this.cameras.main,
                zoom: zoom,
                duration: 1000, // Duração da transição em milissegundos
                ease: 'Linear'
            });
        
            // Definir a posição da câmera para focar em x = 1536 e y = 320
            this.tweens.add({
                targets: this.cameras.main,
                scrollX: 1536 - this.cameras.main.width * 0.5,
                scrollY: 320 - this.cameras.main.height * 0.5,
                duration: 1000, // Duração da transição em milissegundos
                ease: 'Linear'
            });
        }
    
        if (this.carroVermelho.x <= 1250 && this.carroVermelho.y <= 440) {
            this.carroAndar = false;
            gameState.carroX = this.carroVermelho.x;
            gameState.carroY = this.carroVermelho.y;
            this.time.delayedCall(2000, () => {
                this.scene.start('Onboarding');
            });
        }
    }
    
    
    
    
    
}
