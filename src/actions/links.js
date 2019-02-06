import uuid from 'uuid';
import database from '../firebase/firebase';

export const addLink = (link) => ({
    type: 'ADD_LINK',
    link
});

export const startAddLink = (linkData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            adress = '', 
            description = '', 
            createdAt = 0
        } = linkData;
        const link = {adress, description, createdAt};
        return database.ref(`users/${uid}/links`).push(link).then((ref) => {
            dispatch(addLink({
                id: ref.key,
                ...link
            }));
        });
    };
};

export const removeLink = ({id } = {}) => ({
    type: 'REMOVE_LINK',
    id
});

export const startRemoveLink = ({id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/links/${id}`).remove().then(() => {
            dispatch(removeLink({ id }));
        });
    };
};

export const editLink = (id, updates) => ({
    type: 'EDIT_LINK',
    id,
    updates
});

export const startEditLink = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/links/${id}`).update(updates).then(() => {
            dispatch(editLink(id, updates));
        })
    }
};

export const setLinks = (links) => ({
    type: 'SET_LINKS',
    links
});

export const startSetLinks = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/links`).once('value').then((snapshot) => {
            const links = [];
            snapshot.forEach((childSnapshot) => {
                links.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setLinks(links));
        });
    }
};