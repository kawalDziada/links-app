import {  removeLink } from '../../actions/links';


test('should setup remove link sction object', () => {
    const action = removeLink({id: '123abc'});
    expenct(action).toEqual({
        type: 'REMOVE_LINK',
        id: '123abc'
    });
});