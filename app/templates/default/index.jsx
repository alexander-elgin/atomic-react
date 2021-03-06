import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 1em 0;
  flex-direction: column;
`;

const Template = ({ component, ...rest }) => {
  const Content = component;

  return (
    <div>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <AppWrapper>
        <Content {...rest} />
      </AppWrapper>
      <Footer />
    </div>
  );
};

Template.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default Template;
