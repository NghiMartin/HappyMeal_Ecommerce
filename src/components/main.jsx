import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            // src="./assets/main.png.jpg"
            src="/assets/background.png"
            alt="Card"
            height={500}
          />
          <div style={{
              // justifyContent: 'flex-start',
              width: '100%'
            }} 
            className="card-img-overlay justify-content-start d-flex  align-items-center">
            <div 
            style={{
              maxWidth : '50%'
            }} 
            className="container">
              <h5 className="card-title fs-1 text fw-lighter text-success fw-bold">Hãy bắt đầu với thức ăn sạch</h5>
              <p className="card-text fs-5 d-none text-black d-sm-block ">
              Chúng tôi cung cấp những bữa ăn tươi ngon, giàu dinh dưỡng, giúp bạn sống khỏe mạnh mỗi ngày. Hãy bắt đầu hành trình ăn uống sạch sẽ cùng HappyMeals ngay hôm nay!
              </p>
            </div>
            <div 
            style={{
              maxWidth : '500px'
            }} 
            className="container">
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;



