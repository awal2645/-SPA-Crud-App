
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import http from '../http';

const Create = () => {
  const navigate=useNavigate();
  const [input, setInput] = useState({});
  const handleChange=(event)=>{
    
    const name=event.target.name;
    const value=event.target.value;
    setInput(values=>({...values,[name]:value}));
  }
  const submitForm=()=>{
   http.post('/users',input).then((res)=>{
   
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
                  <h2>New User</h2>
                 
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
                    <label htmlFor="" >Password</label>
                    <input type="password" name="password" id="" className=' form-control mb-2'  required
                       value={input.password|| ''}
                      onChange={handleChange}
                    />
                    <button onClick={submitForm} className='btn btn-info mt-2' type='button' >Create</button>
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Create