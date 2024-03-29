import Image from "next/image";
import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl font-serif max-w-xl'>
            <span className='underline decoration-black decoration-4'>
              Medium
            </span>{" "}
            is a place to write , read,, and connect{" "}
          </h1>
          <h2>
            its easy and free to post your thinking on any topic and connect
            with millions of readers
          </h2>
        </div>
        <img
          className='hidden md:inline-flex h-32 lg:h-full'
          src='http://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'
          alt=''
        />
      </div>
      <div></div>
    </>
  );
}
