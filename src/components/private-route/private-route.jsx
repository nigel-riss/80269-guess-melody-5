import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  AppRoute,
  AuthorizationStatus,
} from '../../const.js';


const PrivateRoute = (props) => {
  const {
    authorizationStatus,
    exact,
    path,
    render,
  } = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};


PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
