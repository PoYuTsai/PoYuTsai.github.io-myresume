import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container" style={{height:'100vh'}}>
         <div className="row" style={{height:'100%'}}>

            <div className="two columns header-col" style={{margin:'0% 0 0 0'}}>
              <ul className="slides">
                {testimonials}
              </ul>
            </div>

            <div className="container" id="thesis" style={{height:'100%'}}>
              <iframe title="paper" style={{ width:'70%', height: '100%' }}
                src="https://drive.google.com/file/d/10yGI-PXpleuYBUBeolZ1w1MFMTZ7s_NV/preview">
              </iframe> 
            </div>

          </div>
        </div>
   </section>
    );
  }
}

export default Testimonials;
