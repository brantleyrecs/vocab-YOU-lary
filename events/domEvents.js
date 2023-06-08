import { deleteCard, getCards, getSingleCard } from '../api/vocabData';
import { viewCards } from '../pages/cards';
import addCardForm from '../pages/entryForm';
// import { filter } from './filters';
// import { filter } from './filters';

const domEvents = (user) => {
  document.querySelector('#main-div').addEventListener('click', (e) => {
    // create entry event
    if (e.target.id.includes('create-entry-btn')) {
      addCardForm();
    }

    // update card event
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
    }

    // delete card event
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(viewCards);
        });
      }
    }
  });
};

export default domEvents;
