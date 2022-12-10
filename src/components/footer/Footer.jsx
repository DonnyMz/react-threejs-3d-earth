import "./footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-text">&copy;</li>
        <li className="footer-text">Footer</li>
        <li className="footer-text">{date}</li>
      </ul>
    </div>
  );
};

export default Footer;
