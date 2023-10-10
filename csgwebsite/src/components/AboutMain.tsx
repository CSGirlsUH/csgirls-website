import React from "react";

function AboutMain() {
  return (
    <>
      {/* Main Text */}
      <div>
        <p>
          In August 2013, Computer Science Girls (CSGirls) was created as a
          platform for students to meet, discuss, and celebrate their love for
          computer science. Today, CSGirls is known for cultivating bright,
          talented professionals and upholding relationships with top employers
          in the country.
        </p>
        <p>
          CSGirls was founded on the principles of promoting a safe environment
          for students and recognizing excellence within the technology
          community at the University of Houston. Our main objective is to guide
          women in technology; however, we welcome people from all backgrounds.
          In line with our university’s values, we strive to create a diverse
          and inclusive community for our members to promote fellowship.
        </p>
        {/* Why Should You Join CSG? */}
        <h1>Why Should You Join CSGirls?</h1>
        <p>As a member, you will...</p>
        <ul>
          <li>Gain access to our professional network</li>
          <li>Receive exclusive internship and job opportunities</li>
          <li>Attend our workshops and events</li>
          <li>Participate in our mentorship program</li>
          <li>Be a part of our community</li>
        </ul>
        {/* Use card components to add features/perks of joining */}
      </div>
    </>
  );
}

export default AboutMain;
