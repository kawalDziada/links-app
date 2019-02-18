import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


const LinkListItem = ( {id, adress, description, createdAt}) => (
    <div className="link">
        <a className="adress" href={adress} target="_blank" rel="noopener noreferrer">{adress}</a>
        <p>{description}</p>
        <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
        <Link className="srink" to={`/edit/${id}`}>
             <p className="button button-edit">Edit link</p>
        </Link>
    </div>
);

export default LinkListItem;