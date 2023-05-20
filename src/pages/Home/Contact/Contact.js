import React from 'react';
import bg from '../../../assets/image/bg.png'
import PrimaryButton from '../../../components/PrimaryButton';
const Contact = () => {
    return (
        <div
        style={{
          background: `url(${bg})`,
          backgroundSize: 'cover'
      }} 
       className='mt-15' >
        <h1 className="pt-10 text-5xl text-center font-bold text-primary ">Contact Us</h1>
          <div className="hero min-h-screen ">
            
  <div className="">
   
    <div className=" ">
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
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;