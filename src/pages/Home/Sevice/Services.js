import React from 'react';
import Service from './Service';
import emage1 from "../../../assets/icons/emage1.png"
import emage2 from "../../../assets/icons/emage2.png"
import emage3 from "../../../assets/icons/emage3.png"
import emage4 from "../../../assets/icons/emage4.png"
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Weight Lifting',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: emage2
        },
        {
            id: 2,
            name: 'Specific muscle',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: emage1
        },
        {
            id: 3,
            name: 'Flex Your Muscle',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: emage3
        },
        {
            id: 4,
            name: 'Cardio Exercise',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: emage4 
        }
    ]
    return (
        <div className='mt-16'>
        <div className='text-center pb-10'>
            <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
            <h2 className='text-3xl'>Services We Provide</h2>
        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;