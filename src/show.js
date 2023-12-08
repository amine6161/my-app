import React from 'react';

function Show(props) {
  if (props.shows) {
    return (
      <div>
        <h2>Profession: {props.person.profession}</h2>
        <p>I have been working as a software engineer for 5 years now.</p>
      </div>
    );
  }
  return null;
}

export default Show;
