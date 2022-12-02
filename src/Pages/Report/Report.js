import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Report = () => {
   
    const [reports,setReports] = useState([]);
    axios.get('https://share-knowledge-server-anita-mahmud.vercel.app/report')
.then(reports => {
    setReports(reports.data);
});
const handleDelete = id =>{
    fetch(`https://share-knowledge-server-anita-mahmud.vercel.app/products/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            
            toast.success('Deleted successfully');
            
           
        }
    })
//     fetch(`https://share-knowledge-server-anita-mahmud.vercel.app/report/${id}`, {
//         method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
// })
}

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 mb-36'>
        <div className='mx-auto'>
            <Sidebar></Sidebar>
            </div>
        <div className='col-span-2'>
            <h2 className='font-lobster text-6xl text-center mb-4'>Reported Items</h2>

            {reports.length > 0 ?
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                         
                            <th>Title</th>
                            <th>Price</th>
                            
                            <th>Action</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {

reports.map((report, i) => <tr key={report._id}>
                                <th>{i + 1}</th>
                               
                                <td>{report.name}</td>
                                <td>{report.resale_price} Taka</td>
                                
                                <td><button className='btn btn-info'onClick={()=>handleDelete(report._id)}>Delete</button></td>
                                
                                </tr>
                            )}
                    </tbody>
                </table>

                : <h3 className='text-red-600 text-5xl text-center'>No Items</h3>}
        </div>

    </div>
    );
};

export default Report;