const monsters = {
    Emby: {
        position: {
            x: 280,
            y: 325
        },
        image: {
            src: './img/embySprite.png'
        },
        frame: {
            max: 4
        },
        animate: true,
        name: "Emby",
        attacks: [attacks.Tackle, attacks.Fireball]
    },
    Draggle: {
        position: {
            x: 800,
            y: 100
        },
        image:  {
            src: './img/draggleSprite.png'
        },
        frame: {
            max: 4
        },
        animate: true,
        isEnemy: true,
        name: "Draggle",
        attacks: [attacks.Tackle, attacks.Fireball]
    }
}