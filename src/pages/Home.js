import React from 'react'
import avtar from './../images/avtar.jpg'
export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="container pt-5 d-flex flex-column align-items-center">
        <img src={avtar} width={150} alt="Dhruvil Prajapati" className='rounded-circle ' />
        <h2>Dhruvil Prajapati</h2>
        <h4>(Web Developer)</h4>
        <p className="text-center border-bottom pb-3">I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.</p>
        <p className="text-center">
          <span className="d-mobile-block"><strong>Email:</strong> prajapatidhruvil.a@gmail.com</span>
         <br/>
          <span className="d-mobile-block"><strong>Phone:</strong> +91-9099270401</span>
        </p>
        <p className="text-center"><strong>Address:</strong> 44,Swaminarayan Park-1, Vastral, Ahmedabad. IN - 382418</p>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold pb-3">Skills</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <p className="mb-0">HTML</p>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>90%</div>
                      </div>
                    </div>
                    <div className="pt-3">
                      <p className="mb-0">CSS</p>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} >80%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <p className="mb-0">Python</p>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "20%" }}>20%</div>
                      </div>
                    </div>
                    <div className="pt-3">
                      <p className="mb-0">Java</p>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "10%" }} >10%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                <span className="badge bg-primary  rounded-pill me-3 mb-3 p-2">Hiking</span>
                <span className="badge bg-secondary rounded-pill me-3 mb-3 p-2">Games</span>
                <span className="badge bg-success rounded-pill me-3 mb-3 p-2">Reading</span>
                <span className="badge bg-danger rounded-pill me-3 mb-3 p-2">Traveling</span>
                <span className="badge bg-warning  rounded-pill text-dark me-3 mb-3 p-2">Music</span>
                <span className="badge bg-info rounded-pill text-dark me-3 mb-3 p-2">Fishing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
