import Collapsable from '../components/Collapsable/Collapsable';
import CourseCard from '../components/cards/courseCard/CourseCard';
import Layout from '../components/templates/Layout'
import React,{useState} from 'react'
import image1 from "../components/images/immage.jpg";
import PageInfo from "../components/PageUtils/PageInfo";
import Image from 'next/image'
function courses() {
  const data = [
    { image: image1, title: "webDesigning11", duration: "1.5 months" },
    { image: image1, title: "webDesigning22", duration: "3.5 months" },
    { image: image1, title: "webDesigning3", duration: "4.5 months" },
    { image: image1, title: "webDesigning4", duration: "4.5 months" },
    { image: image1, title: "webDesigning4", duration: "5.5 months" },
    { image: image1, title: "webDesigning4", duration: "5.5 months" },
    { image: image1, title: "webDesigning4", duration: "5.5 months" },
    { image: image1, title: "webDesigning4", duration: "5.5 months" },
  ];
  const [ID, setID] = useState(0);

  const datad = [
    {
      id:1,
      title:'category'
    },
    {
      id:2,
      title:'category'
    },
    {
      id:3,
      title:'category'
    }
  ];
  const body=[
    {
      id:1,
      title:'kinged'
    },
    {
      id:1,
      title:'kinged'
    },
    {
      id:1,
      title:'kinged'
    },
    {
      id:1,
      title:'kinged'
    },
    {
      id:1,
      title:'kinged'
    }
  ];

  return (
    <Layout>

      <div className='w-full mx-auto'>
      <PageInfo page="our Courses" prev="Home" />

        {/* <div className='h-44 bg-purple-500 flex justify-center items-center'>Our Coursesed</div> */}
      </div>


      <div className='mx-6  grid grid-cols-5  py-12'>

        <div className='mx-4 pt-6'>
          <div className=''>
          <input type='text' placeholder='quick search'  className=' 
           border border-gray-400 h-12 p-1
          rounded-md 
          focus:border-purple-400 focus:border-2
          placeholder:capitalize -md  placeholder:text-gray-300
           w-full' />  
          </div>
          <Collapsable 
           method={""}
           method_second={""}
           // title={val.title}
           data={datad}
           body={body}
           // id={val.id}
          //  setID={setID}
          
          />
          
          
        </div>
        <div className=" col-span-4 ">
        <div className='bg-gray-100 m-3 
         h-128 grid grid-cols-2 
      my-5 
      border-0 
      hover:border-b-4 border-primary-200 rounded-md
      
      
      '>
        <div className='w-10/12 mx-auto p-4 flex flex-col justify-center  '>
          <div className='flex items-end justify-between'>
            <div className='w-fit p-2 text-base px-10 bg-primary-200 text-white'>Featured</div>
          <div className='text-lg font-semibold'>
            Price <span className='text-primary-200 text-lg mx-3 font-bold'>Rs. 12000</span>
          </div>
          
          </div>
          <div className='py-8 text-justify'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc
          </div>
        </div>
        <div className="w-full h-full relative">
        <Image
          height={500}
          width={800}
          src={image1}
          placeholder="blur"
          blurDataURL={image1}
          quality={100}
          layout='fill'
          objectFit='cover'
          className="transition duration-500 
          hover:scale-105 rounded-sm cursor-pointer"
        />
      </div>
      </div>
        <div className=" py-4
        grid lg:grid-cols-3 gap-1 md:grid-cols-3">
          {data.map((val, i) => {
            return (
              <CourseCard
                key={i}
                title={val.title}
                image={val.image}
                duration={val.duration}
              />
            );
          })}
        </div>
        </div>


      </div>


    </Layout>
  )
}

export default courses