
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const View = () => {

    const navigate = useNavigate();
    let ID = useParams();

    console.log(ID.id);


    function Previous(e) {
        e.preventDefault();

        navigate("/");
    }


    const [info, setInfo] = useState({

    });



    function Load() {


        axios.get("http://localhost:5000/get_specific_user/" + ID.id)
            .then((res) => {
                console.log(res);
                setInfo(
                    res.data.data
                );
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

            <div class="shadow p-3 mb-5 bg-white rounded m-4">
                <h4 class="d-flex justify-content-center m-4 p-2">Preview Of Application </h4>
                <b>Name : </b> {info.name}
                <br />
                <b>Relationship Manager Name : </b> {info.rel_man_name}
                <br />
                <b>Email : </b> {info.email}
                <br />
                <b>Address : </b> {info.address}
                <br />
                <b>Date Of Birth : </b> {info.dob}
                <br />
                <b>Phone Number : </b> {info.phone}
                <br />
                <b>Adhar Number : </b> {info.adhar}
                <br />
                <b>PAN Number : </b> {info.pan}
                <br />
                {/* <b>List Of Products : </b>
                {info.products.map((post , pos)=>{
                    return(<>
                    <p>{pos+1} : {post}</p>
                    
                    </>)
                })} */}


                <div class="d-flex justify-content-center ">


                    <button type="submit" onClick={(e) => Previous(e)} class="btn btn-danger mt-3 m-4">Previous</button>

                </div>
            </div>
        </>
    )
}
