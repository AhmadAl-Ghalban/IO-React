import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="feat">
                  <FontAwesomeIcon icon={solid("user-secret")} color={'var(--main-color)'} />
          <h3>Tell Us Your Idea</h3>
          <p>
            Aliqua magna in laboris velit cupidatat Lorem eiusmod aliquip
            ullamco aute occaecat. Tempor exercitation culpa ut dolor labore ut
          </p>
        </div>
        <div className="feat">
          <FontAwesomeIcon icon={solid("user-secret")} color={'var(--main-color)'} />
          <h3>Your Product is Worldwide</h3>
          <p>
            Aliqua magna in laboris velit cupidatat Lorem eiusmod aliquip
            ullamco aute occaecat. Tempor exercitation culpa ut dolor labore ut
          </p>
        </div>
        <div className="feat">
          <FontAwesomeIcon icon={solid("user-secret")} color={'var(--main-color)'} />
          <h3>We Will Do All The Work</h3>
          <p>
            Aliqua magna in laboris velit cupidatat Lorem eiusmod aliquip
            ullamco aute occaecat. Tempor exercitation culpa ut dolor labore ut
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
