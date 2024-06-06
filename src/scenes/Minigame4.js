class Minigame4 extends Phaser.Scene {
    constructor() {
        super({key: "Minigame4"});
    }
    preload() {
        this.load.image('fundo4', './assets/computadorsemfundo.png');
        this.load.image('perguntaCloud1', './assets/perguntaCloud1.png');
        this.load.image('perguntaCloud2', './assets/perguntaCloud2.png');
        this.load.image('perguntaCloud3', './assets/perguntaCloud3.png');
        this.load.image('perguntaCloud4', './assets/perguntaCloud4.png');
        this.load.image('botaoVerdadeiro', './assets/botaoVerdadeiro.png');
        this.load.image('botaoFalso', './assets/botaoFalso.png');
        this.load.image('acerto1', './assets/parabensCloud1.png');
        this.load.image('acerto2', './assets/parabensCloud2.png');
        this.load.image('acerto3', './assets/parabensCloud3.png');
        this.load.image('acerto4', './assets/parabensCloud4.png');
        this.load.image('erroCloud', './assets/erroCloud.png');
        this.load.image('botao', './assets/botaoSeta.png');
        this.load.image('parabensFinal', './assets/parabensFinalCloud.png')
        this.load.image('botaoCheck', './assets/botaotexto1.png');
    }
    create() {
        this.fundo = this.add.image(0, 0, 'fundo4').setOrigin(0);

        this.perguntaCloud1 = this.add.image(220, 250, 'perguntaCloud1').setOrigin(0).setAlpha(1).setScale(0.93, 0.9);
        this.perguntaCloud2 = this.add.image(200, 250, 'perguntaCloud2').setOrigin(0).setAlpha(0).setScale(0.93, 0.9);
        this.perguntaCloud3 = this.add.image(200, 250, 'perguntaCloud3').setOrigin(0).setAlpha(0).setScale(0.93, 0.9);
        this.perguntaCloud4 = this.add.image(240, 250, 'perguntaCloud4').setOrigin(0).setAlpha(0).setScale(0.93, 0.9);

        this.botaoVerdadeiro = this.add.image(300, 400, 'botaoVerdadeiro').setInteractive().setAlpha(1).setScale(0.93, 0.9);
        this.botaoVerdadeiro.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botaoVerdadeiro.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });

        this.botaoFalso = this.add.image(675, 400, 'botaoFalso').setInteractive().setAlpha(1).setScale(0.93, 0.9);
        this.botaoFalso.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botaoFalso.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });

        this.erroCloud = this.add.image(512, 320, 'erroCloud').setAlpha(0).setScale(0.93, 0.9);

        this.parabensCloud1 = this.add.image(512, 320, 'acerto1').setAlpha(0).setScale(0.93, 0.9);
        this.parabensCloud2 = this.add.image(512, 320, 'acerto2').setAlpha(0).setScale(0.93, 0.9);
        this.parabensCloud3 = this.add.image(512, 320, 'acerto3').setAlpha(0).setScale(0.93, 0.9);
        this.parabensCloud4 = this.add.image(512, 320, 'acerto4').setAlpha(0).setScale(0.93, 0.9);

        this.parabensFinal = this.add.image(512, 320, 'parabensFinal').setAlpha(0).setScale(0.93, 0.9);

        this.botao1 = this.add.image(720, 420, 'botao').setInteractive().setAlpha(0).setScale(1.5);
        this.botao1.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botao1.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });
        this.botao2 = this.add.image(720, 420, 'botao').setInteractive().setAlpha(0).setScale(1.5);
        this.botao2.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botao2.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });

        this.botao3 = this.add.image(720, 420, 'botao').setInteractive().setAlpha(0).setScale(1.5);
        this.botao3.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botao3.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });

        this.botao4 = this.add.image(720, 420, 'botao').setInteractive().setAlpha(0).setScale(1.5);
        this.botao4.on('pointerover', () => {
            this.input.setDefaultCursor("pointer");
        });
        this.botao4.on('pointerout', () => {
            this.input.setDefaultCursor("default");
        });
        
        this.botaoCheck = this.add.image(720, 420, 'botaoCheck').setInteractive().setAlpha(0).setScale(1.5);

        this.botaoVerdadeiro.on('pointerdown', () => {
            if (gameState.perguntaCloud1 || gameState.perguntaCloud2 || gameState.perguntaCloud4) {
                this.tweens.add({
                    targets: this.erroCloud,
                    alpha: 1,
                    duration: 500,
                    ease: 'Linear',
                    onComplete: () => {
                        this.time.delayedCall(1000, () => {
                            this.tweens.add({
                                targets: this.erroCloud,
                                alpha: 0,
                                duration: 500,
                                ease: 'Linear',
                            });
                        });
                    }
                });
            } else if (gameState.perguntaCloud3) {
                this.tweens.add({
                    targets: [this.perguntaCloud1, this.botaoVerdadeiro, this.botaoFalso, this.fundo],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.tweens.add({
                    targets: [this.parabensCloud3, this.botao3],
                    alpha: 1,
                    duration: 500,
                    ease: 'Linear',
                });

                this.botao3.on('pointerover', () => {
                    this.input.setDefaultCursor("pointer");
                });
                this.botao3.on('pointerout', () => {
                    this.input.setDefaultCursor("default");
                });

                this.botao3.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.parabensCloud3, this.perguntaCloud3, this.botao3, this.botaoVerdadeiro, this.botaoFalso],
                        alpha: 0,
                        duration: 250,
                        ease: 'Linear',
                        onComplete: () => {
                            this.time.delayedCall(1000, () => {
                                this.tweens.add({
                                    targets: [this.perguntaCloud4, this.botaoVerdadeiro, this.botaoFalso, this.fundo],
                                    alpha: 1,
                                    duration: 250,
                                    ease: 'Linear',
                                });
                            });
                            this.parabensCloud3.destroy();
                            this.botao3.destroy();
                            this.perguntaCloud3.destroy();
                        }
                    });
                    gameState.perguntaCloud3 = false;
                    gameState.perguntaCloud4 = true;
                    this.input.setDefaultCursor("default");
                })
            }
            this.input.setDefaultCursor("default");
        });

        this.botaoFalso.on('pointerdown', () => {
            if (gameState.perguntaCloud1) {
                this.tweens.add({
                    targets: [this.perguntaCloud1, this.botaoVerdadeiro, this.botaoFalso, this.fundo],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.tweens.add({
                    targets: [this.parabensCloud1, this.botao1],
                    alpha: 1,
                    duration: 500,
                    ease: 'Linear',
                });

                this.botao1.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.parabensCloud1, this.perguntaCloud1, this.botao1, this.botaoVerdadeiro, this.botaoFalso],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        onComplete: () => {
                            this.time.delayedCall(1000, () => {
                                this.tweens.add({
                                    targets: [this.perguntaCloud2, this.botaoVerdadeiro, this.botaoFalso, this.fundo],
                                    alpha: 1,
                                    duration: 500,
                                    ease: 'Linear',
                                });
                            });
                            this.parabensCloud1.destroy();
                            this.botao1.destroy();
                            this.perguntaCloud1.destroy();
                        }
                    });
                    this.tweens.add({
                        targets: [this.perguntaCloud1, this.botaoVerdadeiro, this.botaoFalso, this.fundo],
                        alpha: 0.3,
                        duration: 250,
                        ease: 'Linear',
                    })

                    gameState.perguntaCloud1 = false;
                    gameState.perguntaCloud2 = true;
                    this.input.setDefaultCursor("default");
                });
            } else if (gameState.perguntaCloud2) {
                this.tweens.add({
                    targets: [this.perguntaCloud2, this.botaoVerdadeiro, this.botaoFalso, this.fundo],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })

                this.tweens.add({
                    targets: [this.parabensCloud2, this.botao2],
                    alpha: 1,
                    duration: 500,
                    ease: 'Linear',
                });

                this.botao2.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.parabensCloud2, this.perguntaCloud2, this.botao2, this.botaoVerdadeiro, this.botaoFalso],
                        alpha: 0,
                        duration: 500,
                        ease: 'Linear',
                        onComplete: () => {
                            this.time.delayedCall(1000, () => {
                                this.tweens.add({
                                    targets: [this.perguntaCloud3, this.botaoVerdadeiro, this.botaoFalso, this.fundo],
                                    alpha: 1,
                                    duration: 500,
                                    ease: 'Linear',
                                });
                            });
                            this.parabensCloud2.destroy();
                            this.botao2.destroy();
                            this.perguntaCloud2.destroy();
                        }
                    });
                    gameState.perguntaCloud2 = false;
                    gameState.perguntaCloud3 = true;
                    this.input.setDefaultCursor("default");
                });
            }
            else if (gameState.perguntaCloud3) {
                this.tweens.add({
                    targets: this.erroCloud,
                    alpha: 1,
                    duration: 500,
                    ease: 'Linear',
                    onComplete: () => {
                        this.time.delayedCall(1000, () => {
                            this.tweens.add({
                                targets: this.erroCloud,
                                alpha: 0,
                                duration: 500,
                                ease: 'Linear',
                            });
                        });
                    }
                });
            }
            else if (gameState.perguntaCloud4) {
                this.tweens.add({
                    targets: [this.perguntaCloud4, this.botaoVerdadeiro, this.botaoFalso, this.fundo],
                    alpha: 0.3,
                    duration: 250,
                    ease: 'Linear',
                })
                this.tweens.add({
                    targets: [this.parabensCloud4, this.botao4],
                    alpha: 1,
                    duration: 500,
                    ease: 'Linear',
                });

                this.botao4.on('pointerdown', () => {
                    this.tweens.add({
                        targets: [this.parabensCloud4, this.perguntaCloud4, this.botao4, this.botaoVerdadeiro, this.botaoFalso],
                        alpha: 0,
                        duration: 1000,
                        ease: 'Linear',
                        onComplete: () => {
                            this.time.delayedCall(1000, () => {
                                this.tweens.add({
                                    targets: [this.parabensFinal, this.botaoCheck],
                                    alpha: 1,
                                    duration: 500,
                                    ease: 'Linear',
                                });
                            });
                            this.parabensCloud4.destroy();
                            this.botao4.destroy();
                            this.perguntaCloud4.destroy();
                        }
                    });
                    this.botaoCheck.on('pointerdown', () => {
                        this.scene.start('Mapa');
                        gameState.jaConcluiuFase4 = true;
                        this.input.setDefaultCursor("default");
                    })
                    this.botaoCheck.on('pointerover', () => {
                        this.input.setDefaultCursor("pointer");
                    });
                    this.botaoCheck.on('pointerout', () => {
                        this.input.setDefaultCursor("default");
                    });
                    gameState.perguntaCloud4 = false;
                    this.input.setDefaultCursor("default");
                });
            }
            this.input.setDefaultCursor("default");
        });
    }
}
