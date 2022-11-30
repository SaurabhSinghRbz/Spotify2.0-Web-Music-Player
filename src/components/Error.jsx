/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */

import React from 'react';

const Error = () => {
  const sendEmail = async () => {
    await fetch(import.meta.env.VITE_GOOGLE_SHEET_EMAIL_URL);
  };

  React.useEffect(() => {
    sendEmail();
  }, []);


  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl text-white text-center">API has reached its max limit, developer will update it soon.</h1>
      <h1 className="text-2xl text-white text-center">Please try again after sometime.</h1>
    </div>
  );
};

export default Error;
