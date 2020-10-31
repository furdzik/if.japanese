import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import {
  KNOWN_KANJI,
  IN_PROGRESS_KANJI,
  NOT_KNOWN_KANJI,
  LEVEL_5_KANJI,
  LEVEL_4_KANJI,
  LEVEL_3_KANJI,
  LEVEL_2_KANJI,
  LEVEL_1_KANJI,
  OTHER_KANJI
} from '@config/constants';

import Filters from '@components/Filters';
import KanjiList from '@components/KanjiList';

import { getKanji, changeFilters } from './Kanji.reducer';
import selector from './Kanji.selector';

import messages from './Kanji.messages';

const Kanji = (props) => {
  const intl = useIntl();

  useEffect(() => {
    props.getKanji();
  }, [props.selectedFilters]);

  const filterList = [
    {
      value: KNOWN_KANJI,
      label: intl.formatMessage(messages.known)
    },
    {
      value: IN_PROGRESS_KANJI,
      label: intl.formatMessage(messages.inProgress)
    },
    {
      value: NOT_KNOWN_KANJI,
      label: intl.formatMessage(messages.notKnown)
    }
  ];

  const secondaryFilterList = [
    {
      value: LEVEL_5_KANJI,
      label: intl.formatMessage(messages.n5)
    },
    {
      value: LEVEL_4_KANJI,
      label: intl.formatMessage(messages.n4)
    },
    {
      value: LEVEL_3_KANJI,
      label: intl.formatMessage(messages.n3)
    },
    {
      value: LEVEL_2_KANJI,
      label: intl.formatMessage(messages.n2)
    },
    {
      value: LEVEL_1_KANJI,
      label: intl.formatMessage(messages.n1)
    },
    {
      value: OTHER_KANJI,
      label: intl.formatMessage(messages.other)
    }
  ];

  return props.kanji ? (
    <React.Fragment>
      <Filters
        length={props.kanjiLength}
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={filterList}
        secondaryFilterList={secondaryFilterList}
      />
      <KanjiList
        kanji={props.kanji}
      />
    </React.Fragment>
  ) : null;
};

Kanji.propTypes = {
  getKanji: PropTypes.func.isRequired
};

Kanji.defaultProps = {
};

const mapDispatchToProps = {
  changeFilters,
  getKanji
};

export default connect(selector, mapDispatchToProps)(Kanji);