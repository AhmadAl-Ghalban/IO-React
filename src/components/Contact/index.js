import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="special-heading">Contact</h2>
        <p>We are born to create</p>
        <div className="contect-info">
          <p className="lable">Feel free to drop us a line at :</p>
          <a
            href="mailto:Ahmadalghalban05@gmail.com?subject=Contact"
            className="link"
          >
            Ahmadalghalban05@gmail.com
          </a>
          <div className="social">
            Find Us On Socail Networks
            <FontAwesomeIcon
              icon={solid("user-secret")}
                          color={"var(--main-color)"}
                          className="icon"

            />
            <FontAwesomeIcon
              icon={solid("user-secret")}
              color={"var(--main-color)"}
            className="icon"
                      />
            <FontAwesomeIcon
              icon={solid("user-secret")}
                          color={"var(--main-color)"}
                          className="icon"

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
