import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Search, Home, IndianRupee, Earth, KeyRound, Map, BedDouble, Building2, UploadCloud } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { FilterContext } from '../../context/FilterProvider'
import Select from 'react-select';
import { Link } from 'react-router-dom'
import Alert from '../Utils/Alert'
import { toast } from 'react-toastify'
const Landing = () => {
    const options = [{
        title: "Buy",
        icon: <Home size={22}></Home>,
        fn: () => {
            handleChange('transactionType', 'New Property')
        }
    },
    {
        title: "Rent",
        icon: <KeyRound size={22}></KeyRound>,
        fn: () => {
            handleChange('transactionType', 'Rent')
        }
    }, {
        title: "Plot",
        icon: <Map size={22}></Map>
    }, {
        title: "PG",
        icon: <BedDouble size={22}></BedDouble>,
    }, {
        title: "Commercial",
        icon: <Building2 size={22}></Building2>
    }];
    let [selected, setSelected] = useState(-1);
    const [prevs, setPrev] = useState({});
    const { filters, setFilters } = useContext(FilterContext);
    const navigate = useNavigate();
    const toggleSelected = (index) => {
        setSelected(prev => prev === index ? -1 : index);
    }



    const handleChange = (key, value) => {
        setPrev((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleFilter = () => {
        navigate("/listings");
    }

    useEffect(() => {
        setFilters(prevs);

    }, [prevs])

     const amount = [
    { value: 500000, label: 'Up to ₹5L' },
    { value: 1000000, label: 'Up to ₹10L' },
    { value: 2000000, label: 'Up to ₹20L' },
    { value: 5000000, label: 'Up to ₹50L' },
    { value: 100000000, label: 'Up to ₹1Cr' }
  ];

    const propType = [
        { value: 'Apartments', label: 'Apartments' },
        { value: 'Villa', label: 'Villa' },
    ]

    return (
           <>

        <div className='overflow-x-hidden py-4 px-2 md:mx-8 overflow-hidden flex w-auto flex-wrap lg:flex-nowrap h-full items-center justify-center md:justify-between md:px-4 rounded-lg lg:h-[80vh]' style={{
            background: "linear-gradient(to right, #F9EAF1, #8C2841)",
        }} >
            <div className='content md:py-auto'>
                <p className='text-[#692234] text-xl md:text-2xl'>Welcome to Aarvasa</p>
                <h1 className='text-[#692234] text-5xl lg:text-8xl font-bold mt-4 mb-8'>Manage your <br></br> property</h1>
                <p className='text-[#692234] text-sm md:text-lg mt-4 mb-8'>You will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>
                <div className='bg-white w-auto mx-2 p-4 group hover:transform md:hover:scale-[1.03] transition-all flex flex-col rounded-lg z-[999] relative'>
                    <div className="tags flex items-center gap-3 flex-wrap">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    toggleSelected(index)
                                    option.fn()
                                }}
                                className={`text-sm flex items-center gap-2 border border-2 p-1 px-3 rounded-lg shadow-md transition-all hover:transform hover:scale-[1.1] hover:rotate-[5deg]
        ${selected === index ? "bg-[#8C2841] text-white" : "text-gray-700 border-gray-300 hover:bg-[#8C2841] hover:text-white"}
      `}
                            >
                                {option.icon}
                                {option.title}
                            </button>
                        ))}
                        <Link to={"/AddListing"}>
                            <button
                                className={`text-sm flex items-center gap-2 border border-2 p-1 px-3 rounded-lg shadow-md transition-all hover:transform hover:scale-[1.1] hover:rotate-[5deg]`}
                            >
                                <UploadCloud size={22} />
                                Post a property
                            </button></Link>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <div className="searches space-y-4 md:space-y-0 flex items-center gap-2 flex-wrap lg:flex-nowrap">
                        <div className="search_bar w-full flex items-center gap-2 hover:text-[#8C2841]">
                            <MapPin></MapPin>
                            <input type="text" value={filters.city} className='border p-2 rounded-lg w-full outline-none font-semibold' onChange={(e) => handleChange("city", e.target.value)} placeholder='Enter city, locality, project' />
                        </div>
                        <div className="property w-full gap-2 flex items-center hover:text-[#8C2841]">
                            <Earth />
                            <Select
                                options={propType}
                                value={propType.find(opt => opt.value === filters.propertyType)}
                                onChange={(selectedOption) => handleChange("propertyType", selectedOption.value)}
                                className="w-full text-sm font-semibold"
                                  menuPortalTarget={document.body} 
                                styles={{
                                     menuPortal: base => ({ ...base, zIndex: 9999 }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        padding: 18,
                                        backgroundColor: state.isSelected ? '#8C2841' : state.isFocused ? '#F3E6EA' : 'white',
                                        color: state.isSelected ? 'white' : '#333',
                                        cursor: 'pointer',
                                     
                                    }),
                                    control: (provided) => ({
                                        ...provided,
                                        borderColor: '#ccc',
                                        boxShadow: 'none',
                                        '&:hover': { borderColor: '#8C2841' },
                                        padding: '2px',
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: '#333',
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        zIndex: 9999,
                                    }),
                                }}
                            />

                        </div>
                        <div className="budget w-full flex items-center gap-2 hover:text-[#8C2841]">
                            <IndianRupee></IndianRupee>
                            <Select
                                options={amount}
                                value={amount.find(v => v.value === filters.budget) || null}
                                onChange={(e) => handleChange("budget", e.value)}
                                className="w-full z-[999999] relative text-sm"
                                menuPortalTarget={document.body}
                                styles={{
                                    menuPortal: base => ({ ...base, zIndex: 9999 }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        padding: 12,
                                        color: state.isSelected ? 'white' : '#333', // ✅ visible text
                                        backgroundColor: state.isSelected ? '#8C2841' : 'white',
                                        ':hover': {
                                            backgroundColor: '#F9EAF1',
                                            color: '#8C2841',
                                        },
                                    }),
                                    control: (base, state) => ({
                                        ...base,
                                        borderColor: '#8C2841',
                                        boxShadow: state.isFocused ? '0 0 0 1px #8C2841' : base.boxShadow,
                                        '&:hover': {
                                            borderColor: '#8C2841',
                                        },
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: '#8C2841',
                                    }),
                                }}
                            />

                        </div>
                        <button onClick={handleFilter} className='flex w-full md:w-fit items-center justify-center gap-3 p-2 px-4 bg-gradient-to-r from-[#F7A240] to-[#F5C01A] group-hover:transition-all group-hover:transition-delay-[7s]  group-hover:from-[#FFFDF3] font-bold group-hover:text-white group-hover:bg-[#8C2841] rounded-lg' >
                            <Search />
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="image relative group w-[600px]">
                <img src="/images/shape1.png" className='absolute hidden md:block top-12 left-4 w-[200px]' alt="" />
                <img src="/images/shape2.png" className='absolute hidden md:block right-8 top-8  transform rotate-180 w-[210px]' alt="" />
                <img src="/images/shape3.png" className='absolute hidden md:block left-16 bottom-16 w-[210px]' alt="" />
                <img src="/images/shape4.png" className='absolute hidden md:block right-0 bottom-28 w-[210px]' alt="" />
                <motion.img
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{
                        duration: 2,       // total duration of one flicker cycle
                        repeat: Infinity,  // infinite loop
                        ease: "easeInOut"
                    }}
                    src="/images/hero.png" className='w-full md:hover:transform hover:scale-[1.1] transition-all relative z-[999]' alt="" />
            </div>
        </div>
    
           </>
    )
}

export default Landing
