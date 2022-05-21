import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

const Comentarios = (props) => {
  if (props.com_error) {
    return <Fatal message={props.com_error} />
  }
  if (props.com_cargando && !props.comments.length) {
    return <Spinner />
  }

  const addComments = () => (
    props.comments.map((comment) => (
      <li>
        <b>
          <u>
            {comment.email}
          </u>
        </b>
        <br />
        {comment.body}
      </li>
    ))
  );

  return (
    <ul>
      {addComments()}
    </ul>
  );
};
const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);