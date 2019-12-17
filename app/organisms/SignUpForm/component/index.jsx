import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
} from '@material-ui/core';
import {
  Email,
  Lock,
  Person,
} from '@material-ui/icons';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form/immutable';
import { FormattedMessage, intlShape } from 'react-intl';

import Error from '../../../atoms/Error';
import messages from './messages';

const SignUpForm = ({ error, intl, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Card style={{ maxWidth: 280 }}>
      <CardHeader title={intl.formatMessage(messages.signUp)} />
      <CardContent>
        <Error>{error}</Error>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Field
              component={TextField}
              label={intl.formatMessage(messages.name)}
              name="name"
              type="text"
              InputProps={{
                startAdornment: <InputAdornment position="start"><Person color="primary" /></InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={TextField}
              label={intl.formatMessage(messages.email)}
              name="email"
              type="email"
              InputProps={{
                startAdornment: <InputAdornment position="start"><Email color="primary" /></InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={TextField}
              label={intl.formatMessage(messages.password)}
              name="password"
              type="password"
              InputProps={{
                startAdornment: <InputAdornment position="start"><Lock color="primary" /></InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" color="primary">
              <FormattedMessage {...messages.signUp} />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FormattedMessage {...messages.alreadyHaveAccount} /> <Link to={'/signin'}><FormattedMessage {...messages.signIn} /></Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  </form>
);

SignUpForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  intl: intlShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
