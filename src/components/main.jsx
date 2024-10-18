import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            // src="./assets/main.png.jpg"
            src="https://img.freepik.com/free-photo/chef-kitchen-cooking-with-vegetables_23-2148006165.jpg?t=st=1729259764~exp=1729263364~hmac=11fbf38e7020fe8690d4f71236d88e61e8a0a26a536d0d2e1170b5e76b439e6e&w=996"

            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter fw-bold ">Hãy bắt đầu với thức ăn sạch</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
