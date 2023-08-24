import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>Thicc memes INC</h4>
            <ul className="list-unstyled">
              <li>151-565-9889</li>
              <li>moscow</li>
              <li>123 street south north</li>
            </ul>
          </div>
          {/* column2  */}
          <div className="col">
            <h4>stuff</h4>
            <ul className="list-unstyled">
              <li>dank stuff</li>
              <li>other</li>
              <li>123 street</li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col">
            <h4>bank</h4>
            <ul className="list-unstyled">
              <li>dank stuff</li>
              <li>other</li>
              <li>123 street</li>
            </ul>
          </div>
        </div>



<hr />
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} this is simple react footer | all rights reserved

          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
