import React, { useEffect, useState } from 'react';

const Alert = ({ color = "blue", message = "" }) => {
  const [visible, setVisible] = useState(true);

  const colorClasses = {
    blue: "bg-blue-100 text-blue-800 border-blue-300",
    red: "bg-red-100 text-red-800 border-red-300",
    green: "bg-green-100 text-green-800 border-green-300",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-300",
    gray: "bg-gray-100 text-gray-800 border-gray-300",
  };

  const selectedColor = colorClasses[color] || colorClasses.blue;


  if (!visible) return null;

  return (
   <div className='flex items-center justify-center'>
     <div className={`fixed px-4 top-20 transform z-[999999] w-[95%] border mx-auto py-4 rounded shadow-md transition-all duration-300 ${selectedColor}`}>
      <div className="flex justify-between items-center mx-auto">
        <span className="text-sm font-medium">{message}</span>
        <button onClick={() => setVisible(false)} className="text-lg font-bold leading-none">×</button>
      </div>
    </div>
   </div>
  );
};

export default Alert;
