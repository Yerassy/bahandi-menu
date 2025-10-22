
import React from 'react';


function Navigation(props) {
  const { items, activeCategory } = props; 

  if (!items || !Array.isArray(items)) {
    return null; // или пустая навигация
  }
  
  return (
    <nav className="navigation-menu">
      {items.map((item) => (
        <a
          key={item}
          className={`nav-item ${item === activeCategory ? 'active' : ''}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}




class Header extends React.Component {
  render() {
    // Получаем navItems и activeCategory через this.props
    const { navItems, activeCategory } = this.props; // <-- Здесь мы получаем данные

    return (
      <header className="header">
        <div className="logo">BAHANDI</div>
        {/* Передаем данные в Navigation через props, используя правильные имена */}
        <Navigation 
          items={navItems} // <-- Убедитесь, что имя 'items' совпадает
          activeCategory={activeCategory} 
        />
      </header>
    );
  }
}
export default Header;