import React from 'react';

import Guest from './Guest';

const Guests = ({ guests, handleguestDeletion }) => {
  return (
    <>
      {guests?.map((guest) => (
        <Guest
          key={guest?.id}
          guest={guest}
          handleguestDeletion={handleguestDeletion}
        />
      ))}
    </>
  );
};

export default Guests;
