# Email Configuration Guide

This project uses [EmailJS](https://www.emailjs.com/) to send emails directly from the frontend. EmailJS is a service that allows sending emails directly from JavaScript without having server code.

## Current Configuration

The application is configured with hardcoded EmailJS credentials in the `ContactForm.jsx` file:

```javascript
const EMAILJS_PUBLIC_KEY = "Secret";
const EMAILJS_TEMPLATE_ID = "Secret";
const EMAILJS_SERVICE_ID = "Secrect";
```

## Setting Up Environment Variables (Recommended for Production)

For better security, it's recommended to move these values to environment variables:

1. Create or modify the following files (which are already added to `.gitignore`):
   - `.env.local` (for local development)
   - `.env.production` (for production builds)

2. Add the following lines to each file:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Secret-D
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=Secret
NEXT_PUBLIC_EMAILJS_SERVICE_ID=servSecretice_o3q91up
```

3. Update the `ContactForm.jsx` file to use environment variables:



## EmailJS Account Management

- **Dashboard**: [https://www.emailjs.com/](https://www.emailjs.com/)
- **Login**: Use your account credentials to manage templates, services, and more

## EmailJS Template Requirements

The current implementation expects the following parameters in your EmailJS template:

- `user_name`: The name of the person submitting the form
- `user_email`: The email address for replies
- `message`: The message content, which also includes the phone number appended at the end

## Deployment Considerations

- For Vercel deployments, add these environment variables in the Vercel dashboard
- For other platforms, follow their documentation on adding environment variables

## Rate Limiting and Anti-Spam

The application implements a client-side rate limiting using localStorage that prevents users from sending more than one email per hour. This helps prevent form spam.

## Local Development Testing

When testing locally, the form will store a submission timestamp in localStorage. To reset this and test multiple submissions:

1. Open browser dev tools
2. Go to the Application tab
3. Select "Local Storage" from the sidebar
4. Find and delete the `contact_form_submission` entry 