import React from "react";
import { useState } from "react";
import PackageOptions from "../components/PackageOptions";
import OrderOptions from "../components/OrderOptions";
import { packageDetails } from "../data/packageDetails";

export default function Commissions(){

    // const [selectedPackage, setSelectedPackage] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(packageDetails['basic']);

    const [show, setShow] = useState(false);
    
    // Function to open the offcanvas
    //const handleShow = () => setShow(true);

    function handleShow(packageType){
        setSelectedPackage(packageDetails[packageType])
        setShow(true)
    };

    // Function to close the offcanvas
    const handleClose = () => setShow(false);

    return(
        <>
        <PackageOptions handleShow={handleShow}/>
        <OrderOptions show={show} handleClose={handleClose} selectedPackage={selectedPackage}/>
        </>
        
    )
}