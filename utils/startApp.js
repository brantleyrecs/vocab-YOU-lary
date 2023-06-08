import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import { getCards } from '../api/vocabData';
import { viewCards } from '../pages/cards';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  navBar();
  domEvents(user);
  navEvents(user);
  logoutButton();

  getCards(user.uid).then((cards) => viewCards(cards));
};

export default startApp;
