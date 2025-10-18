import React from 'react'

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-[url('/img2.jpg')] bg-cover bg-center text-white">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Kokoro sushi</h1>
          <p className="mb-5">
            Authentic Japanese flavors — fresh, local, and made with passion.
          </p>
            <a
                href="https://maps.app.goo.gl/e5Y7eRV4ryUvBB7fA" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                >
                Find Us
            </a>
        </div>
      </div>
    </section>
    
  )
}

export default Hero