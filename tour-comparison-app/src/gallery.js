import React, { useState, useEffect } from 'react';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error loading tours</h2>;
  }

  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
          <p>{tour.info}</p>
          <button onClick={() => removeTour(tour.id)}>Not Interested</button>
          {/* Implement "Read More"/"Show Less" functionality */}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
