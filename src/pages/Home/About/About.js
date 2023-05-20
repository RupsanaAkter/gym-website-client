import React from 'react';
import about from '../../../assets/image/about.png'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={about} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default About;