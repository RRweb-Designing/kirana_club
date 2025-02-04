
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import announce from '../Assets/img/announce.3908203a60f746f56165.png'
import display from '../Assets/img/display.png';
import listen from '../Assets/img/listen.png';
import survey from '../Assets/img/survey.png';
import contest from '../Assets/img/contest.png';
import connect from '../Assets/img/connect.png';
// import './CarouselSlider.css';
import Arrow from './Arrow';


const CarouselSlider = () => {

    const responsive = {
  
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
  
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
  
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
  
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
  
  
      }
    };
  
    return (
  
      <div className='slider-section'>
        <div className='heading-section'>
          
            <h1>Here’s how brands are using Kirana Club platform to influence the minds of kiranas, at scale</h1>
          
        </div>
        <div className='flexible-item'>
  
          <Carousel responsive={responsive} arrows={false}
  
            renderButtonGroupOutside={true}
            customButtonGroup={<Arrow />}
          >
  
            <div className='card'>
              <img src={announce} />
              <h2>Kirana Influencer</h2>
              <p>Tap into some of the most influential kirana owners of the community to drive preference and word-of-mouth for your brand.</p>
            </div>
  
            <div className='card'>
              <img src={display} />
              <h2>Kirana Display</h2>
              <p>Run the good old display banner compaigns with reach-frequency or lead-generation objectives.</p>
            </div>
  
            <div className='card'>
              <img src={listen} />
              <h2>Kirana Listening</h2>
              <p>Get the pulse of the kirana sentiments for your brand by analyzing every conversation about your brand in the kirana commu.</p>
            </div>
  
            <div className='card'>
              <img src={survey} />
              <h2>Kirana Survey</h2>
              <p>By running polls for varied objectives, get qualitative and quantitative insights on your brand or category.</p>
  
            </div>
            <div className='card'>
              <img src={contest} />
              <h2>Kirana Contests</h2>
              <p>Run grantification-based in-store display contests that instantly deliver an uptick in distribution and share of shelf gains.</p>
            </div>
            <div className='card'>
              <img src={connect} />
              <h2>Kirana Connect</h2>
              <p>Have LIVE video chats with kirana owners from across the country to get feedback, gauge sentiments and make new announcements.</p>
            </div>
  
          </Carousel>
        </div>
  
        <div className='flexible_item2'>
          <div className='card'>
            <img src={announce} />
            <h2>Kirana Influencer</h2>
            <p>Tap into some of the most influential kirana owners of the community to drive preference and word-of-mouth for your brand.</p>
          </div>
  
          <div className='card'>
            <img src={display} />
            <h2>Kirana Display</h2>
            <p>Run the good old display banner compaigns with reach-frequency or lead-generation objectives.</p>
          </div>
  
          <div className='card'>
            <img src={listen} />
            <h2>Kirana Listening</h2>
            <p>Get the pulse of the kirana sentiments for your brand by analyzing every conversation about your brand in the kirana commu.</p>
          </div>
  
          <div className='card'>
            <img src={survey} />
            <h2>Kirana Survey</h2>
            <p>By running polls for varied objectives, get qualitative and quantitative insights on your brand or category.</p>
  
          </div>
          <div className='card'>
            <img src={contest} />
            <h2>Kirana Contests</h2>
            <p>Run grantification-based in-store display contests that instantly deliver an uptick in distribution and share of shelf gains.</p>
          </div>
          <div className='card'>
            <img src={connect} />
            <h2>Kirana Connect</h2>
            <p>Have LIVE video chats with kirana owners from across the country to get feedback, gauge sentiments and make new announcements.</p>
          </div>
        </div>
  
  
  
  
  
  
        <div className='btn-sec'>
          <button className='btn'>Schedule a Demo</button>
        </div>
      </div>
    )
  }
  
  export default CarouselSlider;