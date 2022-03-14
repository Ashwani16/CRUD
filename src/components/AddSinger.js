import React from 'react';
import SingerForm from './SingerForm';
import { useNavigate} from 'react-router-dom';

const AddSinger = ({ singers, setSingers }) => {
    const history = useNavigate();
  const handleOnSubmit = (singer) => {
     
    setSingers([singer, ...singers]);
    history('/');
  };

  return (
    <React.Fragment>
      <SingerForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddSinger;