import { CONSTANTS } from "../constants.js";

export class StarEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.stars = [];

        this.resize();

        window.addEventListener("resize", () => this.resize());

        this.createStars();

        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createStars() {

        this.stars = [];

        for (let i = 0; i < CONSTANTS.STAR_COUNT; i++) {

            this.stars.push({

                x: Math.random() * this.canvas.width,

                y: Math.random() * this.canvas.height,

                radius: Math.random() * 2 + 0.3,

                alpha: Math.random(),

                speed: 0.005 + Math.random() * 0.015,

                direction: Math.random() > 0.5 ? 1 : -1

            });

        }

    }

    draw() {

        this.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        for (const star of this.stars) {

            star.alpha += star.speed * star.direction;

            if (star.alpha >= 1) {

                star.direction = -1;

            }

            if (star.alpha <= 0.2) {

                star.direction = 1;

            }

            this.ctx.beginPath();

            this.ctx.arc(
                star.x,
                star.y,
                star.radius,
                0,
                Math.PI * 2
            );

            this.ctx.fillStyle =
                `rgba(255,255,255,${star.alpha})`;

            this.ctx.fill();

        }

    }

    animate() {

        this.draw();

        requestAnimationFrame(() => this.animate());

    }

}