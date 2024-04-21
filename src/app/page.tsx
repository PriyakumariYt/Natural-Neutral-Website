import React from 'react'
import Link from 'next/link'
import Gallery from './components/Gallery'
import styles from "@/app/styles/button.module.css"
const page = () => {
  return (
   <>
<div className='h-screen w-full' style={{ 
  backgroundImage: "url('https://images.pexels.com/photos/2768618/pexels-photo-2768618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% auto'
}}>
  <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10  bg-cover bg-center h-screen w-full ">
    <h1 className="text-[#e7ebc0] lg:text-7xl md:text-5xl text-4xl mb-6 pt-20 md:!leading-[80px] font-serif">
    Effortlessly Blend Comfort & Style!
    </h1>
    <p className="text-base text-cyan-100 opacity-60 s:text-xs ">
    Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures
    </p>
    <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
      <button
        type="button"
        className="px-6 py-3.5 rounded-md text-white bg-red-200 hover:bg-red-300 transition-all"
      >
       View Collection
      </button>
      <button
        type="button"
        className="bg-transparent hover:bg-red-300 border border-red-300 px-6 py-3.5 rounded-md text-white transition-all"
      >
   Most Popular
      </button>
    </div>
  </div>
  </div>
  <div className="px-4 sm:px-10">

  <div className="mt-32 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className=" text-neutral-400 md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6">
          Shop by Category
        </h2>
      
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-md max-md:mx-auto">
        <div className="rounded relative overflow-hidden transition-all p-6">
        
          <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <Link href="#">
    <img className="rounded-t-lg h-60 w-full" src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
  </Link>
  <div className="p-5">
    <Link href="#">
      <h5 className="mb-2 text-2xl tracking-tight text-gray-500 dark:text-white">
       Branded Serum
      </h5>
    </Link>
   
    <Link
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
    Shop now
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  </div>
</div>
</div>
<div className=" rounded relative overflow-hidden transition-all p-6">
        
        <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<Link href="#">
  <img className="rounded-t-lg h-60 w-full" src="https://images.pexels.com/photos/965996/pexels-photo-965996.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
</Link>
<div className="p-5">
  <Link href="#">
    <h5 className="mb-2 text-2xl tracking-tight text-gray-500 dark:text-white">
    Lipstics Collections
    </h5>
  </Link>
 
  <Link
    href="#"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
     Shop now
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </Link>
</div>
</div>
</div>
<div className=" rounded relative overflow-hidden transition-all p-6">
        
        <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<Link href="#">
  <img className="rounded-t-lg h-60 w-full" src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
</Link>
<div className="p-5">
  <Link href="#">
    <h5 className="mb-2 text-2xl  tracking-tight text-gray-500 dark:text-white">
    MakeUp Products
    </h5>
  </Link>
 
  <Link
    href="#"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-cyan-700 rounded-lg hover:bg-cyan-800  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Shop now
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </Link>
</div>
</div>
</div>

     </div>
     </div>


 {/* gallery start */}

<Gallery/>
 {/* gallery end */}


    <div className="mt-32">
  <div className="sm:max-w-7xl max-w-sm mx-auto">
    <div className="text-center">
      <h2 className="md:text-4xl text-3xl text-gray-200 ">Meet our Experts!</h2>
      <p className="mt-6 text-gray-400">
We employ the best manicurists and pedicurists in the industry. We also educate our own award-winning specialists through constant training. Here are the most prominent talents of our team who make your dreams come true..</p>
    </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-20 text-center mt-32">
      <div className="bg-cyan-800 relative rounded">
        <img
          src="https://readymadeui.com/team-1.webp"
          className="w-32 h-32 rounded-full inline-block -mt-12"
        />
        <div className="py-6">
          <h4 className="text-base font-extrabold">John Doe</h4>
          <p className="text-xs mt-1 text-gray-400">Fashion Designer</p>
          <div className="space-x-4 mt-6">
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                fill="#333"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                fill="#333"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#333"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-cyan-800 relative rounded">
        <img
          src="https://readymadeui.com/team-2.webp"
          className="w-32 h-32 rounded-full inline-block -mt-12"
        />
        <div className="py-6">
          <h4 className="text-base font-extrabold">Mark Adair</h4>
          <p className="text-xs mt-1 text-gray-400">Hair Expert</p>
          <div className="space-x-4 mt-6">
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                fill="#333"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                fill="#333"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#333"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-cyan-800 relative rounded">
        <img
          src="https://readymadeui.com/team-3.webp"
          className="w-32 h-32 rounded-full inline-block -mt-12"
        />
        <div className="py-6">
          <h4 className="text-base font-extrabold">Simon Konecki</h4>
          <p className="text-xs mt-1 text-gray-400">Nail Artist</p>
          <div className="space-x-4 mt-6">
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                fill="#333"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                fill="#333"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#333"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-cyan-800 relative rounded">
        <img
          src="https://readymadeui.com/team-6.webp"
          className="w-32 h-32 rounded-full inline-block -mt-12"
        />
        <div className="py-6">
          <h4 className="text-base font-extrabold">Eleanor</h4>
          <p className="text-xs mt-1 text-gray-400">MakeUp Artist</p>
          <div className="space-x-4 mt-6">
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                fill="#333"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                fill="#333"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#333"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='w-full h-full mt-40 p-10 ' style={{ 
  backgroundImage: "url('https://images.pexels.com/photos/7446413/pexels-photo-7446413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% auto'
}}>
    <div className="max-w-4xl mx-auto text-center ">
      <div>
        <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6 text-white">
        A store of fashion & style
        </h2>
        <p className="text-gray-400">
        Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari.
        </p>
      </div>
      <button className="px-6 py-3.5 text-white bg-transparent border rounded-1xl border-red-300 hover:bg-pink-300 transition-all mt-10">
     Explore Now
      </button>


    </div>
    </div>
    <div className="mt-32 rounded-md px-4 py-12">
      <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
        <div>
          <img
            src="https://parspng.com/wp-content/uploads/2023/06/Cosmeticspng.parspng.com-4.png"
            alt="Premium Benefits"
            className="w-full mx-auto"
          />
        </div>
        <div className="max-md:text-center">
          <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6">
           
