import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/PropertyBrief/About';
import { Explore } from '../components/PropertyBrief/Explore';
import Slider from '../components/About/Slider';
import Sale from '../components/PropertyBrief/Sale';
import Photos from '../components/PropertyBrief/Photos';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loaders from '../components/Loaders';

const PropertyDetails = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listings/${id}`);

        // marking property to recntly viewed
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/listings/postrecent`, {propertyId:id}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        setData(res.data.data); 
      } catch (err) {
        console.error("Error fetching property:", err);
      }
      finally{
        setLoader(false);
      }
    };

    getData();
  }, [id]);

  if (!data) return <Loaders></Loaders>;

  return (
    loader ? <Loaders></Loaders> :<>
      <div className="bg-orange-50 pt-[120px] pb-[100px]">
        <Photos data={data} />
        <Sale
          address={data.location}
          price={data.price}
          priceD={data.priceD}
          unit={data.unit}
          bed={data.bedrooms}
          bath={data.bathrooms}
          area={data.carpetArea}
          transactionType={data.transactionType}
        />
        <About data={data} />
        <Explore data={data} coordinates={data.coordinates} />
      </div>
      <Slider />
    </>
  );
};

export default PropertyDetails;
