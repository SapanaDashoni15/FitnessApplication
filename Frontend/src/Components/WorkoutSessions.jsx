import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className = "workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>Discover the ultimate cycling session to burn 500+ calories in under an hour. Push your limits with advanced cardio training, real-time feedback on performance metrics, and motivational music to keep you energized</p>
        <img src = "/img5.jpg" alt = "workout"/> 
      </div>
      <div className="wrapper"> 
        <h1>FEATURED BOOTCAMP</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit veniam repellat maxime doloremque necessitatibus officiis libero. Animi velit incidunt quam.
        </p>
        <div className="bootcamps"> 
          <div> 
          <h4>HIIT Burnout: Full Body Transformation</h4>
          <p>Join our high-intensity interval training sessions and experience a full-body workout designed to boost endurance and muscle strength in just 45 minutes.</p>
          </div>
          <div> 
          <h4>Yoga for Strength and Flexibility</h4>
          <p>Enhance your flexibility and inner strength with our professionally guided yoga sessions tailored for beginners and advanced participants.</p>
          </div>
          <div> 
          <h4>Strength Camp: Powerlifting Made Easy</h4>
          <p>Master the fundamentals of powerlifting with expert coaches and build the strength you’ve always desired</p>
          </div>
          <div> 
          <h4>Cycling Pro: Push Your Limits</h4>
          <p>Experience an immersive cycling bootcamp with high-tech trainers and personalized plans to meet your goals.</p>
          </div>
          <div> 
          <h4>Yoga for Strength and Flexibility</h4>
          <p>Enhance your flexibility and inner strength with our professionally guided yoga sessions tailored for beginners and advanced participants.</p>
          </div>
        </div>
      </div>
      </section>
  )
}

export default WorkoutSessions