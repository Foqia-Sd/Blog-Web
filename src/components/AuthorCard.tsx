import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AuthorCard = () => {
  return (
    <>
    <div className='bg-slate-100 shadow-lg rounded-lg p-6 mt-12'>
        <div className='flex items-center animation-fadeIn'>

            <img 
            src="/images/my-pic.jpg" 
            alt="Author Images"
            className='w-16 h-16 rounded-full mr-4 object-cover border-4 border-[#2A254B]' 
            />

            <div>
                <h3 className='text-xl font-bold'>Foqia Siddiqui</h3>
                <p className='text-slate-500'>
                     {""}
                    Blogger | Content Writer
                </p>
            </div>
        </div>

        <p className='mt-4 text-black leading-relaxed'>
        A curious explorer and avid writer, this blogger is dedicated to capturing the essence of unique destinations and sharing stories that inspire others to discover the wonders of the world!
        </p>

        <div className='mt-4 flex space-x-3'>
            <a 
            href="https://www.linkedin.com/in/foqia-siddiqui-3357152b5/" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaLinkedin size={18}/>
            </a>
            <a 
            href="https://www.facebook.com/profile.php?id=61562307717172" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaFacebook size={18}/>
            </a>
            <a 
            href="https://www.instagram.com/foqia.sd78/" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaInstagram size={18}/>
            </a>
            <a 
            href="https://github.com/Foqia-Sd" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaGithub size={18}/>
            </a>
            
        </div>

    </div>
    </>
  );
}

export default AuthorCard