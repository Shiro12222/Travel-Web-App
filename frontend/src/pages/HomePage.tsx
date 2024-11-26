import '../css/design.css';
import '../css/particle.css'
import { Link } from 'react-router-dom';
import HairImg from '../assets/images/hair.jpeg'
import NailImg from '../assets/images/nails.jpeg'
import MakeupImg from '../assets/images/makeup.jpg'
import AboutUs from '../assets/images/about_us.jpg'
import WorkPlace from '../assets/images/workplace.jpeg'


const HomePage = () => {
  return (
    <div>
      <div>
        <div className="col-9 section-content">
          <p className="section-subtitle">ATTRACTIVE BEAUTY SALON</p>
          <h2 className="section-title">ENHANCE YOUR BEAUTY AND UNIQUENESS</h2>
          <p className="section-description">Let our beauty experts make you feel and look your best!</p>
        </div>
        <Link to = "/contacts_client">
          BOOK NOW
        </Link>
      </div>

      <div>
        <img className="col-4" src={HairImg} alt="Hair img" />
        <img className="col-4" src={NailImg} alt="Nails img" />
        <img className="col-4" src={MakeupImg} alt="Makeup img" />
      </div>

      <div>
        <div className="col-3"></div>
        <div className="col-6">
          <i>“Attractive Beauty Salon celebrates beauty and wellness in a relaxing and inviting atmosphere. Sit back and relax as our experts do their magic to enhance your look and individuality!”</i>
        </div>
        <div className="col-3"></div>
      </div>

      <div>
        <img className="col-6" src={AboutUs} alt="About us" />
        <div className="col-6">
          <p className="section-subtitle">ABOUT US</p>
          <h2 className="section-title">PLACE WHERE YOU FEEL MAGICAL AND PEACEFUL</h2>
          <p className="about-description">Blending bold creativity, flawless technique, and dedication.</p>
          <p className="about-detail">Attractive Beauty Salon provides clients with beauty services of the highest quality. We are second to none when it comes to professionalism and understanding of beauty trends.</p>
          <p className="about-detail">Our skilled and passionate makeup artists and hair stylists are at your service to make you feel and look your best. Attractive Beauty Salon is committed to customer satisfaction, hygiene, cleanliness, latest equipment, high-quality products, and services.</p>
        </div>
      </div>

      <div id="column6" className="working-hours">
        <div className="col-6 working-hours-content">
          <p className="section-subtitle">WHEN WE WORK</p>
          <h2 className="section-title">WORKING HOURS</h2>
          <p className="working-description">We are open every day from the very morning. If you want to get any beauty services, please book your visit in advance.</p>
          <p className="working-time"><b>Monday to Friday: </b>08:00-22:00</p>
          <p className="working-time"><b>Saturday: </b>08:00-20:00</p>
          <p className="working-time"><b>Sunday: </b>10:00-19:00</p>
          <Link to="/contacts">
            BOOK NOW
          </Link>
        </div>
        <img className="col-6" src={WorkPlace} alt="Workplace" />
      </div>

      <section id="column7" className="location">
        <iframe
          className="col-6"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14765.33913582624!2d114.184857!3d22.303175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400e6d06d7c1b%3A0xc56b4441ff21dd71!2sPolyU%20Hung%20Hom%20Bay%20Campus!5e0!3m2!1sen!2shk!4v1709785465389!5m2!1sen!2shk"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="col-6 location-content">
          <p className="section-subtitle">WHERE WE WORK</p>
          <h2 className="section-title">ADDRESS</h2>
          <p className="location-description">8 Hung Lok Road, Hung Hom, Kowloon</p>
          <p className="location-description">Hong Kong, China</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
