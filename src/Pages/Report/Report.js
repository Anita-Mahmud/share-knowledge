import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Report = () => {
    const navigate = useNavigate();
    const [reports,setReports] = useState([]);
    axios.get('https://share-knowledge-server.vercel.ap/report')
.then(reports => {
    setReports(reports.data);
});
const handleDelete = id =>{
    fetch(`https://share-knowledge-server.vercel.ap/products/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            
            toast.success('Deleted successfully');
            
           
        }
    })
//     fetch(`https://share-knowledge-server.vercel.ap/report/${id}`, {
//         method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
// })
}

    return (
        <div className='mx-36'>
        <Sidebar></Sidebar>
        <div>
            <h2 className='font-lobster text-6xl text-center'>Reported Items</h2>

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

                : <h3 className='text-red-600 text-5xl text-center'>No Order</h3>}
        </div>

    </div>
    );
};

export default Report;