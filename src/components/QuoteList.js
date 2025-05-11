// QuoteList component displays a list of quotes
import React from 'react';
import QuoteCard from './QuoteCard';

function QuoteList(props) {
  // If there are no quotes, display a message
  if (props.quotes.length === 0) {
    return <p>No quotes to display. Select a topic and click "Get Quotes".</p>;
  }
  
  // Display each quote using the QuoteCard component
  return (
    <div className="quote-list">
      {props.quotes.map((quote, index) => (
        <QuoteCard 
          key={index} 
          quote={quote.quote} 
          source={quote.source} 
        />
      ))}
    </div>
  );
}

export default QuoteList;