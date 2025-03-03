import React, { useEffect, useRef } from 'react';

const MeteorShower = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const meteors = [];

    // Star creation
    const createStars = () => {
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2,
          opacity: Math.random(),
        });
      }
    };

    // Meteor creation
    const createMeteors = () => {
      if (Math.random() < 0.02) { // Adjust frequency
        const x = Math.random() * width;
        const y = -50;
        const angle = Math.random() * 0.4 + Math.PI / 4; // Angle of descent
        const speed = Math.random() * 5 + 5; // Speed of meteor
        const length = Math.random() * 100 + 50; // Length of meteor trail
        meteors.push({ x, y, angle, speed, length, opacity: 1 });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw meteors
      meteors.forEach((meteor, index) => {
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.opacity -= 0.01; // Fade out

        if (meteor.opacity <= 0) {
          meteors.splice(index, 1);
          return;
        }

        const endX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const endY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const gradient = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      createMeteors();
      requestAnimationFrame(animate);
    };

    createStars();
    animate();

    // Resize handling
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 hidden dark:block" // Fullscreen canvas
      style={{ background: '#000' }}
    />
  );
};

export default MeteorShower;