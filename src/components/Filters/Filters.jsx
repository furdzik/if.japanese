import React from 'react';
import PropTypes from 'prop-types';

import { selectedFiltersShape, filterListShape } from '@types/filtersShape';

import { useBreakpoint } from '@utils/hooks/useBreakpoint';
import { breakpoints } from '@styles/basic/breakpoints';

import CheckboxList from '@components/ui/CheckboxList';

import {
  Wrapper,
  FiltersBox,
  FiltersGroup
} from './Filters.styles.js';

const Filters = (props) => {
  const isDesktop = useBreakpoint(`(min-width: ${breakpoints.laptop})`);

  return (
    <React.Fragment>
      <Wrapper>
        <FiltersBox primary>
          <CheckboxList
            name="filters"
            onCheckboxClick={props.changeFilters}
            items={props.filterList}
            selected={props.selectedFilters}
            centered={isDesktop}
          />
        </FiltersBox>
        <FiltersGroup>
          <FiltersBox noHeight={props.additionalFilterList}>
            <CheckboxList
              name="filters"
              onCheckboxClick={props.changeFilters}
              items={props.secondaryFilterList}
              selected={props.selectedFilters}
              centered={isDesktop}
            />
          </FiltersBox>
          {
            props.additionalFilterList ? (
              <FiltersBox noHeight={props.additionalFilterList}>
                <CheckboxList
                  name="filters"
                  onCheckboxClick={props.changeFilters}
                  items={props.additionalFilterList}
                  selected={props.selectedFilters}
                  centered={isDesktop}
                />
              </FiltersBox>
            ) : null
          }
        </FiltersGroup>
      </Wrapper>
    </React.Fragment>
  );
};

Filters.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  filterList: filterListShape.isRequired,
  secondaryFilterList: filterListShape.isRequired,
  selectedFilters: selectedFiltersShape.isRequired,
  additionalFilterList: filterListShape
};

Filters.defaultProps = {
  additionalFilterList: null
};

export default Filters;
