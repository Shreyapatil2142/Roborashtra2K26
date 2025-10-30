"use client";
import { useEffect } from "react";

export default function FogCursor() {
    useEffect(() => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;
        document.body.appendChild(canvas);

        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "2147483647"; // the max safe z-index
        canvas.style.mixBlendMode = "screen"; // makes it glow naturally over dark backgrounds
        canvas.style.filter = "blur(7px)"; // optional soft fog look

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: any[] = [];
        const particleCount = 40;

        class Particle {
            x: number; y: number; alpha: number; size: number; speedX: number; speedY: number;
            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.alpha = Math.random();
                this.size = Math.random() * 30 + 10;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.alpha -= 0.01;
            }
            draw() {
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                gradient.addColorStop(0, `rgba(255, 192, 69, ${this.alpha})`);
                gradient.addColorStop(1, `rgba(255, 192, 69, 0)`);
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let mouseX = 0, mouseY = 0;
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            const fogOffsetY = 50;
            const fogOffsetX = 25;
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(mouseX + fogOffsetX, mouseY + fogOffsetY));
            }

        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();
                p.draw();
                if (p.alpha <= 0) particles.splice(i, 1);
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeChild(canvas);
        };
    }, []);

    return null;
}
