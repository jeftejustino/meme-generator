import React from 'react';
import { Route } from 'react-router-dom';
import Proptypes from 'prop-types';

import DefaultLayout from '~/pages/_layouts/default';

export default function RouteWrapper({ component: Component, ...rest }) {
  const Layout = DefaultLayout;
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: Proptypes.bool,
  component: Proptypes.oneOfType([Proptypes.func, Proptypes.element])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
