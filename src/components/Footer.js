// src/components/Footer.js

import React from 'react';

// Функциональный компонент для блока ссылок
function FooterLinks(props) {
  // 1. Сначала деструктурируем 'data' из props
  const { data } = props; 
  
  // 2. Теперь выполняем проверку (data уже определена)
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return null; 
  }
  
  const title = Object.keys(data)[0];
  const links = data[title];
  // 3. Используем data
  

  return (
    <div className="footer-links-group">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
// Классовый компонент для Footer
class Footer extends React.Component {
  render() {
    // Получаем footerData через props
    const { footerData } = this.props;

    return (
      <footer className="footer">
        <div className="footer-content-wrapper">
          <div className="footer-logo">BAHANDI</div>
          {/* Передаем данные в FooterLinks через props */}
          <FooterLinks data={footerData} />
        </div>
        <div className="copyright">
          © 2024 ТОО Bahandi. Все права защищены
        </div>
      </footer>
    );
  }
}

export default Footer;