import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
<footer className="text-center text-lg-start bg-dark text-muted">
  {/* <!-- Section: Social media --> */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div className="me-5 d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

  </section>
  {/* <!-- Section: Social media --> */}

  
  {/* <!-- Copyright --> */}
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2023 Copyright:
    <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">FoodWeb.com</Link>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
    </div>
  )
}

export default Footer