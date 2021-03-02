import React from "react";
import PropTypes from "prop-types";

export const Hello = ({ say }) => {
  return (
    <div className="card">
      <h3>Hello</h3>
      <p>say: {say}</p>
    </div>
  );
};

Hello.propTypes = {
  /**
   * What to say
   */
  say: PropTypes.string.isRequired,
};
