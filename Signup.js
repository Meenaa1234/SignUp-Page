import React from 'react';
import './Signup.css';
import img2 from '../components/img/Homepage1.png';
import logoimg from '../components/img/logo04.png';



const Form = () => {
  return (
    <div className='card_wrap'>
    <div className="container-fluid border">
      <div className="row">
        <div className="col-lg-6 border">
          <div className='backgrd'>
            <h2 className="heading1">Zorolegal <br />
              One-Stop-Shop Legal Platform.</h2>
            <img className='homeimg' src={img2} alt="" />
          </div>
        </div>
        <div className="col-lg-6 border">
          {/* <h3 className='formcs'>form</h3> */}
          <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div class="d-flex justify-content-center py-4">
                      <img className="limg" src={logoimg} alt="asd" width="150px" />
                    </div>
                    {/* <!-- End Logo --> */}
                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="pt-4 pb-2">
                          <h2 className="formh2" >
                            Sign Up to Zorolegal
                          </h2>
                          <p className="formp">
                            Welcome back! Log in with your data that you entered during registration.
                          </p>
                        </div>
                        <form class="row g-3 needs-validation" novalidate>
                          {/* first row */}
                          <div class="col-6">
                            <label htmlFor="firstname" className='forml1'>
                              First Name
                            </label>
                            <span>
                              <input
                                type="text"
                                name="name"
                                className="formip1"
                                id="firstname"
                                required
                              />
                            </span>
                            <label for="lastname" className='forml2'>
                              Last Name
                            </label>
                            <span>
                            <input
                              type="name"
                              name="lastname"
                              className="formip2"
                              id="lastname"
                              required
                            />
                            </span>
                          </div>
                          {/* 2nd row */}
                          <div class="col-6">
                            <label for="mblnumber" className='forml3'>
                              Phone Number
                            </label>
                            <input
                              type="number"
                              name="mblnumber"
                              className="formip3"
                              id="mblnumber"
                              required
                            />
                            <label for="email" className='forml4'>
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="formip4"
                              id="email"
                              required
                            />
                          </div>
                          {/* 3rd row */}
                          <div class="col-6">
                            <label for="password" className='forml5'>
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="formip5"
                              id="password"
                              required
                            />
                            <label for="confirm password" className='forml6'>
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              name="confpassword"
                              className="formip6"
                              id="confpassword"
                              required
                            />
                          </div>
                          {/* 4th row */}
                          <div className="lastdiv">
                            <div className='col1-6'>
                              <p className='lastp'>Already have an account? <span><b>Log in</b></span></p>
                            </div>
                            <div className='col2-6'>
                              <button className="cbtn"
                                type="submit"
                              //   style={{ background: "#012970", color: "white" , border:" 5px"}}
                              >
                                Create Account
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
