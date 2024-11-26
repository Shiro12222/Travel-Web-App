import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div>
          <div className="col-3"></div>
          <div className="col-6 footer-title">CHECK OUT OUR OTHER SESSIONS!</div>
          <div className="col-3"></div>
          <div className="footer-buttons">
            <Link to="/services_client">
              SERVICES
            </Link>

            <Link to="/pricing_list_client">
              PRICING LIST
            </Link>

            <Link to="/contacts_client">
              CONTACTS
            </Link>
          </div>
      </div>
    );
};

export default Footer;