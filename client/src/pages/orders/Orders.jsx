import React from "react";
import "./Orders.scss";
import getCurrentUser from '../../utils/getCurrentUser';
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Orders = () => {
  const currentUser = getCurrentUser();
  const userId = currentUser._id;

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders/${userId}`).then((res) => {
        return res.data;
      }),
  });

  console.log('currentUser:', currentUser._id);
  console.log('Order data:', data);

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
            {data.map((Order) => (
              <tr key={Order._id}>
                <td>
                  <img className="image" src={Order.img} alt="" />
                </td>
                <td>{Order.title}</td>
                <td>{Order.price}</td>
                <td>
                  <img
                    className="message"
                    src="./img/message.png"
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
