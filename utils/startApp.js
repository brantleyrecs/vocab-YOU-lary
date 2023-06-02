import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import getCards from '../api/vocabData';
import { viewCards } from '../pages/cards';

const startApp = () => {
  domBuilder();
  navBar();

  getCards().then((cards) => viewCards(cards));
};

export default startApp;
