import React from "react";
import './App.css';
import { Route, Link, Routes } from "react-router-dom";


export default function NavigationBar() {
    return (

        <div>

            <div className="navigationBar">
                <ul>
                    <span className="logo">FIFA INDEX</span>
                    <div><a href="" className="link">Home</a></div>
                    <div><a href="" className="link">Teams</a></div>
                    <div><a href="" className="link">Players</a></div>
                    <div><a href="" className="link">Rankings</a></div>
                    


                </ul>


            </div>


        </div>

    );
}
