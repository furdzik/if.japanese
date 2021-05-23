import PropTypes from 'prop-types';
import { vocabItemShape } from './vocabShape';

export const flashcardShape = PropTypes.shape({
  vocab: PropTypes.string.isRequired,
  reading: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired
});

export const additionalInfoShape = vocabItemShape;
