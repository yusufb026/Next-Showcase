import React from 'react';

const ContactInfo = ({ icon, title, information }: { icon: any; title: any; information: any }) => {
  return (
    <div>
      {icon} <span className="m-2 text-base text-gray-800">{title}</span>
      <div className="m-2 text-sm text-gray-800">{information}</div>
    </div>
  );
};

export default ContactInfo;
