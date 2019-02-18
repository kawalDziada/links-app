import React from 'react';
import { connect } from 'react-redux';
import LinkFrom from './LinkForm';
import { startRemoveLink, startEditLink } from '../actions/links';

const EditLinkPage = (props) => {
  return (
    <div className="content-container">
      <div className="subtitle-container">
        <h1 className="page-header__title">Edit Link:</h1>
      </div>
      <LinkFrom 
        link={props.link}
        onSubmit={(link) => {
          props.dispatch(startEditLink(props.link.id, link));
          props.history.push('/');
        }}
      />
      <div className="button-remove-div">
      <button className="button button-big__form" onClick={() => {
        props.dispatch(startRemoveLink({id: props.link.id}));
        props.history.push('/');
      }}>Remove</button>
      </div>
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