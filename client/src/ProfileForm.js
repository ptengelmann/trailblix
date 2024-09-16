import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Validation schema
const ProfileSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  education: Yup.string().required('Education is required'),
  skills: Yup.string().required('Skills are required'),
  interests: Yup.string().required('Interests are required'),
});

const ProfileForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Update the URL to point to your Heroku backend
      const response = await axios.post('https://trailblix.herokuapp.com/api/profile', values);
      alert('Profile submitted successfully!');
      resetForm();
    } catch (error) {
      alert('Error submitting profile');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', education: '', skills: '', interests: '' }}
      validationSchema={ProfileSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4" gutterBottom>
              Complete Your Profile
            </Typography>

            <Field
              as={TextField}
              label="Name"
              name="name"
              variant="outlined"
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              fullWidth
            />

            <Field
              as={TextField}
              label="Education"
              name="education"
              variant="outlined"
              error={touched.education && !!errors.education}
              helperText={touched.education && errors.education}
              fullWidth
            />

            <Field
              as={TextField}
              label="Skills (comma-separated)"
              name="skills"
              variant="outlined"
              error={touched.skills && !!errors.skills}
              helperText={touched.skills && errors.skills}
              fullWidth
            />

            <Field
              as={TextField}
              label="Interests (comma-separated)"
              name="interests"
              variant="outlined"
              error={touched.interests && !!errors.interests}
              helperText={touched.interests && errors.interests}
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
