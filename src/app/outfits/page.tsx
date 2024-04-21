import React from 'react'

const page = () => {
  return (
 <>
 <div className="font-[sans-serif]">
  <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://www.ela.bz/yesir/images/fashion/products/04.jpg"
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Espresso Elegante</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $10 <span className="text-gray-400 ml-2 font-medium">$15</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://www.ela.bz/yesir/images/fashion/products/06.jpg"
            alt="Product 2"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Mocha Madness</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $12 <span className="text-gray-400 ml-2 font-medium">$17</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://demo1.leotheme.com/leo_mia_demo/40-home_default/the-adventure-begins-framed-poster.jpg"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">
            Caramel Cream Delight
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $14 <span className="text-gray-400 ml-2 font-medium">$19</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://demo1.leotheme.com/leo_mia_demo/34-home_default/the-best-is-yet-to-come-framed-poster.jpg"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">
            Hazelnut Heaven Blend
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $12 <span className="text-gray-400 ml-2 font-medium">$17</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://demo1.leotheme.com/leo_mia_demo/74-home_default/mountain-fox-vector-graphics.jpg"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">
            Vanilla Velvet Brew
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $15 <span className="text-gray-400 ml-2 font-medium">$20</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://demo1.leotheme.com/leo_mia_demo/51-home_default/mug-the-adventure-begins.jpg"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">
            Double Shot Symphony
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $14 <span className="text-gray-400 ml-2 font-medium">$19</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://demo1.leotheme.com/leo_mia_demo/60-home_default/mountain-fox-cushion.jpg"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Irish Cream Dream</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $11 <span className="text-gray-400 ml-2 font-medium">$16</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://demo1.leotheme.com/leo_mia_demo/69-home_default/hummingbird-cushion.jpg"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">
            Coconut Bliss Coffee
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $13 <span className="text-gray-400 ml-2 font-medium">$18</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

 </>
  )
}

export default page