import { Search } from "lucide-react"
import Graphs from "../components/listing/Graphs"
import { Heading } from "../components/Utils/Heading"
import NavbarRaw from '../components/NavbarRaw'

import { BrowserRouter as Router, Route, Outlet, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Property from "../components/listing/Property";
import Page from "../components/listing/Page";
import ListingFilterBar from "../components/listing/ListingFilterBar"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const Profile = () => {
   
    return ( 
        <>
            <div className="pb-8 bg-orange-50 pt-[90px] pb-[100px]">

                <Page></Page>

                <Outlet></Outlet>
            </div>




        </>
    )
}
export default Profile;