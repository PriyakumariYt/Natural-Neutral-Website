import React from 'react'

const Gallery = () => {
  return (
   <>
    <h1 className="text-center text-cyan-50 text-6xl m-10 font-serif">Our Gallery</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/5267334/pexels-photo-5267334.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/1977292/pexels-photo-1977292.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/3061814/pexels-photo-3061814.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/2772092/pexels-photo-2772092.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/1540408/pexels-photo-1540408.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/3912572/pexels-photo-3912572.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/2823974/pexels-photo-2823974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/3025620/pexels-photo-3025620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/2768691/pexels-photo-2768691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://images.pexels.com/photos/3598254/pexels-photo-3598254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
  </div>
</div>


   </>
  )
}

export default Gallery