import React , { useState} from 'react';
import axios from "axios";
import {Link , useNavigate} from "react-router-dom";
export const Application = () => {
    
    const navigate = useNavigate();
    const [user , setUser] = useState({
        rel_man_name:"" , name:"" , email:"" , address:"" , dob:"" , phone:"" , pan:"" , adhar:"" , status:"draft"
       });
    
       let name,value ;
       
     const handleInputs = (e) => {
       console.log(e);
       name=e.target.name;
       value=e.target.value;
      
       setUser({ ...user , [name]:value});
    
      
     }
     
 function PostData(e){
    e.preventDefault();
 
    
   axios.post("http://localhost:5000/register" , user)
    .then(data=>{
         if(data.error) {
           alert(data.error);
         }else{
           console.log(data.data.user._id);
           var temp = data.data.user._id;
           setUser({
             ...user,
             rel_man_name:"" , name:"" , email:"" , address:"" , dob:"" , phone:"" , pan:"" , adhar:"" , status:"draft"
           });
           console.log(user);
           navigate('/products/'+ temp);
         }
    })
  
   }
  
    return (
        <>
        <div class = "shadow p-3 mb-5 bg-white rounded m-4">
            <h4 class="d-flex justify-content-center">Registration Form</h4>
            <form class = "m-4" onSubmit={(e)=>PostData(e)}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" onChange={handleInputs} name='email' class="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group mt-2">
                    <label for="exampleInputEmail1">Relationship Manager Name</label>
                    <input type="text" onChange={handleInputs} name="rel_man_name" class="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Relationship Manager Name" />
                    
                </div>
                <div class="form-group mt-2">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" onChange={handleInputs} name='name' class="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter  Name" />
                    
                </div>
                <div class="form-group mt-2">
                    <label for="exampleInputEmail1">Address</label>
                    <input type="text" onChange={handleInputs} name='address' class="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Address" />
                    
                </div> <div class="form-group mt-2">
                    <label for="exampleInputEmail1">Date of Birth</label>
                    <input type="date" onChange={handleInputs} name="dob" class="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter  Name" />
                    
                </div>
                <div class="form-group mt-2">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <input type="number" onChange={handleInputs} name='phone' class="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" />
                    
                </div> <div class="form-group mt-2">
                    <label for="exampleInputEmail1">PAN details</label>
                    <input type="text"  onChange={handleInputs} name ="pan" class="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Pan number" />
                    
                </div> <div class="form-group mt-2">
                    <label for="exampleInputEmail1">Adhar Details</label>
                    <input type="number" onChange={handleInputs} name='adhar' class="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your adhar number" />
                    
                </div>
              
                <div class = "d-flex justify-content-center">
                    
                        <button type="submit"class="btn  btn-success mt-3">Next</button>
                    
                </div>
            </form>
            </div>
        </>
    )
}
