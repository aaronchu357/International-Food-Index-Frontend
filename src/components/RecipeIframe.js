import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const RecipeIframe = ({ source }) => {

  if (!source) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-iframe-container">
      <div className="emdeb-responsive">
        <ResponsiveEmbed aspect="a16by9">
          <iframe src={source} width={725} height={425} title='recipe-iframe'></iframe>
        </ResponsiveEmbed>
      </div>
    </div>
  );
};

export default RecipeIframe;