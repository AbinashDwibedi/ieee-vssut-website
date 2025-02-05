import React, { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import Locomotive Scroll styles

function SmoothScrollComponent() {
  const { scroll, isReady } = useLocomotiveScroll({
    options: {
      smooth: true, // Enable smooth scroll
      lerp: 0.1, // Smoothness of the scroll effect
      multiplier: 1, // Scroll speed multiplier
    },
    // You can also pass this options to enable parallax effects, etc
  });

  useEffect(() => {
    if (isReady) {
      scroll.update(); // Update Locomotive Scroll when component is mounted
    }
  }, [scroll, isReady]);

  return (
    <div
      data-scroll-container
      style={{
        overflow: 'hidden', // Prevent scrolling beyond the viewport
        height: '100vh', // Ensure it's full screen height
        width: '100%', // Full width
      }}
    >
      <section
        data-scroll
        style={{
          height: '100vh', // Make sections fill the viewport
          background: '#f0f0f0',
          padding: '20px',
        }}
      >
        <h1>This is Section 1</h1>
      </section>
      <section
        data-scroll
        style={{
          height: '100vh',
          background: '#e0e0e0',
          padding: '20px',
        }}
      >
        <h1>This is Section 2</h1>
      </section>
      <section
        data-scroll
        style={{
          height: '100vh',
          background: '#c0c0c0',
          padding: '20px',
        }}
      >
        <h1>This is Section 3</h1>
      </section>
    </div>
  );
}

export default SmoothScrollComponent;
