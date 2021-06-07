import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

import Collapsible from 'react-collapsible';

import { bunpouTypes, verbType } from '@config/constants';

import { vocabItemShape } from '@types/vocabShape';

import conjugationMessages from '@utils/defaultMessages/conjugation.messages';

import VerbConjugationGroup from '@components/VerbConjugationGroup';

import {
  Item,
  TileStyled,
  MainBox,
  VocabLink,
  BoxContent,
  BoxWrapper,
  TriggerWrapper,
  VerbType,
  ParticleWrapper,
  ParticleList,
  ParticleListItem,
  ParticleLabel
} from './VerbsListItem.styles.js';
import messages from './VerbsListItem.messages';

const VerbsListItem = (props) => {
  const intl = useIntl();

  const [collapsed, setCollapse] = useState(false);

  const verbTypeLabel = (type, symbol = false) => {
    switch (type) {
      case verbType.TRANSITIVE: {
        return symbol
          ? intl.formatMessage(messages.verbTypeTransitive)
          : intl.formatMessage(messages.verbTypeTransitiveText);
      }
      case verbType.INTRANSITIVE: {
        return symbol
          ? intl.formatMessage(messages.verbTypeIntransitive)
          : intl.formatMessage(messages.verbTypeIntransitiveText);
      }
      case verbType.OTHER: {
        return symbol
          ? intl.formatMessage(messages.verbTypeOther)
          : intl.formatMessage(messages.verbTypeOtherText);
      }

      default:
        return null;
    }
  };

  const renderTrigger = () => (
    <TriggerWrapper isCollaps={collapsed}>
      {
        !collapsed ? (
          <React.Fragment>
            <Icon
              path={mdiChevronDown}
              size="2.3rem"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Icon
              path={mdiChevronUp}
              size="2.3rem"
            />
          </React.Fragment>
        )
      }
    </TriggerWrapper>
  );

  return (
    <Item
      key={props.item.vocab}
      inProgress={props.item.inProgress}
      known={props.item.known}
      level={props.item.level}
      id={props.item.vocab}
    >
      <MainBox>
        <TileStyled
          key={props.item.vocab}
          inProgress={props.item.inProgress}
          nowLearning={props.item.nowLearning}
          known={props.item.known}
          level={props.item.level}
        >
          <VocabLink to={`vocab/${props.item.vocab}`}>{props.item.vocab}</VocabLink>
        </TileStyled>
        <VerbType title={verbTypeLabel(props.item.verb?.verbType)}>
          {verbTypeLabel(props.item.verb?.verbType, true)}
        </VerbType>
        {
          props.item.verb && props.item.verb.particles ? (
            <ParticleWrapper>
              <ParticleLabel>
                {intl.formatMessage(messages.particleLabel)}
              </ParticleLabel>
              <ParticleList>
                {
                  props.item.verb.particles.map((el, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ParticleListItem key={index}>{el}</ParticleListItem>
                  ))
                }
              </ParticleList>
            </ParticleWrapper>
          ) : null
        }
      </MainBox>
      <BoxContent smallerMargin={!collapsed}>
        <BoxWrapper>
          <VerbConjugationGroup
            showLabel={collapsed}
            label={intl.formatMessage(conjugationMessages[`${bunpouTypes.JISHOU_KEI}Label`])}
            verb={props.item.verb}
            bunpou={[bunpouTypes.JISHOU_KEI]}
            teineiKei
          />

          <Collapsible
            trigger={renderTrigger(collapsed)}
            transitionTime={50}
            open={collapsed}
            handleTriggerClick={() => setCollapse(!collapsed)}
          >
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.KANOU_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.KANOU_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.TAI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.TAI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.TE_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.TE_KEI]}
              noPast
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.IKOU_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.IKOU_KEI]}
              noPast
              noNegative
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.MEIREI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.MEIREI_KEI]}
              noPast
            />

            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.JOUKEN_BA_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.JOUKEN_BA_KEI]}
              noPast
            />
            <VerbConjugationGroup
              showLine={collapsed}
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.JOUKEN_TARA_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.JOUKEN_TARA_KEI]}
              noPast
            />

            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.UKEMI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.UKEMI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.SHIEKI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[bunpouTypes.SHIEKI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLabel={collapsed}
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.SHIEKIUKEMI_KEI}Label`])}
              verb={props.item.verb}
              bunpou={[
                bunpouTypes.SHIEKIUKEMI_KEI,
                bunpouTypes.SHIEKIUKEMI_SHORT_KEI
              ]}
              teineiKei
            />
          </Collapsible>
        </BoxWrapper>
      </BoxContent>
    </Item>
  );
};

VerbsListItem.propTypes = {
  item: vocabItemShape.isRequired
};

export default VerbsListItem;
