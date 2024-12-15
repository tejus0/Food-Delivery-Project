import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import {toast} from "react-toastify"

function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); //  ***Synthetic event
    /* console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    ); */
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    // console.log(json);

    if (!json.success) {
      toast.error("Enter valid credentials")
      setcredentials({
        email: "",
        password: "",
      })
    //  alert("Enter valid credentials");
    }
    if (json.success) {
      toast.success("Logged in successfully")
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      // console.log(localStorage.getItem("userEmail"));
      navigate("/");
    }
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
      // <div>
      //   <div className="container">
      //     <form onSubmit={handleSubmit}>
      //       <div className="mb-3">
      //         <label htmlFor="exampleInputEmail1" className="form-label">
      //           Email address
      //         </label>
      //         <input
      //           type="email"
      //           name="email"
      //           className="form-control"
      //           id="exampleInputEmail1"
      //           aria-describedby="emailHelp"
      //           value={credentials.email}
      //           onChange={onChange}
      //         />
      //         <div id="emailHelp" className="form-text">
      //           We'll never share your email with anyone else.
      //         </div>
      //       </div>
      //       <div className="mb-3">
      //         <label htmlFor="exampleInputPassword1" className="form-label">
      //           Password
      //         </label>
      //         <input
      //           type="password"
      //           className="form-control"
      //           id="exampleInputPassword1"
      //           name="password"
      //           value={credentials.password}
      //           onChange={onChange}
      //         />
      //       </div>
      //       <button type="submit" className="btn btn-primary">
      //         Submit
      //       </button>
      //       <Link to="/createuser" className="m-3 btn btn-danger ">
      //         New User
      //       </Link>
      //     </form>
      //   </div>
      // </div>
    <form onSubmit={handleSubmit}>
      <MDBContainer fluid className="my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid h-100"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <MDBInput
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={credentials.email}
              onChange={onChange}
              wrapperClass="mb-4"
              label="Email address"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" >
              Sign in
            </MDBBtn>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <MDBBtn className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#3b5998" }}>
            <Link to="/createuser" >
               New User
             </Link>
            </MDBBtn>
            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#3b5998" }}
            >
              <MDBIcon fab icon="facebook-f" className="mx-2" />
              Continue with facebook
            </MDBBtn>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#55acee" }}
            >
              <MDBIcon fab icon="twitter" className="mx-2" />
              Continue with twitter
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>

    // <div id="intro" class="bg-image shadow-2-strong">
    //   <div className="mask d-flex align-items-center h-100" style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-xl-5 col-md-8">
    //           <form className="bg-white  rounded-5 shadow-5-strong p-5">
        
    //             <div className="form-outline mb-4">
    //               <input type="email" id="form1Example1" className="form-control" />
    //               <label className="form-label" for="form1Example1">Email address</label>
    //             </div>

    //             <div className="form-outline mb-4">
    //               <input type="password" id="form1Example2" className="form-control" />
    //               <label className="form-label" for="form1Example2">Password</label>
    //             </div>

               
    //             <div className="row mb-4">
    //               <div className="col d-flex justify-content-center">
                  
    //                 <div className="form-check">
    //                   <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
    //                   <label className="form-check-label" for="form1Example3">
    //                     Remember me
    //                   </label>
    //                 </div>
    //               </div>

    //               <div className="col text-center">
    //                 <a href="#!">Forgot password?</a>
    //               </div>
    //             </div>

    //             <button type="submit" class="btn btn-primary btn-block">Sign in</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
