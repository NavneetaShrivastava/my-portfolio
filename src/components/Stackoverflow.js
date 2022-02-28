import React, { Component } from "react";

class Stackoverflow extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
        var sectionName = this.props.resumeBasicInfo.section_name.stackoverflow;
      }

    if (this.props.sharedStackoverflowInfo) {
        
        var answers = this.props.sharedStackoverflowInfo.items.map(function (answers) {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              style={{ cursor: "pointer" }}
            >
              <span className="portfolio-item d-block">
                <div className="foto">
                  <div>
                   
                     { <div dangerouslySetInnerHTML={{ __html:(answers.body) }} /> }
                    <br />
                    <p className="project-title-settings mt-3">
                      {answers.answer_id}
                    </p>
                  </div>
                </div>
              </span>
            </div>
          );

          });
      }

      return (
        <section id="portfolio">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{answers}</div>
            </div>
          </div>
        </section>
      );
  }
}

export default Stackoverflow;
