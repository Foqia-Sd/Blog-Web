import React from 'react'
import BlogCard from '../components/BlogCard';

const Mega = () => {
  const posts = [
    {
      id: '1',
      title: "Hunza Valley",
      description: "A beautiful region known for its majestic mountains, lush landscapes, and rich culture.",
      date: "11-02-2024",
      imageUrl: "/images/img1.png"
    },
    {
      id: '2',
      title: "Skardu",
      description: "A stunning mountainous region, known for its stunning landscapes, and proximity to K2.",
      date: "11-03-2024",
      imageUrl: "/images/img2.png"
    },
    {
      id: '3',
      title: "Khunjerab pass",
      description: "A high-altitude border crossing between Pakistan and China.",
      date: "11-04-2024",
      imageUrl: "/images/img3.png"
    },
    {
      id: '4',
      title: "Fairy Meadows",
      description: "A picturesque meadow offering views of Nanga Parbat, the ninth-highest mountain in the world.",
      date: "11-05-2024",
      imageUrl: "/images/img4.png"
    },
    {
      id: '5',
      title: "Yasin Valley",
      description: "Known for its breathtaking landscapes, towering peaks, and charming villages.",
      date: "11-05-2024",
      imageUrl: "/images/img5.png"
    },
    {
      id: '6',
      title: "Yasin Valley",
      description: "Gilgit is the capital city of Gilgit-Baltistan in northern Pakistan.",
      date: "11-06-2024",
      imageUrl: "/images/img6.png"
    },
    {
      id: '7',
      title: "Khaplu",
      description: "Known for its ancient forts, stunning landscapes, and majestic valleys of the Karakoram Range.",
      date: "11-07-2024",
      imageUrl: "/images/img7.png"
    },
    {
      id: '8',
      title: "Naltar Valley",
      description: "Renowned for its vibrant alpine scenery, lush forests, crystal-clear lakes.",
      date: "11-08-2024",
      imageUrl: "/images/img8.png"
    },
    {
      id: '9',
      title: "Phander Lake",
      description: "Stunning freshwater lake known for its crystal-clear waters, scenic surroundings.",
      date: "11-09-2024",
      imageUrl: "/images/img9.png"
    },
  ];

  return (
    <div className='my-14 mr-4 ml-4 lg:ml-6 lg:mr-6'>
      <h1 className='text-3xl  font-bold text-center my-8 text-red-600 animate-color-change'>
        {" "}
        Explore Northern Pakistan<br/> A Paradise for Nature Lovers!
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {posts.map((post, index) => (
            <div className='fade-in' key={post.id}>
              <div className='blog-card'>
                <BlogCard post={post} isDarkBackground={index % 2 === 0}/> 
              </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default Mega