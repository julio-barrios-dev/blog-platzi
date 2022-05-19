import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../actions/usersActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { getAll: getAllUsers } = userActions;
const { getByUser: getPostByUser } = publicacionesActions;

const Publicaciones = (props) => {
  const {key} = useParams();

  useEffect(() => {
    const data = async () => {
      if(!props.usersReducer.usuarios.length) {
        await props.getAllUsers();
      }
      props.getPostByUser(key);
    }
    data();
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
  getPostByUser  
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);