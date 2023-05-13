import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h4 className="text-orange-600">Service</h4>
        <h2 className="text-2xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
     <div className="grid md:grid-cols-3 gap-4 my-12">
     {services.map((service) => (
        <div key={service._id}>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img className="h-64"
                src={service.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p>Price : ${service.price}</p>
              <div className="card-actions justify-end">
                <Link to={`/checkout/${service._id}`}><button className="btn btn-primary">Book Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Services;
