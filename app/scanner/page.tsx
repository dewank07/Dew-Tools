"use client";
import Scan from "@/components/Scan";
function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-around gap-16 space-y-16 pb-8'>
        <div className='w-64'></div>
        <div>
          <Scan />
        </div>
      </div>
    </>
  );
}

export default App;
