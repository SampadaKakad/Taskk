import React , { useState} from 'react';
import axios from "axios";
import {Link , useNavigate , useParams} from "react-router-dom";

export const Products = () => {
    const navigate = useNavigate();
    let ID = useParams();
    console.log(ID.id);
    const [checked, setChecked] = useState([]);
    const [user , setUser] = useState([]);
    
       let name,value ;

       const handleCheck = (event) => {
        console.log(event.target.value);
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
       
     const handleInputs = (e) => {
       console.log(e);
       name=e.target.name;
       value=e.target.value;
      
       setUser({ ...user , [name]:value});
    
      
     }
     function Cancel(e){
        e.preventDefault();
        alert("Information saved as Draft");
        navigate("/");
     }
     
 function PostData(e){
    e.preventDefault();
 
    console.log(checked);
   axios.put("http://localhost:5000/update/"+ID.id , checked)
    .then(data=>{
         if(data.error) {
           alert(data.error);
         }else{
           
           
           navigate("/review/"+ ID.id);
         }
    })
  
   }
    return (
        <>
            <div class="shadow p-3 mb-5 bg-white rounded m-4">
                <h4 class="d-flex justify-content-center">Registration Form</h4>
                <h6 class="d-flex justify-content-center">Select Products </h6>
                <form class="m-4">


                    <div class="form-check form-check">
                        <input class="form-check-input" onChange={handleCheck} type="checkbox" id="inlineCheckbox1" value="Saving Account with minimum 10k" />
                        <label class="form-check-label" for="inlineCheckbox1">Saving Account with minimum 10k</label>
                        <br/>
                    </div>
                    <div class="form-check form-check">
                        <input class="form-check-input" onChange={handleCheck} type="checkbox" id="inlineCheckbox1" value="Premium Saving Account with minimum 80K" />
                        <label class="form-check-label" for="inlineCheckbox1">Premium Saving Account with minimum 80K</label>
                        <br/>
                    </div>
                    
                    <div class="form-check form-check">
                        <input class="form-check-input" onChange={handleCheck} type="checkbox" id="inlineCheckbox1" value="Salary Account" />
                        <label class="form-check-label" for="inlineCheckbox1">Salary Account</label>
                        <br/>
                    </div>
                    <div class="form-check form-check">
                        <input class="form-check-input" onChange={handleCheck} type="checkbox" id="inlineCheckbox1" value="Student Account" />
                        <label class="form-check-label" for="inlineCheckbox1">Student Account</label>
                        <br/>
                    </div>
                    <div class="form-check form-check">
                        <input class="form-check-input" onChange={handleCheck} type="checkbox" id="inlineCheckbox1" value="Minor Account" />
                        <label class="form-check-label" for="inlineCheckbox1">Minor Account</label>
                        <br/>
                    </div>
                    
                    <div class="form-check form-check">
                        <input class="form-check-input" onChange={handleCheck} type="checkbox" id="inlineCheckbox1" value="Current Account" />
                        <label class="form-check-label" for="inlineCheckbox1">Current Account</label>
                        <br/>
                    </div>
                    <div class="form-check form-check">
                        <input class="form-check-input" onChange={handleCheck} type="checkbox" id="inlineCheckbox1" value="Special Pension Scheme" />
                        <label class="form-check-label" for="inlineCheckbox1">Special Pension Scheme</label>
                        <br/>
                    </div>
                    <div class="d-flex justify-content-center ">
                        
                            <button type="submit" onClick={(e)=>PostData(e)} class="btn btn-success mt-3 m-4">Next</button>
                        
                        
                            <button type="submit" onClick={(e)=>Cancel(e)} class="btn btn-danger mt-3 m-4">Cancel</button>
                        
                    </div>
                </form>
            </div>
        </>
    )
}
