import React from 'react';
import './Button.css'; // Importing the CSS file

const CalendlyButton = () => {
  return (
    <div className="button-container">
      <a
        href="https://calendly.com/sales-elastomech/elastomech-india"
        className="calendly-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Meeting
      </a>
    </div>
  );
};

export default CalendlyButton;
