import { getCards, createCard, updateCard } from '../api/vocabData';
import { viewCards } from '../pages/cards';

const formEvents = (user) => {
  document.querySelector('#main-div').addEventListener('submit', (e) => {
    e.preventDefault();
    // Click event for submitting a new card
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid: `${user.uid}`,
        date: new Date()
      };
      console.warn(payload);
      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards(`${user.uid}`).then(viewCards);
        });
      });
    }

    // Click event for editing card
    if (e.target.id.includes('#edit-card')) {
      const [, firebaseKey] = e.target.dispatchEvent.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards(`${user.uid}`).then(viewCards);
      });
      console.warn(firebaseKey);
    }
  });
};

export default formEvents;
