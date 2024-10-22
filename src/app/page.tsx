export default function Home() {
  return (
      
   <div className="flex flex-col h-screen w-auto bg-slate-400"> 
      <ul className="flex justify-center font-extrabold mt-2 text-3xl font-serif">
        <li>This is website of Next.js</li><br />
      </ul>
      
      <div className="flex justify-evenly mt-7 gap-2">
        <div className="bg-orange-400 h-60 w-96  "></div>
        <div className="bg-orange-400 h-60 w-96"></div>
        <div className="bg-orange-400 h-60 w-96 "></div>
      </div>
      <br />
      <br />


      <div className="flex justify-evenly">
        <div className="bg-orange-400 h-60 w-2/5"></div>
        <div className="bg-orange-400 h-60 w-2/5 "></div>
      </div>

       

   </div>
  );
}
