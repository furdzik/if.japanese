import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { URL_SEPARATOR } from '@config/constants';

import { objectShape } from '@types/objectShape';

import { getVocabSpecificReading } from '@utils/vocabulary';

import Loader from '@components/ui/Loader';

import VocabularyDetailsComponent from '@components/VocabularyDetails';

import selector from './VocabularyDetails.selector';
import { getVocabularyDetails } from './VocabularyDetails.reducer';

const VocabularyDetails = (props) => {
  const getProperKanji = (name) => {
    const newName = name.split(URL_SEPARATOR);

    return name.indexOf(URL_SEPARATOR) > 0 ? newName[0] : name;
  };

  const [name, setName] = useState(getProperKanji(props.name));

  useEffect(() => {
    setName(getProperKanji(props.name));

    props.getVocabularyDetails(name, props.name, getVocabSpecificReading(props.name));
  }, [props.name]);

  return !props.loading ? (
    <VocabularyDetailsComponent
      name={name}
      senses={props.senses}
      additionalExplanation={props.additionalExplanation}
      antonyms={props.antonyms}
      examples={props.examples}
      inProgress={props.inProgress}
      nowLearning={props.nowLearning}
      isCommon={props.isCommon}
      isVerb={!!(props.verb && props.verb.verbGroup)}
      japanese={props.japanese}
      jlpt={props.jlpt}
      reading={props.reading}
      known={props.known}
      pitch={props.pitch}
      tags={props.tags}
      verb={props.verb}
      slug={props.slug}
    />
  ) : <Loader covered />;
};

VocabularyDetails.propTypes = {
  getVocabularyDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  senses: PropTypes.arrayOf(PropTypes.object).isRequired,
  additionalExplanation: PropTypes.string,
  antonyms: PropTypes.string,
  examples: PropTypes.arrayOf(PropTypes.string),
  inProgress: PropTypes.bool,
  isCommon: PropTypes.bool,
  japanese: PropTypes.arrayOf(PropTypes.object),
  jlpt: PropTypes.arrayOf(PropTypes.string),
  known: PropTypes.bool,
  nowLearning: PropTypes.bool,
  pitch: PropTypes.string,
  reading: PropTypes.string,
  slug: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  verb: objectShape
};

VocabularyDetails.defaultProps = {
  additionalExplanation: null,
  antonyms: null,
  examples: [],
  inProgress: false,
  isCommon: null,
  japanese: [],
  jlpt: [],
  known: false,
  nowLearning: false,
  pitch: '',
  reading: '',
  slug: null,
  tags: [],
  verb: null
};

const mapDispatchToProps = {
  getVocabularyDetails
};

export default connect(selector, mapDispatchToProps)(VocabularyDetails);
