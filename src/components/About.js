import React from "react";

function About({ image, about }) {
  const placeholderImage = "https://via.placeholder.com/215";
  const imageUrl = image || placeholderImage;
  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
