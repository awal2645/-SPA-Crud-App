
import React ,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import http from '../http';

const Edit = (props) => {
  const navigate=useNavigate();
  const [input, setInput] = useState({});
  const{id}=useParams();

  useEffect(()=>{
    fetchUser();
  },[]);

  const fetchUser=()=>{
    http.get('users/'+id+'/edit').then((res)=>{
      setInput({
        name:res.data.name,
        email:res.data.email,

      })
    }).catch((exception) => {
      console.log(exception);
  });
  }

  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInput(values=>({...values,[name]:value}));
  }


  const submitForm=()=>{
   http.put('/users/'+id,input).then((res)=>{
    navigate('/');
   }).catch((exception) => {
    console.log(exception);
});
    console.log(input);
  }
  return (
    
    <>
        <div className='row justify-content-center'>
          
            <div className=' col-sm-6  '>
                <div className='card p-4'>
                  <h2>Edit User</h2>
                 
                    <label htmlFor="" >Name</label>
                    <input type="text" name="name" id="" className=' form-control mb-2'  required
                      value={input.name|| ''}
                      onChange={handleChange}
                    />
                    <label htmlFor="" >Email</label>
                    <input type="email" name="email" id="" className=' form-control mb-2'  required
                       value={input.email|| ''}
                      onChange={handleChange}
                    />
                  
                    <button onClick={submitForm} className='btn btn-info mt-2' type='button' >Update</button>
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Edit