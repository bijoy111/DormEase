import { useState } from 'react';
import './Progressbar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState('pending');

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
  };

  const renderCircle = (state) => {
    return (
      <div className="circle-container">
        <button
          className={`circle ${progress === state ? 'filled' : ''}`}
          onClick={() => handleProgressChange(state)}
          tabIndex={0}
          key={state} // Add key for React's reconciliation
        ></button>
        <div className="state">{state}</div>
      </div>
    );
  };

  return (
    <div className="progress-bar-container">
      
      {renderCircle('pending')}
      <div className="line"></div>
      
      {renderCircle('seen')}
      <div className="line"></div>
      
      {renderCircle('processing')}
      <div className="line"></div>
      
      {renderCircle('completed')}
    </div>
  );
};

export default ProgressBar;
