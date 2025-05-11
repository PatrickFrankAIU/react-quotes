// QuoteCard component displays a single quote with its source
import React from 'react';

function QuoteCard(props) {
  return (
    <div className="quote-card">
      <div className="quote-text">{props.quote}</div>
      <div className="quote-source">— {props.source}</div>
    </div>
  );
}

export default QuoteCard;