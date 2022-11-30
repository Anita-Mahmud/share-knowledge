import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
const Sidebar = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <div className="btn-group btn-group-vertical">
                {isAdmin && <button className="btn">Button11</button>}
               { isSeller && <><button className="btn">Button</button>
                <button className="btn">Button</button></>}
                {!isAdmin && !isSeller &&<>
                    <button className="btn"><Link to='/orders'>My Orders</Link></button>
                </>}
            </div>
        </div>
    );
};

export default Sidebar;