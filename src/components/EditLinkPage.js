import React from 'react';
import { connect } from 'react-redux';
import LinkFrom from './LinkForm';
import { removeLink, editLink } from '../actions/links';

const EditLinkPage = (props) => {
  return (
    <div>
      <LinkFrom 
        link={props.link}
        onSubmit={(link) => {
          props.dispatch(editLink(props.link.id, link));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeLink({id: props.link.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
    return {
        link: state.links.find((link) => {
            return link.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(EditLinkPage);