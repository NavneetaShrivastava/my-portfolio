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
              className="col-sm-12 col-md-6 col-lg-4 mb-4"
              key={answers.title}
              style={{ cursor: "pointer" }}
              >
              <span className="stackoverflow-item  d-block h-100 w-100">
                <div className="foto h-100 w-100" >
                  <div className="h-100 w-100">
                  <h3 className="stackoverflow-title-settings mt-3">
                   {answers.title}?
                    </h3>
                  { <p  class="text-black stackoverflow-answer" dangerouslySetInnerHTML={{ __html:(answers.body) }} /> }
                  <a href={answers.link} class="card-link">View</a>
                    <br />
              
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
            <span> <svg stroke="currentColor" 
            fill="currentColor" 
            stroke-width="0" 
            viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: "40px", marginRight: "8px" }}>
              <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"></path>
              <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z">
                </path></svg> <h2 class="ant-typography" style={{ color: "rgb(255, 255, 255)"}}>{sectionName}</h2></span>
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
