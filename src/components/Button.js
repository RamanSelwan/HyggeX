import React from 'react';

const Button = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[1000px] w-[1440px] ">
      <div className="flex items-center justify-center bg-gray-700 text-white p-4 mb-5 rounded-lg shadow-lg w-96">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6smg3FpheR3jUeFez5EZ5dqSImfpv9fJMEcI1ZUpXQ_TCQV5tKcN0b_OdQAgrbyafD4&usqp=CAU" alt="Microsoft" className="mr-4 h-5 w-5" />
        <h2>Sign with Microsoft</h2>
      </div>
      <div className="flex items-center justify-center bg-yellow-300 p-4 mb-5 rounded-lg shadow-lg w-96">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzdQ2mof7kX1bl9t9hJUYeg2xeuZqpWq1r4aswAMtuw&s" alt="Amazon" className="mr-4 h-5 w-5" />
        <h2>Sign with Amazon</h2>
      </div>
      <div className="flex items-center justify-center bg-white p-4 mb-5 rounded-lg shadow-lg w-96">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt="Slack" className="mr-4 h-5 w-5" />
        <h2>Sign with Slack</h2>
      </div>
      <div className="flex items-center justify-center bg-blue-600 text-white p-4 mb-5 rounded-lg shadow-lg w-96">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" className="mr-4 h-5 w-5" />
        <h2>Login with Facebook</h2>
      </div>
    </div>
  );
};

export default Button;