You deserve a little gift that says "love"
          </h2>
          <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            type="button"
            className="px-6 py-3.5 text-white bg-transparent border rounded-1xl border-red-300 hover:bg-red-100 transition-all mt-10"
          >
            Try it today
          </button>
        </div>
      </div>
    </div>
    <div className="mt-32 rounded-md px-4 py-12">
      <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
        <div className="max-md:text-center">
          <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6">
          Why Our Clients
         Choose Us
          </h2>
          <p className="text-neutral-200">
          We use all-natural, organic body products, hard-to-find polish brands and colors, iPads at every seat, and a drink menu featuring fresh-pressed juices and hand-crafted coffees.
          </p>
          <button
            type="button"
            className="px-6 py-3.5 text-white bg-transparent border rounded-1xl border-red-300 hover:bg-red-100 transition-all mt-10"
          >
            Try it today
          </button>
        </div>
        <div>
          <img
            src="https://ld-wt73.template-help.com/wt_prod-16367/images/home-1-387x440.png"
            alt="Premium Benefits"
            className="w-full mx-auto"
          />
        </div>
      </div>
    </div>
    <div className="mt-32 max-w-7xl mx-auto">
      <div className="mb-16 max-w-2xl text-center mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6">
          What our happy client say
        </h2>
        <p className="text-neutral-200 opacity-9">
          Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
          officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
          tempor ut reprehenderit.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12 max-md:justify-center text-center mt-16">
        <div>
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/2878374/pexels-photo-2878374.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
            />
            <div className="mt-4">
              <h4 className="text-base">Rehana Doe</h4>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-400">
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-[#CED5D8]"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-[#CED5D8]"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/2036647/pexels-photo-2036647.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
            />
            <div className="mt-4">
              <h4 className="text-base">Mark Adair</h4>
              
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-400">
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/profile_4.webp"
              className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
            />
            <div className="mt-4">
              <h4 className="text-base">Simon Konecki</h4>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-400">
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 fill-[#CED5D8]"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  

    {/* end */}
   
  </div>
   </>
  )
}

export default page