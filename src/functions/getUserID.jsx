import { v4 as uuidv4 } from 'uuid';

const getUserID = () => {
    let userID = localStorage.getItem('userID')
    if (!userID) {
        userID = uuidv4();
        localStorage.setItem('userID', userID);
    } 
    return userID
}

export default getUserID