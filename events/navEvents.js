import { getCards } from '../api/vocabData';
import { viewCards } from '../pages/cards';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  document.querySelector('#logout-btn').addEventListener('click', signOut);

  document.querySelector('#home-btn').addEventListener('click', () => {
    console.warn('Clicked all cards');
    getCards(user.uid).then(viewCards);
  });
};

export default navEvents;
