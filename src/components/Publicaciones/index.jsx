import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner'; 
import Fatal from '../General/Fatal'; 

import * as userActions from '../../actions/usersActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { getAll: getAllUsers } = userActions;
const { getByUser: getPostByUser } = publicacionesActions;

const Publicaciones = (props) => {
  const {key} = useParams();
  const { usersReducer } = props;

  useEffect(() => {
    const data = async () => {
      if(!usersReducer.usuarios.length) {
        await props.getAllUsers();
      }
/*       if (usersReducer.error) {
        return;
      } */
      if(!usersReducer.usuarios[key].hasOwnProperty('post_key')) {
        props.getPostByUser(key);
      }
    }
    data();
  }, []);

  const addUser = () => {

    if (usersReducer.error) {
      return <Fatal message={usersReducer.error} />
    }
    if(!usersReducer.usuarios.length || usersReducer.cargando) {
      return <Spinner />;
    };

    const name = usersReducer.usuarios[key].name

    return (
      <h1>
        Publicaciones de { name } 
      </h1>
    )

  }

  console.log(props);
  
  return (
    <div>
      {key}
      {addUser()}
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