import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner'; 
import Fatal from '../General/Fatal';
import Comentarios from '../Publicaciones/Comentarios';

import * as userActions from '../../actions/usersActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { getAll: getAllUsers } = userActions;
const { getByUser: getPostByUser, openClose, getComments } = publicacionesActions;

const Publicaciones = (props) => {
  const {key} = useParams();
  const { usersReducer } = props;

  useEffect(() => {
    const data = async () => {
      if(!usersReducer.usuarios.length) {
        await props.getAllUsers();
      }
      if (usersReducer.error) {
        return;
      }
      if(!usersReducer.usuarios[key].hasOwnProperty('post_key')) {
        props.getPostByUser(key);
      }
    }
    data();
  }, []);

  const addUser = () => {

    if (props.usersReducer.error) {
      return <Fatal message={props.usersReducer.error} />
    }
    if(!props.usersReducer.usuarios.length || props.usersReducer.cargando) {
      return <Spinner />;
    };

    const name = props.usersReducer.usuarios[key].name

    return (
      <h1>
        Publicaciones de { name } 
      </h1>
    )

  }

  const addPost = () => {
    const {
      usersReducer,
      usersReducer: { usuarios },
      publicacionesReducer,
      publicacionesReducer: { publicaciones },
    } = props;

    if (!usuarios.length) return;
    if (usersReducer.error) return;
    if (publicacionesReducer.cargando) {
      return <Spinner />;
    }
    if (publicacionesReducer.error) {
      return <Fatal message={publicacionesReducer.error} />
    }
    if(!publicaciones.length) return;
    if(!usuarios[key].hasOwnProperty('post_key')) return;

    const { post_key } = usuarios[key];

    return showInfo(publicaciones[post_key], post_key )
  };

  const showInfo = ( publicaciones, post_key ) => (
    publicaciones.map((post, com_key) => (
      <div 
      className='Post_titulo'
      key={post.id}
      onClick={() => showCommentary(post_key, com_key, post.comments)}
      >
        <h2>
          { post.title }
        </h2>
        <h4>
          { post.body }
        </h4>
        {
          (post.open) ? <Comentarios comments={post.comments} /> : ''
        }
      </div>
    ))
  );
  
  const showCommentary = (post_key, com_key, comments) => {
    props.openClose(post_key, com_key);
    if (!comments.length) {
      props.getComments(post_key, com_key)
    }
  };
  
  return (
    <div>
      {addUser()}
      {addPost()}
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
  getPostByUser,
  openClose,
  getComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);