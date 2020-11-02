import React from 'react';
import PropTypes from 'prop-types';

import { vocabShape } from '@components/VocabularyList/VocabularyList.types';
import { bunpouTypes, inflectionTypes, verbGroupTypes } from '@config/constants';

import {
  Box,
  BoxGroup,
  VerbConjugationWrapper,
  Label
} from './VerbConjugationGroup.styles.js';

const VerbConjugationGroup = (props) => props.verb ? (
  <BoxGroup showLine={props.showLine}>
    {
      props.label && props.showLabel ? (
        <Label>{props.label}</Label>
      ) : null
    }
    {
      props.bunpou.map((item, index) => item !== bunpouTypes.SHIEKIUKEMI_SHORT_KEI || props.verb?.verbGroup !== verbGroupTypes.group2 ? (
        <Box key={index}>
          <VerbConjugationWrapper
            verb={props.verb}
            bunpou={item}
            inflection={inflectionTypes.NORMAL}
          />
          {
            !props.noNegative ? (
              <VerbConjugationWrapper
                verb={props.verb}
                bunpou={item}
                inflection={inflectionTypes.NEGATIVE}
              />
            ) : null
          }
          {
            !props.noPast ? (
              <React.Fragment>
                <VerbConjugationWrapper
                  verb={props.verb}
                  bunpou={item}
                  inflection={inflectionTypes.PAST}
                />
                <VerbConjugationWrapper
                  verb={props.verb}
                  bunpou={item}
                  inflection={inflectionTypes.PAST_NEGATIVE}
                />
              </React.Fragment>
            ) : null
          }

        </Box>
      ) : null)
    }
    {
      props.bunpou.map((item, index) => props.teineiKei
        && (item !== bunpouTypes.SHIEKIUKEMI_SHORT_KEI || props.verb?.verbGroup !== verbGroupTypes.group2) ? (
        <Box key={index}>
          <VerbConjugationWrapper
            verb={props.verb}
            bunpou={item}
            inflection={inflectionTypes.NORMAL}
            teineiKei
          />
          {
            !props.noNegative ? (
              <VerbConjugationWrapper
                verb={props.verb}
                bunpou={item}
                inflection={inflectionTypes.NEGATIVE}
                teineiKei
              />
            ) : null
          }
          {
            !props.noPast ? (
              <React.Fragment>
                <VerbConjugationWrapper
                  verb={props.verb}
                  bunpou={item}
                  inflection={inflectionTypes.PAST}
                  teineiKei
                />
                <VerbConjugationWrapper
                  verb={props.verb}
                  bunpou={item}
                  inflection={inflectionTypes.PAST_NEGATIVE}
                  teineiKei
                />
              </React.Fragment>
            ) : null
          }
        </Box>
        ) : null
      )
    }
  </BoxGroup>
) : null;

VerbConjugationGroup.propTypes = {
  bunpou: PropTypes.arrayOf(PropTypes.string).isRequired,
  verb: vocabShape.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  hideGroup: PropTypes.bool,
  teineiKei: PropTypes.bool,
  showLabel: PropTypes.bool,
  showLine: PropTypes.bool,
  noPast: PropTypes.bool,
  noNegative: PropTypes.bool
};

VerbConjugationGroup.defaultProps = {
  className: '',
  label: '',
  hideGroup: false,
  teineiKei: false,
  showLabel: false,
  showLine: false,
  noPast: false,
  noNegative: false
}

export default VerbConjugationGroup;