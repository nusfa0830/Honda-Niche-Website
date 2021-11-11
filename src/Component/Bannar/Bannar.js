import React from 'react';
import { Button } from 'react-bootstrap';
import './Bannar.css'
import 'animate.css';

const Bannar = () => {
    return (
        <div className=" header-bg-color  py-5">
            <div className="row justify-content-around">
                <div className="col-4  animate__animated animate__bounceanimate__animated animate__fadeInLeft">
                    <div className=" text-white " >

                        <h1>Hero Splendor Plus</h1>
                        <p>we've a collection of bikes from GSXR1000K5 through Cagiva Raptor 1000 to classic Honda CB750 K0 .We have bikes and rebuild classics, with the Zero just keep it fed with tyres. 90% of our riding is under 200 miles so with everything cranked up 100% and..... </p>

                        <Button variant="warning">purchase</Button></div>
                </div>
                <div className="col-4 ">
                    <img className="img-fluid border-0 rounded shadow-lg animate__animated animate__bounceanimate__animated animate__fadeInRight " src="https://bd.gaadicdn.com/processedimages/hero/glamour-2017/494X300/glamour-201760f6aa2b38233.jpg?imwidth=400&impolicy=resize" alt="..." />
                </div>
            </div>
        </div >
    );
};

export default Bannar;
