import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Connector
            </h1>
                <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
                <hr />
                <Link to="/register" className="btn btn-md btn-info mr-2 rounded-0">Sign Up</Link>
                <Link to="/login" className="btn btn-md btn-light rounded-0">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

Landing.propTypes = {
  auth: propTypes.object.isRequired,
};

const mapSteteToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapSteteToProps)(Landing);