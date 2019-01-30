import React from 'react';
import LinksList from './LinksList';
import LinkListFilters from './LinksListFilters';

const LinksMainPage = () => (
    <div>
        <LinkListFilters/>
        <LinksList />
    </div>
); 

export default LinksMainPage;