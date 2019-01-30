import uuid from 'uuid';

export const addLink = (
    {
        adress = '', 
        description = '', 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_LINK',
    link: {
        id: uuid(),
        adress,
        description,
        createdAt
    }
});

export const removeLink = ({id } = {}) => ({
    type: 'REMOVE_LINK',
    id
});

export const editLink = (id, updates) => ({
    type: 'EDIT_LINK',
    id,
    updates
});