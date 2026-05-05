import React, { useEffect, useState } from 'react';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/jokes/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJoke(data?.joke || 'No joke found');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke(); // Fetch a joke on component mount
  }, []);

  return (
    <div>
      <h1>Random Joke Generator</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {joke && <p>{joke}</p>}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default JokeGenerator;
