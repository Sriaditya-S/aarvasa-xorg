export function Heading({label, width}) {
    return <div className="text-xl md:text-3xl text-center md:text-start mb-10 font-[Poppins] font-[500] text-black">
        <h1 className="inline-block relative">{label}
            <hr className={`h-1 absolute bg-gray-100 mt-2 border-0 rounded-xl bg-pink-900`}  style={{ width: "90%" }}></hr>
        </h1>
        
    </div>
}