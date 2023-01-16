class Boundary {
    static width = 48
    static height = 48
    constructor({ position }) {
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Sprite {
    constructor({ position, velocity, image, frame = { max: 1 }, sprites = [], animate = false }) {
        this.position = position
        this.image = image
        this.frame = {...frame, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frame.max
            this.height = this.image.height
        }
        this.animate = animate
        this.sprites = sprites
        this.opacity = 1
        this.health = 100
    }

    draw() {
        c.save()
        c.globalAlpha = this.opacity
        c.drawImage(
            this.image,
            this.frame.val * this.width,
            0,
            this.image.width / this.frame.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frame.max,
            this.image.height
        )
        c.restore()
        if (!this.animate) return
        if (this.frame.max > 1) {
            this.frame.elapsed++
        }
        if (this.frame.elapsed % 30 === 0){
            if (this.frame.val < this.frame.max - 1) this.frame.val++
            else this.frame.val = 0
        }
    }

    attack({attack, recipient}) {
        const tl = gsap.timeline()
        tl.to(this.position, {
            x: this.position.x - 20
        }).to(this.position, {
            x: this.position.x + 40,
            duration: 0.1,
            onComplete: () => {
                gsap.to('#enemyHealthBar', {
                    width: this.health - attack.damage + '%'
                })

                gsap.to(recipient.position, {
                    x: recipient.position.x +  10,
                    yoyo: true,
                    repeat: 5,
                    duration: 0.08
                })

                gsap.to(recipient, {
                    opacity: 0,
                    repeat: 5,
                    yoyo: true,
                    duration: 0.08
                })
            }
        }).to(this.position, {
            x: this.position.x
        })
    }
}