import React from 'react';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="Hello Roman" />
      {children}
    </>
  );
};

export default MainTemplate;
