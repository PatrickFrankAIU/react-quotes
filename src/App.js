// Main App component for the Quote React Demo
import React, { useState } from 'react';
import Header from './components/Header';
import QuoteControls from './components/QuoteControls';
import QuoteList from './components/QuoteList';
import './main.css';

function App() {
  // State for storing selected topic and count
  let [topic, setTopic] = useState('wisdom');
  let [count, setCount] = useState('3');
  
  // State for storing quotes, loading state, and errors
  let [quotes, setQuotes] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  
  // Handle topic change
  let handleTopicChange = (newTopic) => {
    setTopic(newTopic);
  };
  
  // Handle count change
  let handleCountChange = (newCount) => {
    setCount(newCount);
  };
  
  // Fetch quotes from the server
  let fetchQuotes = () => {
    // Set loading state to true
    setLoading(true);
    // Clear any existing errors
    setError(null);
    
    // Build the URL with query parameters
    let url = "https://nodequote.onrender.com/quotes?topic=" + topic + "&count=" + count;
    
    // Fetch quotes from the server
    fetch(url)
      .then((response) => {
        // Check if the response is OK
        if (!response.ok) {
          throw new Error("Failed to fetch quotes. Status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        // Update quotes state with fetched data
        setQuotes(data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError("Error: " + err.message);
        setLoading(false);
      });
  };
  
  return (
    <div className="container">
      <Header />
      
      <QuoteControls 
        topic={topic}
        count={count}
        onTopicChange={handleTopicChange}
        onCountChange={handleCountChange}
        onFetchQuotes={fetchQuotes}
      />
      
      {/* Show error message if there is an error */}
      {error && <div className="error">{error}</div>}
      
      {/* Show loading message if loading */}
      {loading ? (
        <div className="loading">Loading quotes...</div>
      ) : (
        <QuoteList quotes={quotes} />
      )}
    </div>
  );
}

export default App;