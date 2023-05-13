import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Checkout = () => {
    const servicesData =  useLoaderData();
    const {user} = useContext(AuthContext)

    const checkoutHandler =  event => {
        event.preventDefault();
        const form = event.target;
        const name =  form.name.value;
        const date =  form.date.value;
        const email =  form.email.value;
        const price =  form.price.value;
        const services_Id =  servicesData._id
        const services_title =  servicesData.title
        const services_img =  servicesData.img
        const order =  {name, date, email, price, services_Id, services_title, services_img}
        console.log(order);

        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('booked')
        })
    }
  return (
    <div>
      <div className="card m-10 shadow-2xl bg-base-100">
        <div className="card-body">
            <h2 className="text-2xl text-center">Book Now : {servicesData.title}</h2>
          <form onSubmit={checkoutHandler}>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                name="date"
                
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price Due</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  defaultValue={'$'+ servicesData.price}
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Booking</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
