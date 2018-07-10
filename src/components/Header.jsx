import React from 'react';
import { Link } from 'react-router-dom';
import epi from '../assets/images/epi.jpg';

function Header(){

  return (
    <div>
      <style jsx>{`
          img {
            width: 40px;
          }
          h1 {
            text-align: center;
          }
          .flexMe {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .flexMe:nth-of-type(1) {
            margin-left: 50px;
          }
          .flexMe:last-of-type {
            margin-right: 50px;
          }
          @media screen and (max-width: 575px) {
            flex-direction: column;
          }
          `}
      </style>
      <div className="flexMe">
        <div>
          <img src={epi}/>
        </div>
        <div>
          <h1>Discussion Forum</h1>
        </div>
        <div>
          <Link to="/">Forum</Link> | <Link to="/newpost">Create Post</Link>
        </div>
      </div>
    </div>
  );
}



export default Header;
