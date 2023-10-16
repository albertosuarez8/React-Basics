import React from 'react';  // Import the 'React' module from the 'react' library.

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function ResultList(props) {
  return (
    <ul className="list-group">  {/* Create an unordered list with the class 'list-group'. */}
      {props.results.map((result) => (  // Map through an array of 'results' passed as a prop.
        <li className="list-group-item" key={result.id}>  {/* Create a list item with a unique 'key' based on 'result.id'. */}
          <img
            alt={result.title}  // Set the 'alt' attribute of the image to 'result.title'.
            className="img-fluid"  // Set the class of the image to 'img-fluid'.
            src={result.images.original.url}  // Set the 'src' attribute of the image to 'result.images.original.url'.
          />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;  // Export the 'ResultList' component for use in other parts of the application.
