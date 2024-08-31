import Image from "next/image";
import Statcard from "@/components/Statcard";
import Annuoncements from "@/components/Annuoncements";
import Schedule from "@/components/Schedule";
import { BiSolidDashboard } from "react-icons/bi"
import { FaCalendarDay } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { PiCirclesThreeFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from '../images/logo.png'
import graph1 from '../images/graph_1.png'
import graph2 from '../images/graph_2.png'


export default function Home() {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`; 
  return (
    
   <> 
   <nav className="flex items-center justify-between h-14  px-4 lg:px-8 fixed w-full lg:left-[15%] lg:w-[85%] top-0 z-50 bg-white">
      <div className="flex flex-row items-center gap-2">
        <GiHamburgerMenu  size={22} color="gray" className=' lg:hidden mr-2'/>
        <input 
         type='String'
         name='search'
         placeholder='Search'
         className='h-8 w-72 border-2 p-1 text-xs hidden lg:block rounded-lg'

        />
        <CiSearch  size={25}/>
      </div>
      <div className="flex items-center gap-4 mr-4">
        <FaBell size={22} color="gray" />
        <RiMessage2Fill size={22} color="gray" />
        <IoPersonCircleSharp size={32} color="gray" className='lg:mx-5 mx-0'/>
      </div>
    </nav>
     <div className='flex lg:flex-row flex-col h-screen w-screen justify-evenly '>
      <div className='hidden lg:flex flex-col h-full w-[15%] border-2 border-slate-200 z-50'>
        <div className='flex w-full h-[10%] mt-5 ml-2'>
          <Image src={logo} alt='logo' className='w-44 h-14'/>
        </div>
         <div className="mt-4">
          <h3 className='text-md pl-7 font-semibold text-slate-400'>Main Menu</h3>
         </div>
        <div className='flex flex-col w-full h-[40%] px-8 text-md font-semibold text-slate-300 gap-5 mt-6'>
          <div className='flex flex-row items-center gap-10 text-orange-600'>  
            <BiSolidDashboard size={22}/>
            <h5>Dashboard</h5>
          </div>
          <div className='flex flex-row items-center gap-10'>
            <MdOutlinePeopleAlt size={22}/>
            <h5>Recruiter</h5>
          </div>
          <div className='flex flex-row items-center gap-10'>
            <FaCalendarDay size={22}/>
            <h5>Schedule</h5>
          </div>
          <div className='flex flex-row items-center gap-10'>
          <MdPeopleAlt size={22}/>
          <h5>Schedule</h5>
          </div>
          <div className='flex flex-row items-center gap-10'>
          <PiCirclesThreeFill size={22}/>
           <h5>Department</h5>
          </div>
        </div>
        <div className="mt-4">
          <h3 className='text-md pl-7 font-semibold text-slate-400'>Others</h3>
         </div>
        <div className='flex flex-col w-full h-[40%] px-8 text-md font-semibold text-slate-300 gap-5 mt-6'>
        <div className='flex flex-row items-center gap-10'>
          <BiSupport size={22}/>
          <h5>Support</h5>
          </div>
          <div className='flex flex-row items-center gap-10'>
          <IoSettingsSharp size={22}/>
           <h5>Settings</h5>
          </div>
        </div>

      </div>

      <div className='flex flex-col items-center lg:boder-r-2 lg:border-slate-200 lg:w-[60%] w-screen h-auto lg:h-full lg:p-3 p-2 ml-0 lg:ml-5 mt-14'>
        
       <div className='w-full h-[5%]'>
        <h1 className='text-3xl font-semibold text-blue-900'>Dashboard</h1>
       </div>
       <div className='flex flex-col lg:flex-row lg:w-full w-[90%] h-auto lg:h-[20%] items-center justify-evenly mt-3 lg:gap-0 gap-y-4 '>
        <Statcard heading={'Avilible Position'} number={24} desc={"4 Urgently Needed"} color='bg-orange-100' desColor='text-orange-500' />
        <Statcard heading={'Job Open'} number={10} desc={"4 Active Hiring"} color='bg-blue-100' desColor='text-blue-500' />
        <Statcard heading={'New Employees'} number={24} desc={"4 Departments"} color='bg-pink-100' desColor='text-pink-500' />
       </div>
       <div className='flex flex-col lg:flex-row lg:h-[25%] h-auto w-full mt-4 items-center lg:justify-evenly justify-center gap-3 lg:gap-0'>
        <div className='flex flex-row w-[90%] lg:w-[45%] h-full border-2 border-slate-100 rounded-xl'>
          <div className='flex flex-col h-full w-[50%] pl-4 mt-3'>
            <h2 className='text-lg font-semibold text-blue-950'>Total Employees</h2>
            <h1 className='text-5xl font-bold text-blue-950 mt-1 mb-3'>216</h1>
            <p className='text-sm font-light text-slate-500'>120 men</p>
            <p className='text-sm font-light text-slate-500'>96 women</p>
          </div>
          <div className='flex flex-col h-full w-[50%] justify-around'>
            <div>
            <Image src={graph1} alt='' className='w-[90%]' />
            </div>
            <div className=' bg-orange-100 p-1 flex items-center justify-center w-[80%]'>
              <p className='text-sm text-black'>+2% past month</p>
            </div>
          </div>
        </div>

        <div className='flex flex-row w-[90%] lg:w-[45%] h-full  border-2 border-slate-100 rounded-xl'>
          <div className='flex flex-col h-full w-[50%] pl-4 mt-3 '>
            <h2 className='text-lg font-semibold text-blue-950'>Talent Request</h2>
            <h1 className='text-5xl font-bold text-blue-950 mt-1 mb-3'>16</h1>
            <p className='text-sm font-light text-slate-500'>6 men</p>
            <p className='text-sm font-light text-slate-500'>10 women</p>
          </div>
          <div className='flex flex-col h-full w-[50%] justify-around'>
            <div>
              <Image src={graph2} alt='' className='w-[90%]'/>
            </div>
            <div className=' bg-orange-100 p-1 flex items-center justify-center w-[80%]'>
              <p className='text-sm text-black'>+5% past month</p>
            </div>
          </div>
        </div>

       </div>
       <div className='w-full h-[45%] mt-5 lg:mt-3 border-2 border-slate-200 p-3 rounded-xl'>
        <div className='flex flex-row w-full h-[10%]'>
          <h1 className='font-semibold text-xl'>Announcements</h1>
        </div>
         <div className='flex flex-col w-full h-[90%] mt-3 gap-3 items-center'>
           <Annuoncements desc={"Outing Schedule for every Department"}/>
           <Annuoncements desc={"Meeting HR Department"}/>
           <Annuoncements desc={"Talent Hirirng for Front end"}/>
             <button className='w-[60%] h-8 border-2 border-slate-200 text-orange-600 rounded-lg mb-3'>Add new +</button>
         </div>
       </div>
      </div>

      <div className='flex flex-col w-screen lg:w-[25%] lg:h-full h-auto  items-center py-2 justify-evenly mt-14'>
        <div className='lg:h-[40%] h-auto w-[90%] flex flex-col border-2 border-slate-200 rounded-xl  bg-blue-950'>
          <div className='w-full h-[15%] px-5 flex items-center'>
            <h2 className='text-lg font-semibold text-white'>Recently Added</h2>
          </div>
          <div className='h-[50%] w-full flex flex-col mt-2 p-5 gap-2'>
            <p className='text-xs font-light text-slate-300'>10:40 A.M, Fri 10 Sept 2021</p>
            <h2 className='text-2xl font-semibold text-white'>You Posted a new Job</h2>
            <p className='text-sm font-light text-white'>Kindly check the requirements and terms of work and make sure everything is right.</p>
          </div>
          <div className='flex flex-row px-4 justify-between items-center lg:mt-5 mt-8' >
            <p className='text-white text-sm'>12 Activities Today</p>
            <button className='h-8 w-36 bg-red-400 p-2 text-xs rounded-lg'>See all Activity</button>
          </div>
        </div>
        <div className='lg:h-[50%] h-auto w-[90%] flex flex-col border-2 border-slate-200 rounded-xl mt-5 lg:mt-0'>
          <div className='flex flex-row items-center p-3 justify-between'>
            <h1 className='font-semibold'>Upcoming Schedule</h1>
            <p className='text-xs text-slate-400'>Today , <span className='font-bold text-red-500'>{formattedDate}</span></p>
          </div>
          <div className='flex flex-col items-center gap-3 p-2'>
           <h4 className='text-sm font-semibold text-slate-500 justify-start'>Priority</h4> 
          <Schedule desc={"Review Applications"} />
          <h4 className='text-sm font-semibold text-slate-500 justify-start'>Other</h4> 
          <Schedule desc={"Interview With Candidates"} />
          <Schedule desc={"Short meeting with IT department"} />
          
          </div>
        </div>
      </div>
     </div>
   </>
  );
}
