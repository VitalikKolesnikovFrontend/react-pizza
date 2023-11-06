import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategories = (i) => {
    setActiveIndex(i);
  };
  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategories(0)} className={activeIndex === 0 ? 'active' : ''}>
          Все
        </li>
        <li onClick={() => onClickCategories(1)} className={activeIndex === 1 ? 'active' : ''}>
          Мясные
        </li>
        <li onClick={() => onClickCategories(2)} className={activeIndex === 2 ? 'active' : ''}>
          Вегетарианская
        </li>
        <li onClick={() => onClickCategories(3)} className={activeIndex === 3 ? 'active' : ''}>
          Гриль
        </li>
        <li onClick={() => onClickCategories(4)} className={activeIndex === 4 ? 'active' : ''}>
          Острые
        </li>
        <li onClick={() => onClickCategories(5)} className={activeIndex === 5 ? 'active' : ''}>
          Закрытые
        </li>
      </ul>
    </div>
  );
}

export default Categories;
