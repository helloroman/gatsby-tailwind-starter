import React from 'react';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Helmet lang="pl" title="Hello Roman" />
      {children}
    </div>
  );
};

export default MainTemplate;
