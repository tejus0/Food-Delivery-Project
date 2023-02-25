import React from "react";

function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "20rem", maxHeight: "30rem" }}
        >
          <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Here comes the text .</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded" id="">
                <option value="">Quantity</option>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                {/* <option value="default"> Please select the variation</option> */}
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <span className="d-inline h-100 fs-5">Total price</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
