import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel" style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption " style={{ zIndex: "2" }}>
            <form className=" d-flex">
              <input
                className="form-control bg-dark mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <div class="carousel-item active">
            <img
              src="https://picsum.photos/900/300?random=1"
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
  );
}

export default Carousel;
