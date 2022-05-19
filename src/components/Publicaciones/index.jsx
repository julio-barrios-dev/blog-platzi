import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../actions/usersActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { getAll: getAllUsers } = userActions;
const { getAll: getAllPost } = publicacionesActions;

const Publicaciones = (props) => {
  const {key} = useParams();

  useEffect(() => {

    if(!props.usersReducer.usuarios.length) {
      props.getAllUsers();
    }
    
  }, []);
  console.log(props);
  
  return (
    <div>
      <h1>
        Publicaciones de 
      </h1>
      {key}
    </div>
  );
};

const mapStateToProps = ({ usersReducer, publicacionesReducer }) => {
  return {
    usersReducer,
    publicacionesReducer
  };
}
const mapDispatchToProps = {
  getAllUsers,
  getAllPost  
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);