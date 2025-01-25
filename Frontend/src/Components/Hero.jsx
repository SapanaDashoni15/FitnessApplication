import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>Let's</h1>
          <h1>Get</h1>
          <h1>Moving</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness starts here.</p>
          <p>Unleash your potential.</p>
        </div>
        <div className="buttons">
          {/* First Button with Link */}
          <a href="#sessions">
            <button>Start your journey</button>
          </a>
          {/* Second Button with Link */}
          <a href="#pricetag">
            <button>Discover your plan</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
