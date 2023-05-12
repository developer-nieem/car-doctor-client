import slider1 from "../../../assets/banner/1.jpg"
import slider2 from "../../../assets/banner/2.jpg"
import slider3 from "../../../assets/banner/3.jpg"
import slider4 from "../../../assets/banner/4.jpg"


const Banner = () => {
  return (
    <div>
      <div className="carousel w-full rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider1}
            className="w-full"
          />
          <div className=" z-10 absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="bg-gradient-to-r rounded-lg  from-[#151515] absolute h-full w-full text-white">
            <div className="pl-10 pt-32 space-y-3">
            <h2 className="text-6xl font-semibold ">
            Affordable <br /> Price For Car<br />  Servicing
            </h2>
            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <button className="btn btn-warning">Discover More</button>
            <button className="btn btn-outline btn-success ml-3">Latest Project</button>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slider2}
            className="w-full"
          />
          <div className=" z-10 absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
           <div className="bg-gradient-to-r rounded-lg from-[#151515] absolute h-full w-full text-white">
            <div className="pl-10 pt-32 space-y-3">
            <h2 className="text-6xl font-semibold ">
            Affordable <br /> Price For Car<br />  Servicing
            </h2>
            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <button className="btn btn-warning">Discover More</button>
            <button className="btn btn-outline btn-success ml-3">Latest Project</button>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slider3}
            className="w-full"
          />
          <div className=" z-10 absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="bg-gradient-to-r rounded-lg from-[#151515] absolute h-full w-full text-white">
            <div className="pl-10 pt-32 space-y-3">
            <h2 className="text-6xl font-semibold ">
            Affordable <br /> Price For Car<br />  Servicing
            </h2>
            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <button className="btn btn-warning">Discover More</button>
            <button className="btn btn-outline btn-success ml-3">Latest Project</button>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={slider4}
            className="w-full"
          />
          <div className=" z-10 absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="bg-gradient-to-r rounded-lg from-[#151515] absolute h-full w-full text-white">
            <div className="pl-10 pt-32 space-y-3">
            <h2 className="text-6xl font-semibold ">
            Affordable <br /> Price For Car<br />  Servicing
            </h2>
            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <button className="btn btn-warning">Discover More</button>
            <button className="btn btn-outline btn-success ml-3">Latest Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
