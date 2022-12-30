import "./index.css";
import portfolio from "../../assets/image/portfolio-1.jpg";
import portfolio2 from "../../assets/image/portfolio-2.jpg";
import portfolio3 from "../../assets/image/portfolio-3.jpg";
function Protfolio() {
  return (
    <div className="protfolio">
      <div className="container">
        <h2 className="special-heading">Protfolio</h2>
        <p>If you do it right, it will last forever</p>
        <div className="protfolio-content">
          <div className="card">
            <img alt="" src={portfolio} />
            <div className="info">
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                mainfast in so may surprising and .
              </p>
            </div>
          </div>
          <div className="card">
            <img alt="" src={portfolio2} />
            <div className="info">
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                mainfast in so may surprising and .
              </p>
            </div>
          </div>
          <div className="card">
            <img alt="" src={portfolio3} />
            <div className="info">
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                mainfast in so may surprising and .
              </p>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Protfolio;
