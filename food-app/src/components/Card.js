import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food != []) {
      if (food.size == size) {
        await dispatch({
          type: "UPDATE",
          // id: foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
        // await console.log(data)
      }
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div>
        <div
          className="card m-3 "
          style={{ width: "18rem", maxHeight: "360px", margin: "2rem" }}
        >
          <img
            src={props.foodItem.img}
            className="card-img-top"
            style={{ height: "120px", objectFit: "fill" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select
                className="m-2 h-100 bg-success rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100 bg-success rounded"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {/* <option value="default"> Please select the variation</option> */}
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">Rs {finalPrice}/-</div>
            </div>
            <hr />
            <button
              className={"btn btn-success justify-center ms-2"}
              onClick={handleCart}
            >
              Add To Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
