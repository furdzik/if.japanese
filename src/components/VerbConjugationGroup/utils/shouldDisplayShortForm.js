import { bunpouTypes, verbGroupTypes } from '@config/constants';

export default (bunpou, verbGroup) => (
  bunpou !== bunpouTypes.SHIEKIUKEMI_SHORT_KEI
  || (verbGroup !== verbGroupTypes.group2
    && verbGroup !== verbGroupTypes.specialVerb1
    && verbGroup !== verbGroupTypes.specialVerb2
  )
);