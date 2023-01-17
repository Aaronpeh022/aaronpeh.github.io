const embyImage = new Image()
embyImage.src = "./img/embySprite.png"

const draggleImage = new Image()
draggleImage.src = "./img/draggleSprite.png"

const monsters = {
    Emby: {
        position: {
            x: 280,
            y: 325
        },
        image: embyImage,
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
        image: draggleImage,
        frame: {
            max: 4
        },
        animate: true,
        isEnemy: true,
        name: "Draggle",
        attacks: [attacks.Tackle, attacks.Fireball]
    }
}