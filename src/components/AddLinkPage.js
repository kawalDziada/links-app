import React from 'react';
import { connect } from 'react-redux';
import LinkForm from './LinkForm';
import { startAddLink } from '../actions/links';

const AddLinkPage = (props) => (
    <div>
        <div className="content-container">
            <div className="subtitle-container">
                <h1 className="page-header__title">Add Link</h1>
            </div>
            <LinkForm 
                onSubmit={(link) => {
                    props.dispatch(startAddLink(link));
                    props.history.push('/');
                }}
            />
        </div>
    </div>
); 

export default connect()(AddLinkPage);