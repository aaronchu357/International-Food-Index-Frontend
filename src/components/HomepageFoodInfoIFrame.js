import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const HomepageFoodInfoIFrame = ({ source }) => {

  if (!source) {
    return <div>Loading...</div>;
  }

  return (
    <div className="homepage-food-info-iframe-container">
      <div className="emdeb-responsive">
        <ResponsiveEmbed aspect="a16by9">
          <iframe src={source} title='homepage-food-info-iframe'></iframe>
        </ResponsiveEmbed>
      </div>
    </div>
  );
};

export default HomepageFoodInfoIFrame;