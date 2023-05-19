import React from 'react';

const Contact = () => {
    return (
        <div>
          <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm ">
      <div className="card-body">
        <div className="form-control">
          
          <input type="text" placeholder="Full Name" className="input input-bordered" />
        </div>
        <div className="form-control">
         
          <input type="email" placeholder="Type Your Email" className="input input-bordered" />
        
        </div>
        <div className="form-control">
         
        <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
        
        </div>


        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;