import { useEffect, useState } from 'react';
import './Progressbar.css';

const ProgressBar = ({ initialProgress }) => {
  const [progress, setProgress] = useState('pending'); // Initialize with 'pending' by default

  const index1 = initialProgress;
  useEffect(() => {
    // Update progress state when initialProgress changes
    if (initialProgress === 1) {
      setProgress('pending');
    } else if (initialProgress === 2) {
      setProgress('seen');
    } else if (initialProgress === 3) {
      setProgress('processing');
    } else if (initialProgress === 4) {
      setProgress('completed');
    }
  }, [initialProgress]);

  console.log('Progress:', progress);

  const renderCircle = (state, index) => {
    return (
      <div className="circle-container">
        <button
          className={`circle ${index1 >= index ? 'filled' : ''}`}
          tabIndex={0}
          key={state} // Add key for React's reconciliation
        ></button>
        <div className="state">{state}</div>
      </div>
    );
  };

  return (
    <div className="progress-bar-container">
      {renderCircle('pending', 1)}
      <div className="line"></div>

      {renderCircle('seen', 2)}
      <div className="line"></div>

      {renderCircle('processing', 3)}
      <div className="line"></div>

      {renderCircle('completed', 4)}
    </div>
  );
};

export default ProgressBar;
