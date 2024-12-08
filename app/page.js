import { FaFacebookF } from "react-icons/fa6";
export default  function Home(){
  return(
    <div>
      {/* Header */}
    
    <div className="flex justify-between px-20 py-2 w-full bg-red-500 text-white bg-opacity-60 backdrop-blur-md shadow z-10  items-center hover:bg-white  hover:text-red-500" >
      
      <h1 className="text-3xl font-bold">Eng Abdalla</h1>
      <ul className="flex gap-6">
        <li > Home </li>
        <li> About </li>
        <li> Contact </li>

      </ul>
      
    </div>
    {/* Hero */}
    <div className="flex justify-between px-20 py-2 mt-10">

 
    <div>
    <h1 className="text-5xl font-bold pb-4 border-b-4 border-red-500 inline-block mx-auto relative after:content-[''] after:block after:w-16 after:h-1:mt-2">
  About Me
</h1>

      <p className="mt-5 text-2xl font-normal">
      Open the my-nextjs-app folder in your favorite code editor (e.g., VS Code).
      Start building your app by editing the files in the pages or src/app directory, depending on your configuration.
      </p>
      <button className="p-1 mt-5 bg-red-500 text-white text-3xl hover:bg-white hover:text-red-500 rounded-[12px]">Resume</button>
    </div>
    <img   className="w-[300px] h-[300px] rounded-[12px] pb-4 border-b-8 border-red-500  "  src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1733680181~exp=1733683781~hmac=3b4852f3a5313a66fee77ae7e4b597659d250869b4c17327e78d18a79dd94091&w=740"></img>
    </div>
    {/* Footer */}
   <div className="px-20 py-2 w-full mt-20 h-[100px] text-center">
   <h1>
      &copy; 2024 Eng Abdalla. All rights reserved
     
    
    </h1>
     <h1>Thanks </h1>
 
   </div>
   </div>
  )
}
