import React from 'react';
import { connect } from 'react-redux';
import LinksListItem from './LinkListItem';
import selectLinks from '../selectors/links';

const LinksList = (props) => (
    <div>
        <h1>List of Links</h1>
        {props.links.map((link) => {
            return <LinksListItem key={link.id} {...link}/>
        })}
    </div>
);

const mapStatetoProps = (state) => {
    return {
        links: selectLinks(state.links, state.filters)
    };
};

export default connect(mapStatetoProps)(LinksList);

