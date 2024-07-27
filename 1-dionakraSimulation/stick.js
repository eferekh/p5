class Stick {
    constructor(x) {
        this.height = 20;
        this.width = 100;
        this.x = x;
        this.y = height - (this.height / 2);
    }
    ballHitStick(ball) { // Know If The Ball Has Hit The Stick.
        var distance = dist(this.x, this.y, ball.x, ball.y);
        if (distance < 50) {
            return true;
        }
    }
    update(x) { // Move The Stick According To The Mouse Position X:
        this.x = x;
    }
    show() { // Render The Stick On The Page (Canvas):
        fill(255);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }
}
