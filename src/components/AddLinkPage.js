import React from 'react';
import { connect } from 'react-redux';
import LinkForm from './LinkForm';
import { startAddLink } from '../actions/links';

const AddLinkPage = (props) => (
    <div>
        <h1>Add Link</h1>
        <LinkForm 
            onSubmit={(link) => {
                props.dispatch(startAddLink(link));
                props.history.push('/');
            }}
        />
    </div>
); 

export default connect()(AddLinkPage);