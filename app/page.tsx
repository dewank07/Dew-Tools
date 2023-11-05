// imports
import TypeWriterTitle from "@/components/ui/TypeWriterTitle";
export default function Home() {
  return (
    <div className='space-y-30 pb-8 h-[80vh] flex flex-col gap-4 items-center justify-center '>
      {/* Title + Desc */}
      <div className='space-y-6'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-medium text-center'>
          Make your{" "}
          <span className='text-orange-600'>
            <TypeWriterTitle />
          </span>{" "}
          100x.
        </h1>

        <p className='text-gray-400 text-sm sm:text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52'>
          Unleash your productivity with Dew Tool – the ultimate online tools
          for unlimited and free multimedia conversion, QR scanning and QR
          generator. Many more updates soon.
        </p>
      </div>
    </div>
  );
}
