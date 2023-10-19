import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../Assets/Images/Logo.png';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogoutModalOpen: false,
    };
  }

  logout=()=>{
    window.localStorage.clear();
    window.location.href="/login"
  }

  handleLogoutClick = () => {
    this.setState({ isLogoutModalOpen: true });
  };

  handleLogoutConfirm = () => {
    
    window.location.href = '/login';

    this.setState({ isLogoutModalOpen: false });
    document.body.classList.remove('modal-open'); 
  };

  handleLogoutCancel = () => {
    this.setState({ isLogoutModalOpen: false });
  };

  render() {
    const { isLogoutModalOpen } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={Logo} alt="Logo" height="50" style={{ marginRight: '10px' }} />
          <h3 style={{ color: '#0A244B' }}>ADMIN</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/user" style={{ color: '#0A244B' }}>
                  Users<span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/admin" style={{ color: '#0A244B' }}>
                  Admins<span className="sr-only">(current)</span>
                </Link>
              </li>
                
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={this.handleLogoutClick}>
                  <i className="fa fa-sign-out" aria-hidden="true" style={{ color: '#0A244B' }}></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Logout Modal */}
          {isLogoutModalOpen && (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor:'#fff' }}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Logout Confirmation</h5>
                    <button type="button" className="close" onClick={this.handleLogoutCancel}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body" >
                    <p>Are you sure you want to logout?</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={this.handleLogoutCancel}>
                      No
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.logout}>
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isLogoutModalOpen && <div className="blur-overlay"></div>}
        </nav>
      </div>
    );
  }
}
