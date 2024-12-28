export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center mb-4">
              <img src="images/logo.png" className="img-fluid logo-image" />
              <div className="d-flex flex-column">
                <strong className="logo-text">ICC Paris Centre</strong>
              </div>
            </div>
            <p>
              <i className="custom-icon bi-envelope me-1" />
              <a
                href="mailto:iccpariscentre@gmail.com"
                className="site-footer-link"
              >
                iccpariscentre@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 d-flex align-items-center">
              <p className="copyright-text">
                Copyright © ICC Paris Centre 2048
              </p>
            </div>
            <div className="col-lg-5 col-12 mt-2 mt-lg-0">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a
                    href="https://www.youtube.com/@ICCTVPARISCENTRE"
                    alt="YouTube"
                    className="social-icon-link bi-youtube"
                    target="_blank"
                  />
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://www.instagram.com/icc.paris/"
                    alt="Instagram"
                    className="social-icon-link bi-instagram"
                    target="_blank"
                  />
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://www.tiktok.com/@egliseicc_pariscentre "
                    alt="Tiktok"
                    className="social-icon-link bi-tiktok"
                    target="_blank"
                  />
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://www.facebook.com/people/Impact-Centre-Chr%C3%A9tien-Paris-Centre/100069735216295/"
                    alt="Facebook"
                    className="social-icon-link bi-facebook"
                    target="_blank"
                  />
                </li>
              </ul>
            </div>
            <a
              className="back-top-icon bi-arrow-up smoothscroll d-flex justify-content-center align-items-center"
              href="#root"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
