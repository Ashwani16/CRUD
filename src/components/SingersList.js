import React from 'react';
import _ from 'lodash';
import Singer from './Singer';

const SingersList = ({ singers, setSingers }) => {

  const handleremovesinger = (id) => {
    setSingers(singers.filter((singer) => singer.id !== id));
  };

  return (
    <React.Fragment>
      <div className="singer-list">
      {!_.isEmpty(singers) ? (
        singers.map((singer) => (
          <Singer key={singer.id} {...singer} handleremovesinger={handleremovesinger} />
          ))
        ) : (
          <p className="message">No singers available. Please add some singers.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default SingersList;