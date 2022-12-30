import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import services from "../../assets/image/services.jpg";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
function Servicess() {
  return (
    <div className="servicess">
      <div className="container">
        <h2 className="special-heading">Servicess</h2>
        <p>Don't be busy , be productive</p>
        <div className="servicess-content">
          <div className="col">
            {/* Start Servicess */}
            <div className="srv">
              <FontAwesomeIcon
                icon={solid("user-secret")}
                color={"var(--main-color)"}
              />
              <div className="text">
                <h3>Graphic Design</h3>
                <p>
                  Esse fugiat duis amet sit veniam proident in consequat sit
                  veniam proident in consequat.
                </p>
              </div>
            </div>
            <div className="srv">
              <FontAwesomeIcon
                icon={solid("user-secret")}
                color={"var(--main-color)"}
              />
              <div className="text">
                <h3>Web Design</h3>
                <p>
                  Esse fugiat duis amet sit veniam proident in consequat sit
                  veniam proident in consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            {/* Start Servicess */}
            <div className="srv">
              <FontAwesomeIcon
                icon={solid("user-secret")}
                color={"var(--main-color)"}
              />
              <div className="text">
                <h3>Mobile Design</h3>
                <p>
                  Esse fugiat duis amet sit veniam proident in consequat sit
                  veniam proident in consequat.
                </p>
              </div>
            </div>
            <div className="srv">
              <FontAwesomeIcon
                icon={solid("user-secret")}
                color={"var(--main-color)"}
              />
              <div className="text">
                <h3>UI/Ux Design</h3>
                <p>
                  Esse fugiat duis amet sit veniam proident in consequat sit
                  veniam proident in consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image">
            <img src={services} alt="" />

            </div>
          </div>
          {/* End Servicess */}
        </div>
      </div>
    </div>
  );
}

export default Servicess;
