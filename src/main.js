var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 640,
    backgroundColor: '#F1EFED',






    scene: [StartScreen, OASplashScreen, GOATSplashScreen, TitleScreen, Onboarding, Level1, Level1tutorial, Minigame1, Mapa, Level2, Level2tutorial, Minigame2, Level3, Level3tutorial, Minigame3, Level4, Level4tutorial, Minigame4, Level5, Level5tutorial, Minigame5],
    debug: true,
   // scene: [Minigame5],
    // scene: [Level2],







};

// Criação de uma instância do jogo
const game = new Phaser.Game(config);

