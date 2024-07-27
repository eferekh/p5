class Ball {
    constructor() {
        this.size = 20;
        this.x = width / 2;
        this.y = height / 2;
        this.velX = 5;
        this.velY = 5;
        this.wentUp = false;
    }

    reBounceUp() { // If Ball Hit The Stick, Reverse The Speed.
        if (!this.wentUp) {
            this.velY = this.velY * -1;
            this.wentUp = true;
        }
    }

    hitBorders() { // If The Ball Hit The Top, Left Or Right Border, Reverse The Speed.
        if (this.x > width) {
            this.velX = this.velX * -1;
            this.wentUp = false;
        }
        if (this.x < 0) {
            this.velX = this.velX * -1;
            this.wentUp = false;
        }
        if (this.y < 0) {
            this.velY = this.velY * -1;
            this.wentUp = false;
        }
    }

    endOfGame() { // If Ball Is Out Of Canvas (Under The Height Border, End The Game).
        if (this.y > height + 10) {
            return true;
        }
    }

    update() { // Let The Ball Travel Through The Screen.
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    }

    show() { // Render The Ball On The Screen (Canvas).
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }
}
