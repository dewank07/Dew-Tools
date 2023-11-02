"use client";
import Scan from "@/components/Scan";
function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-around gap-8 space-y-8 pb-8'>
        <div>
          <Scan />
        </div>
      </div>
    </>
  );
}

export default App;
