import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from "../redux/actionCreators/productActions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((a, c) => a + c.price, 0);
  console.log(totalPrice);
  const dispatch = useDispatch();
  return (
    <div className="mx-auto my-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Title</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart
              .sort((a, b) => a._id - b._id)
              .map((product, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img
                            src={product.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{product.model}</td>
                  <td className="font-semibold">{product.price}</td>
                  <td className="font-semibold">{product.quantity}</td>
                  <td className="font-semibold">{product.subTotal}</td>
                  <th>
                    <button
                      className="btn btn-ghost text-primary"
                      onClick={() => dispatch(removeFromCart(product))}
                    >
                      <FaTrash className="h-7 w-7" />
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
