/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */

import React from 'react';

const Error = () => {
  const sendEmail = () => {
    fetch(`https://formspree.io/f/${import.meta.env.VITE_MY_FORSPREE_URL_CODE}`, {
      method: "POST",
      body: JSON.stringify(
        {
          "email": "singhsaurabh8576@gmail.com",
          "message": "Your spotify 2.0 api-key has been reached its limit. Please update the api-key."
        }
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
