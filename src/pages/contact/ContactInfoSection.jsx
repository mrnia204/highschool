import React, { useState } from "react";
import Card from '../../components/base/Card';
import RemixImgCard from "../../components/base/RemixImgCard";
import Button from "../../components/base/Button";

import { AdmissionsInq, BookAppointment, GeneralInq } from "../../components/base/Forms";

const ContactInfoSection = () => {
  const[active, setActive]=useState();
  const contactInfo = [
     {
      title: "Visit Us",
      content: "Lumusa Western Highlands Province, Papua New Guinea",
      icon: "ri-map-pin-line",
      bgColor: "bg-blue-600 text-white",
      class: "bg-blue-50 p-6 rounded-lg",
    },
    {
      title: "Call Us",
      content: "+675 XXXXXXX",
      icon: "ri-phone-line",
      bgColor: "bg-green-600 text-white",
      class: "bg-green-50 p-6 rounded-lg",
    },
     {
      title: "Email Us",
      content: "admin@lbhs.edu.pg",
      icon: "ri-mail-line",
      bgColor: "bg-purple-600 text-white",
      class: "bg-purple-50 p-6 rounded-lg",
    },
     {
      title: "Office Hours",
      content: "Mon - Fri: 8:00 AM - 4:00 PM",
      icon: "ri-time-line",
      bgColor: "bg-orange-600 text-white",
      class: "bg-orange-50 p-6 rounded-lg",
    }
  ];

  const contactCategory = [
    "General Inquiry",
    "Admissions Inquiry",
    "Book Appointment",
  ];


  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
  
        {contactInfo.map((items, index) => (
          <RemixImgCard 
            key={index}
            remixIcon={items.icon}
            title={items.title}
            content={items.content}
            bgColor={items.bgColor}
            className={items.class}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Choose the appropriate form below to contact us about your specific needs.
          </p>
        </div>
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          {contactCategory.map((category) => (
            <Button
              key={category}
              onClick={() => setActive(category)}
              className={`${active === category ? 'border-b-2 border-blue-600 text-blue-600 focus:text-blue-600' : 'text-gray-600 hover:text-blue-600 active:text-blue-600 hover:border-blue-600 hover:border-b-2 active:border-b-2 active:border-blue-600'}`}
            >
              {category}
            </Button>
           ))}
        </div>
        {active === 'General Inquiry' && (
          <GeneralInq />
        )}
        {active === 'Admissions Inquiry' && (
          <AdmissionsInq />
        )}
       {active === 'Book Appointment' && (
          <BookAppointment />
        )}
      </div>
    </Card>
  );
};

export default ContactInfoSection;