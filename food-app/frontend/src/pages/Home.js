import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0], response[1]);'

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption " style={{ zIndex: "2" }}>
              <div className=" d-flex justify-centre">
                <input
                  className="form-control bg mx-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button> */}
              </div>
            </div>

            <div class="carousel-item active">
              <img
                src="https://picsum.photos/900/300?random=1"
                alt="experiment"
                class="d-block w-100"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://picsum.photos/900/300?random=2"
                class="d-block w-100"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://picsum.photos/900/300?random=3"
                class="d-block w-100"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem != [] ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search)
                      )
                      .map((filteredItems) => {
                        return (
                          <div
                            key={filteredItems._id}
                            className="col-12 col-md-6 col-lg-3 m-3"
                          >
                            <Card
                              foodItem={filteredItems}
                              options={filteredItems.options[0]}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div> No such data found . </div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
