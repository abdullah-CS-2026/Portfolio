import React from 'react';
import './NotFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        
        <div className="not-found-buttons">
          <button 
            className="btn-primary" 
            onClick={() => navigate('/')}
          >
            <FontAwesomeIcon icon={faHome} /> Go to Home
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Go Back
          </button>
        </div>

        <div className="not-found-footer">
          <p>If you think this is a mistake, please <a href="mailto:iamabdullah536@gmail.com">contact me</a></p>
        </div>
      </div>
    </div>
  );
};
