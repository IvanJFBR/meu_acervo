import React from 'react';

import Guest from './Guest';

const Guests = ({ guests, handleguestClick, handleguestDeletion }) => {
  return (
    <>
      {guests?.map((guest) => (
        <Guest
          key={guest?.id}
          guest={guest}
          handleguestClick={handleguestClick}
          handleguestDeletion={handleguestDeletion}
        />
      ))}
    </>
  );
};

export default Guests;
