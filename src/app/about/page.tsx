import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className='w-full bg-gradient-to-r from-purple-600 to-blue-950 py-16'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8'>
        {/* Profile Section */}
        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6'>
          <img 
            src="/images/my-pic.jpg" 
            alt="Author Images"
            className='w-32 h-32 rounded-full object-cover border-4 border-[#2A254B] transform transition duration-500 hover:scale-110' 
          />
          <div>
            <h3 className='text-3xl font-extrabold text-[#2A254B]'>
              Foqia Siddiqui
            </h3>
            <p className='text-lg text-slate-500 mt-2'>
              Blogger | Content Writer
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <p className='mt-6 text-xl text-gray-800 leading-relaxed'>
          A curious explorer and avid writer, this blogger is dedicated to capturing the essence of unique destinations and sharing stories that inspire others to discover the wonders of the world!
        </p>

        {/* Social Links Section */}
        <div className='mt-8 flex justify-center space-x-6'>
          <a 
            href="https://www.linkedin.com/in/foqia-siddiqui-3357152b5/" 
            target='_blank'
            className='p-4 bg-[#2A254B] text-white rounded-full hover:bg-amber-600 transition duration-300 transform hover:scale-110'
            aria-label='LinkedIn'
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61562307717172" 
            target='_blank'
            className='p-4 bg-[#2A254B] text-white rounded-full hover:bg-amber-600 transition duration-300 transform hover:scale-110'
            aria-label='Facebook'
          >
            <FaFacebook size={18} />
          </a>
          <a 
            href="https://www.instagram.com/foqia.sd78/" 
            target='_blank'
            className='p-4 bg-[#2A254B] text-white rounded-full hover:bg-amber-600 transition duration-300 transform hover:scale-110'
            aria-label='Instagram'
          >
            <FaInstagram size={18} />
          </a>
          <a 
            href="https://github.com/Foqia-Sd" 
            target='_blank'
            className='p-4 bg-[#2A254B] text-white rounded-full hover:bg-amber-600 transition duration-300 transform hover:scale-110'
            aria-label='GitHub'
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Animation */}
        <div className='mt-10'>
          <h4 className='text-2xl text-[#2A254B] font-bold mb-4'>
            Let's Connect and Create Amazing Things Together!
          </h4>
          <p className='text-lg text-gray-700'>
            Whether you're looking for content, collaboration, or simply a great conversation, feel free to reach out. I'm always open to exploring new opportunities and ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;