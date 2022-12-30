import "./index.css";
import about from "../../assets/image/about.jpg";
function About() {
  return (
    <div className="about">
      <div className="container">
        <h2 className="special-heading">About</h2>
        <p>Less is more work</p>
        <div className="about-content">
          <div className="image">
            <img src={about} alt="" />
                  </div>
                  <div className="text">
                  <p>
            Sint reprehenderit magna irure culpa amet. Elit aliqua Lorem dolore
            Lorem elit quis irure. Ipsum dolore consectetur do aliqua et
            reprehenderit esse deserunt amet in deserunt excepteur eu. Aliquip
            deserunt laborum Lorem anim labore aute mollit ex consectetur
            consequat nulla.
          </p>
          <hr></hr>
          <p>
            Dolore velit duis amet minim tempor aute eu aliqua aliquip deserunt
            nostrud laborum. Proident mollit est deserunt officia et tempor
            aliquip veniam qui. Mollit commodo dolore duis magna ullamco aliqua
            cillum. Labore duis ut dolor amet cillum non reprehenderit elit in.
            Ullamco est dolor aliquip ex elit consequat laborum excepteur ipsum.
          </p>
                  </div>
  
        </div>
      </div>
    </div>
  );
}

export default About;
