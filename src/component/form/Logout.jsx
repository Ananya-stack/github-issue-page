import React from 'react';
import { useUserAuth } from '../../firebaseAuth/UserAuth';

const Logout = () => {
    const {user, logout } = useUserAuth();
    return (
        
        <div>
            
        </div>
    );
}

export default Logout;



