import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LinksListItem from './LinkListItem';
import selectLinks from '../selectors/links';

const LinksList = (props) => (
    <div>
        <div className="content-container">
        <div className="header__content">
            <Link className="button button-big" to="/add">ADD LINK!</Link>
            </div> 
            <div className="header__content">
                <h1>List of Links:</h1>
            </div>
                <div className="content-container linksWraper">
                    {props.links.map((link) => {
                        return <LinksListItem key={link.id} {...link}/>
                    })}
                </div>
        </div>
    </div>
);

const mapStatetoProps = (state) => {
    return {
        links: selectLinks(state.links, state.filters)
    };
};

export default connect(mapStatetoProps)(LinksList);

