import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+ projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
           <a href={projects.url} title={projects.title}>
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h4>{projects.title}</h4>
                    <p>{projects.category}</p>
                </div>
              </div>

            
               <img alt={projects.title} src={projectImage} />
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>

          </div>
        </div>
      })
    }


    return (
      <div className="text-container" styles="margin-top:10px">
         <div className="row" styles="height:29.7cm">
            <h2 className="my-4">作品們</h2>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>
          </div>
      </div>
    );
  }
}

export default Portfolio;
