import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import Sidebar from '../../components/Sidebar';
import { AuthContext } from '../../context/AuthProvider';

const Dashboard = () => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 '>
            <div className='mx-auto'>
            <Sidebar></Sidebar>
            </div>
            <div className='col-span-2'>
            <h2 className='font-lobster text-4xl italic text-center'>Profile</h2>
            <div className="card bg-base-100 shadow-md shadow-blue-500/50 my-10">
                    <div className="card-body mx-auto">
                        <div className="avatar">
                            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </div>
                        <h2 className="text-center text-3xl">{user?.displayName}</h2>
                        <p className='text-center text-3xl'>{user?.email}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;