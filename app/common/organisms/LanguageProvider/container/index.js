import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { makeSelectLocale } from '../../../../state/language/selectors';
import LanguageProvider from '../component';

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export default connect(mapStateToProps)(LanguageProvider);
