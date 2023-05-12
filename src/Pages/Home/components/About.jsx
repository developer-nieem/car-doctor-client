
import parson from '../../../assets/about/person.jpg'
import parts from '../../../assets/about/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
         <div className='w-1/2'>
         <img
            src={parson}
            className="w-full rounded-lg shadow-2xl"
          />
          <div className='text-right '>
          <img
            src={parts}
            className="w-2/3 -mt-20 -mr-16 ml-auto    rounded-lg "
          />
          </div>
         </div>
          <div className='w-1/2 pl-20'>
            <h3 className='text-orange-500 font-semibold my-7'>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
