class Boundary {
    static width = 48
    static height = 48
    constructor({ position }) {
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0.0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Sprite {
    constructor({ position, velocity, image, frame = { max: 1 }, sprites = [] }) {
        this.position = position
        this.image = image
        this.frame = {...frame, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frame.max
            this.height = this.image.height
        }
        this.moving = false
        this.sprites = sprites
    }

    draw() {
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
        if (!this.moving) return
        if (this.frame.max > 1) {
            this.frame.elapsed++
        }
        if (this.frame.elapsed % 30 === 0){
            if (this.frame.val < this.frame.max - 1) this.frame.val++
            else this.frame.val = 0
        }
    }
}