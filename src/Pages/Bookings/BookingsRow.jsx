const BookingsRow = ({ booking, deleteHandler, confirmHandler }) => {
  console.log(booking);

 
  return (
    <tr>
      <th>
        <button
          onClick={() => deleteHandler(booking._id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-12 h-12">
              <img
                src={booking.services_img && booking.services_img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>{booking.name}</td>
      <td>{booking.email}</td>
      <td>{booking.price}</td>
      <td>{booking.date}</td>
      <th>
        {
             <button onClick={() => confirmHandler(booking._id)} className="btn btn-ghost btn-xs">Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default BookingsRow;
