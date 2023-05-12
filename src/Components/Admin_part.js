import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Admin_part = () => {
    const [info, setInfo] = useState({
        arrdata: []
    });

    const navigate = useNavigate();
    function Previous(e, temp) {
        e.preventDefault();

        navigate("/view/" + temp);
    }
    function Approve(e, temp) {
        e.preventDefault();

        axios.put("http://localhost:5000/approve/"+temp)
        .then(data=>{
             if(data.error) {
               alert(data.error);
             }else{
               
               alert('Application Approved Successfully');
              
             }
        })
      

        
    }




    function Denie(e, temp) {
        e.preventDefault();

        axios.put("http://localhost:5000/denied/"+temp)
        .then(data=>{
             if(data.error) {
               alert(data.error);
             }else{
               
               alert('Application Denied');
              
             }
        })
      
    }


    function Load() {


        axios.get("http://localhost:5000/getdata")
            .then((res) => {
                console.log(res);
                setInfo({
                    arrdata: res.data.data
                });


            })
            .catch((err) => {
                console.log(err);
            })



    }



    useEffect(() => {
        Load();
    }, [info]
    );

    return (
        <>
            <div class="shadow p-3 mb-5 bg-white rounded m-4">
            <h4 class="d-flex justify-content-center">Operation Manager's Operations
            
            </h4>
                <b class="d-flex justify-content-center"><Link to="/">
                 <button type="submit"  class="btn btn-danger m-2">Go Back</button>
            </Link></b>
                <div class="row">

                    {info.arrdata.map((post, pos) => {
                        return (<>

                            <div class="col-sm-6 p-1" >
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-end ">


                                            <button type="submit" onClick={(e) => Approve(e, post._id)} class="btn btn-info  m-2">Approve</button>

                                            <button type="submit" onClick={(e) => Denie(e, post._id)} class="btn btn-info  m-2">Denie</button>

                                        </div>
                                        <h5 class="card-title">Name : {post.name}</h5>
                                        <p class="card-text">Email : {post.email}</p>
                                        <b class="border rounded border-success p-2 ">{post.status}</b>

                                        <div class="d-flex justify-content-center ">


                                            <button type="submit" onClick={(e) => Previous(e, post._id)} class="btn btn-danger mt-3 m-4">View Full Information</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>)
                    })}

                </div>

            </div>
        </>
    )
}
