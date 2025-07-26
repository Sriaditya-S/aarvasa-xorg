import { useState } from 'react';
import axios from 'axios';
import Loaders from '../Loaders';
import { toast } from 'react-toastify';
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success' or 'error'
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe`, { email });
      setMessage(res.data.message);
      setStatus('success');
      setEmail('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
      setStatus('error');
    }
    finally{
      setLoad(false);
    }
  };

  return (
    <div className="mx-2 mt-8 mb-8 md:mx-4 relative">
      {load ? <Loaders></Loaders> : null}
      <div className="bg-gradient-to-r rounded-md h-auto from-[#552032] to-[#6E1E32] md:rounded-2xl p-5 sm:p-16 shadow-xl text-white relative overflow-hidden h-[457px]">
        <div className="absolute inset-0 bg-[url('/newsletter.png')] bg-cover bg-center opacity-30"></div>
        <div className="flex flex-col -mt-18 flex-wrap md:flex-row items-center justify-between">
          <div className="flex-1">
            <div className="justify-start text-lime-50 text-2xl text-center md:text-left md:text-5xl font-semibold font-['Poppins'] pb-5">
              Subscribe Our Newsletter
            </div>
            <div className="justify-start text-lime-50 tex-sm md:text-base font-['Poppins'] mb-10">
              Stay connected and never miss an update! By subscribing to our newsletter, you’ll receive the latest news, exclusive content, helpful resources, and special offers directly in your inbox.
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center bg-[#949494] gap-2 md:gap-0 rounded-md md:rounded-full md:px-4 md:py-2 md:max-w-lg z-10"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full bg-transparent text-black placeholder:text-gray-900 outline-none px-2 py-2 z-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-l w-full sm:w-[200px] from-orange-400 to-amber-400 text-black font-semibold md:px-6 py-2 rounded-md md:rounded-full hover:opacity-90 transition z-10"
              >
                Get a Quote
              </button>
            </form>

            {message && (
              <p
                className={`mt-4 z-10 ${
                  status === 'success' ? 'text-green-200' : 'text-red-200'
                }`}
              >
                {message}
              </p>
            )}
          </div>

          <div className="z-10">
            <img
              src="/house.png"
              alt="House"
              className="w-[100%] sm:w-[500px] mx-auto animate-pulse duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
