import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Cards } from "./Cards";
export const Start = () => {



    return (
        <>
            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand mx-5">Dashboard</a>
                <Link to="/register">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Fill Application Form</button>
                </Link>

                <Link to="/admin">
                    <button class="btn btn-outline-success my-2 mx-4 my-sm-0" type="submit">Admin Access</button>
                </Link>
            </nav>
            <div class="m-4 p-4">
                <Cards />
            </div>
        </>
    )
}
