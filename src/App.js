import './scss/app.scss';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import PizzaBlock from './Components/PizzaBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title={'Чизбургер-пицца'} price={395} />
            <PizzaBlock title={'Сырная'} price={450} />
            <PizzaBlock title={'Креветки по-азиатски'} price={290} />
            <PizzaBlock title={'Сырный цыпленок'} price={385} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
