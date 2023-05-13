import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:3000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const deleteHandler = (id) => {
    const dConfirm = confirm("are you want d");
    if (dConfirm) {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Deleted");
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        });
    }
  };

  const confirmHandler = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "PATCH",
      headers:{
        'content-type': 'application/json'
      },
      body : JSON.stringify({status: 'confirm'})

    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            const remaining = bookings.filter((booking) => booking._id !== id); 
            const updated = bookings.find((booking) => booking._id === id); 
            updated.status =  'confirm';
            const newBooking =  [updated, ...remaining];
            console.log(newBooking);
            setBookings(newBooking);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Profile Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                deleteHandler={deleteHandler}
                confirmHandler={confirmHandler}
              ></BookingsRow>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
