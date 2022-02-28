import React, { Component } from "react";

class Stackoverflow extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
        var sectionName = this.props.resumeBasicInfo.section_name.stackoverflow;
      }

    if (this.props.sharedStackoverflowInfo) {
        
        var answers = this.props.sharedStackoverflowInfo.items.map(function (answers) {
          return (
            <div class="col-md-4 p-4">
                <div class="card h-100 " >
                    <div class="card-body">
                        <h5 class="card-title text-black">{answers.title}</h5>
                        { <p  class="text-black" dangerouslySetInnerHTML={{ __html:(answers.body) }} /> }
                        <a href={answers.link} class="card-link">View</a>
                    </div>
                    </div>
                    </div>
          );

          });
      }

      return (
          
        <section id="resume">
          <div className="col-md-12 mx-auto ">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            </div>
            <div class="card-deck" style={{display:"flex"}}>
              {answers}
            </div>
         </div>
        
        </section>
      );
  }
}

export default Stackoverflow;
