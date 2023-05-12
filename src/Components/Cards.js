
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Cards = () => {
    const [info, setInfo] = useState({
        arrdata: []
    });

    const navigate = useNavigate();
    function Previous(e, temp) {
        e.preventDefault();

        navigate("/view/" + temp);
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
    }, []
    );

    return (
        <>

            <div class="row">

                {info.arrdata.map((post, pos) => {
                    return (<>

                        <div class="col-sm-6 p-1" >
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Name : {post.name}</h5>
                                    <p class="card-text">Email :{post.email}</p>
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
        </>
    )
}
