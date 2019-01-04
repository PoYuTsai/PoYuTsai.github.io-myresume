import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <div className="text-container" styles="margin-top:30px">
         <div className="row" styles="height:29.7cm">
          <h2 className="my-4">碩士論文</h2>
            <iframe title="paper" style={{ width:'100%', height: '26cm' }}
              src="https://drive.google.com/file/d/10yGI-PXpleuYBUBeolZ1w1MFMTZ7s_NV/preview">
            </iframe> 
        </div>
      </div>
    );
  }
}

export default Testimonials;
