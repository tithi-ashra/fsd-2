import React from 'react';

export default function timer() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  return (
    <div>
        Your System Time is {hours}:{minutes}:{seconds};
    </div>
  );
};