import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Section2.css";
import { section2 } from "./Data";

class Section2 extends Component {
  render() {
    return (
      <div className="s2 py-5">
        <div className="container">
          <div className="row">
            {section2.map((lesson, index) => (
              <div className="c col-lg-4 col-md-6 col-12 mb-3" key={index}>
                <div className="card">
                  <div className="card-body py-3 px-4">
                    <div className="top mb-2 d-flex flex-wrap justify-content-between">
                      <h6 className="teacher text-capitalize mb-2">
                        {lesson.teacher}
                      </h6>
                    </div>
                    <p className="desc mb-4 ps-3">{lesson.description}</p>
                    <div className="bottom d-flex flex-wrap justify-content-between align-items-center">
                      <Link to={lesson.route}>
                        <button className="btn btn-danger text-capitalize btn-sm mb-3">
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;
