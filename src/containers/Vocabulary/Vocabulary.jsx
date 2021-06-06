import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterLabels, secondaryFilterLabels } from '@utils/filters';

import { vocabShape } from '@types/vocabShape';
import { filtersLengthShape, selectedFiltersShape } from '@types/filtersShape';

import Filters from '@components/Filters';
import Legend from '@components/Legend';
import VocabularyList from '@components/VocabularyList';
import ProgressBar from '@components/ProgressBar';

import { getVocabulary, changeFilters } from './Vocabulary.reducer';

import selector from './Vocabulary.selector';

const Vocabulary = (props) => {
  useEffect(() => {
    props.getVocabulary();
  }, [props.selectedFilters]);

  return props.vocab ? (
    <React.Fragment>
      <Filters
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={filterLabels}
        secondaryFilterList={secondaryFilterLabels}
      />
      <Legend length={props.vocabLength} />
      <ProgressBar length={props.vocabLength} />
      <VocabularyList vocab={props.vocab} />
    </React.Fragment>
  ) : null;
};

Vocabulary.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  getVocabulary: PropTypes.func.isRequired,
  selectedFilters: selectedFiltersShape.isRequired,
  vocabLength: filtersLengthShape.isRequired,
  vocab: vocabShape
};

Vocabulary.defaultProps = {
  vocab: null
};

const mapDispatchToProps = {
  changeFilters,
  getVocabulary
};

export default connect(selector, mapDispatchToProps)(Vocabulary);
