import React from "react";
import { Row, Col } from 'react-bootstrap';

import BannerLogo from '../assets/images/logo_long.png';
import Logo from '../assets/images/logo.png';

const Header = ({...props }) => {

  return (
    <div>
      <Row id="header" className="d-flex justify-content-end">
        <Col className="d-flex justify-content-start">
          <img
            id="banner-logo-header"
            className="banner-logo"
            src={BannerLogo}
            alt="Banner logo"
          />
          <img
            id="small-logo-header"
            className="small-logo"
            src={Logo}
            alt="Small Logo"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
