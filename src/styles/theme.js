import { colors } from './colors';
import { typography } from './typography';

export default {
  colors,
  typography,
  mainCategoriesStyle: {
    known: colors.primaryColor,
    inProgress: `repeating-linear-gradient(45deg, #ef8888, #fba5a5 2px, ${colors.tartaryColor} 4px, ${colors.tartaryColor} 6px)`,
    nowLearning: {
      background: '#f18181',
      border: `2px solid ${colors.primaryColor}`
    },
    notKnown: colors.secondaryColor
  },
  layout: {
    borderRadius: '.4rem',
    containerWidth: '128rem',
    padding: '0 2rem',
    mobilePadding: '0 1rem'
  }
};
