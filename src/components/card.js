import React from 'react';

function Card(props){

    return <>
                <div className="col-lg-4">
                  <div className="card mb-5 mb-lg-0">
                    <div className="card-body">
                      <h5 className="card-title text-muted text-uppercase text-center">{props.details.type}</h5>
                      <h6 className="card-price text-center">{'$' + props.details.price}<span className="period">/month</span></h6>
                      <hr/>
                      <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.details.users}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.details.storage}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                        <li className={props.details.projects ? null : "text-muted"}><span className="fa-li"><i  className= {props.details.projects ? "fas fa-check": "fas fa-times"}></i></span>Unlimited
                          Private Projects</li>
                        <li className={props.details.phnSupport ? null : "text-muted"}><span className="fa-li"><i  className= {props.details.phnSupport ? "fas fa-check" : "fas fa-times"}></i></span>Dedicated
                          Phone Support</li>
                        <li className={props.details.subdomain ? null : "text-muted"}><span className="fa-li"><i  className= {props.details.subdomain ? "fas fa-check" : "fas fa-times"}></i></span>{props.details.subdomainType}
                        </li>
                        <li className={props.details.stausReports ? null : "text-muted"}><span className="fa-li"><i  className= {props.details.stausReports ? "fas fa-check" : "fas fa-times"}></i></span>Monthly Status
                          Reports</li>
                      </ul>
                      <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                      </div>
                    </div>
                  </div>
                </div>
          </>
}

export default Card;