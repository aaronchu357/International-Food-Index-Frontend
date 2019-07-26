import '../css/RecipeIFrame.css'
import React from 'react';

const RecipeIframe = ({ source }) => {

  if (!source) {
    return <div>Loading...</div>;
  }

  return (
    // basic bootstrap classes. you can change with yours.
    <div className="recipe-iframe-container">
      <div className="emdeb-responsive" style={{aspectRatio: '16/9'}}>
        <iframe src={source} width={725} height={425} title='recipe-iframe'></iframe>
      </div>
    </div>
  );
};

export default RecipeIframe;