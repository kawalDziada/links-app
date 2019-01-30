import React from 'react';
import { Link } from 'react-router-dom';


const LinkListItem = ( {id, adress, description, createdAt}) => (
    <div>
        <a href={adress} target="_blank" rel="noopener noreferrer">{adress}</a>
        <p>{description}</p>
        <p>{createdAt}</p>
        <Link to={`/edit/${id}`}>
            <p>Edit link</p>
        </Link>
    </div>
);

export default LinkListItem;