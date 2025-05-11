// QuoteControls component contains the controls for fetching quotes
import React from 'react';

function QuoteControls(props) {
  return (
    <div className="controls">
      <select 
        value={props.topic} 
        onChange={(e) => props.onTopicChange(e.target.value)}
      >
        <option value="love">Love</option>
        <option value="motivational">Motivational</option>
        <option value="wisdom">Wisdom</option>
        <option value="humor">Humor</option>
      </select>
      
      <select 
        value={props.count} 
        onChange={(e) => props.onCountChange(e.target.value)}
      >
        <option value="1">1 Quote</option>
        <option value="2">2 Quotes</option>
        <option value="3">3 Quotes</option>
        <option value="4">4 Quotes</option>
        <option value="5">5 Quotes</option>
      </select>
      
      <button onClick={props.onFetchQuotes}>
        Get Quotes
      </button>
    </div>
  );
}

export default QuoteControls;