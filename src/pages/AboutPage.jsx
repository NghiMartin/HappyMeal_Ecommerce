import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Về chúng tôi</h1>
        <hr />
        <p className="lead text-center">
          ...
        </p>

        <h2 className="text-center py-4">Sản phẩm của chúng tôi</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="/assets/1.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">SALAD</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="/assets/5.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">CƠM GẠO LỨT</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="/assets/9.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">BÚN GẠO LỨT</h5>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage