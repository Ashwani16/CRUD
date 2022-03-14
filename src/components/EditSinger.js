import React from 'react';
import SingerForm from './SingerForm';
import { useParams,useNavigate } from 'react-router-dom';



const EditSinger = ({ singers, setSingers }) => {
  const { id } = useParams();
  const history = useNavigate();
  const singerToEdit = singers.find((singer) => singer.id === id);

  const handleOnSubmit = (singer) => {
    const filteredSingers = singers.filter((singer) => singer.id !== id);
    setSingers([singer, ...filteredSingers]);
    history('/');
  };

  return (
    <div>
      <SingerForm singer={singerToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditSinger;