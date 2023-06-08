import { getCards } from '../api/vocabData';
import { viewCards } from '../pages/cards';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  document.querySelector('#logout-btn').addEventListener('click', signOut);

  document.querySelector('#home-btn').addEventListener('click', () => {
    console.warn('Clicked all cards');
    getCards(user.uid).then(viewCards);
  });

  document.querySelector('#filters').addEventListener('click', (e) => {
    const language = e.target.id;
    getCards(user.uid).then((cards) => {
      const filteredCards = cards.filter((card) => card.language === language);
      viewCards(filteredCards);
    });
  });
};

export default navEvents;
