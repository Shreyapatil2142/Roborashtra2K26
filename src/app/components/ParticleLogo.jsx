"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function ParticleLogo() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = null;

    // Initial camera setup (default for large screens)
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // make background fully transparent
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/logo.png", (imageTexture) => {
      const img = imageTexture.image;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, img.width, img.height);

      // Geometry for main logo
      const logoGeometry = new THREE.BufferGeometry();
      const logoPositions = [];
      const logoColors = [];

      const step = 25; // smaller step = denser grid for logo
      for (let y = 0; y < img.height; y += step) {
        for (let x = 0; x < img.width; x += step) {
          const index = (y * img.width + x) * 4;
          const alpha = imgData.data[index + 3];
          if (alpha > 128) {
            const color = new THREE.Color(
              imgData.data[index] / 69,
              imgData.data[index + 1] / 192,
              imgData.data[index + 2] / 255
            );

            // Calculate brightness from RGB (0 = dark, 1 = bright)
            const r = imgData.data[index] / 255;
            const g = imgData.data[index + 1] / 255;
            const b = imgData.data[index + 2] / 255;
            const brightness = (r + g + b) / 3;

            // Map brightness to Z-depth
            const zDepth = (brightness - 0.5) * 100; // tweak 100 for stronger depth

            logoColors.push(color.r, color.g, color.b);

            logoPositions.push(
              (x - img.width / 2) * 1.5,
              (-y + img.height / 2) * 1.5,
              zDepth
            );
          }
        }
      }

      logoGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(logoPositions, 3)
      );
      logoGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(logoColors, 3)
      );

      const logoMaterial = new THREE.PointsMaterial({
        size: 1.4,
        vertexColors: true,
      });

      const logoPoints = new THREE.Points(logoGeometry, logoMaterial);
      logoPoints.scale.set(0.1, 0.1, 0.1);
      scene.add(logoPoints);

      // -------------------------------
      // Background particles
      // -------------------------------
      const bgGeometry = new THREE.BufferGeometry();
      const bgPositions = [];
      const bgColors = [];

      // Dynamic count based on screen size (increased overall)
      let bgParticleCount = 25000; // default

      if (window.innerWidth < 640) {
        // 📱 Small screens
        bgParticleCount = 5000;
      } else if (window.innerWidth >= 640 && window.innerWidth < 1280) {
        // 💻 Medium screens
        bgParticleCount = 15000;
      } else if (window.innerWidth >= 2000) {
        // 🖥️ Ultra-wide monitors
        bgParticleCount = 30000;
      }

      // Compute bounding box for logo to keep particles outside of it
      const logoBoundingBox = new THREE.Box3().setFromObject(logoPoints);
      const logoRadius = logoBoundingBox.getSize(new THREE.Vector3()).length() / 2;

      // Inner radius to protect logo area
      const minRadius = logoRadius * 0.5; // slightly larger than logo
      const maxRadius = minRadius + 140;  // extend farther into the background

      // Distribute particles roughly uniformly on a sphere shell
      for (let i = 0; i < bgParticleCount; i++) {
        // Random direction (uniform sphere sampling)
        const theta = Math.acos(2 * Math.random() - 1); // polar angle
        const phi = Math.random() * Math.PI * 2;        // azimuthal angle
        const radius = minRadius + Math.random() * (maxRadius - minRadius);

        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);

        bgPositions.push(x, y, z);

        // Warm gradient color variation (gold/orange mix)
        const color = new THREE.Color();
        color.setHSL(0.1 + Math.random() * 0.1, 1, 0.55 + Math.random() * 0.1);
        bgColors.push(color.r, color.g, color.b);
      }

      bgGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(bgPositions, 3)
      );
      bgGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(bgColors, 3)
      );

      const bgMaterial = new THREE.PointsMaterial({
        size: 0.45,
        opacity: 0.65,
        transparent: true,
        vertexColors: true,
        depthWrite: false, // prevents particles from hiding logo
      });

      const bgPoints = new THREE.Points(bgGeometry, bgMaterial);
      scene.fog = new THREE.FogExp2(0x000000, 0.001);
      scene.add(bgPoints);


      // -------------------------------
      // Responsive scaling logic
      // -------------------------------
      const adjustForScreenSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Adjust camera distance and logo scale
        if (width < 640) {
          // 📱 Small screens
          camera.position.z = 350;
          logoPoints.scale.set(0.07, 0.07, 0.07);

        } else if (width >= 640 && width < 1280) {
          // 💻 Medium screens

          camera.position.z = 350;
          logoPoints.scale.set(0.09, 0.09, 0.09);
        } else if (width >= 2000) {
          // 🖥️ Ultra-wide monitors

          camera.position.z = 250;
          logoPoints.scale.set(0.12, 0.12, 0.12);
        } else {
          // 🧭 Default for large displays

          camera.position.z = 300;
          logoPoints.scale.set(0.1, 0.1, 0.1);
        }

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      adjustForScreenSize();
      window.addEventListener("resize", adjustForScreenSize);

      // -------------------------------
      // Interactions & Animation
      // -------------------------------
      let targetRotationX = 0;
      let targetRotationY = 0;

      const onMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        targetRotationY = x * 0.26;
        targetRotationX = y * 0.26;
      };

      window.addEventListener("mousemove", onMouseMove);

      window.addEventListener("touchmove", (event) => {
        if (event.touches.length > 0) {
          const x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
          const y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
          targetRotationY = x * 0.26;
          targetRotationX = y * 0.26;
        }
      });

      const animateDepth = () => {
        const logoAttr = logoGeometry.attributes.position;
        for (let i = 0; i < logoAttr.count; i++) {
          const z = logoAttr.getZ(i);
          logoAttr.setZ(i, z + Math.sin(Date.now() * 0.001 + i) * 0.05);
        }
        logoAttr.needsUpdate = true;

        const bgAttr = bgGeometry.attributes.position;
        for (let i = 0; i < bgAttr.count; i++) {
          const z = bgAttr.getZ(i);
          bgAttr.setZ(i, z + Math.sin(Date.now() * 0.001 + i * 0.5) * 0.05);
        }
        bgAttr.needsUpdate = true;
      };

      const animate = () => {
        requestAnimationFrame(animate);
        animateDepth();

        gsap.to(logoPoints.rotation, {
          x: targetRotationX,
          y: targetRotationY,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(bgPoints.rotation, {
          x: targetRotationX * 0.3,
          y: targetRotationY * 0.3,
          duration: 2,
          ease: "power1.out",
        });

        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      mount.innerHTML = "";
      window.removeEventListener("resize", () => { });
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden z-5"
      ref={mountRef}
    />
  );
}
