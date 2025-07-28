# 📧 EmailJS Setup Guide for Contact Form

## Current Status
Your contact form is already configured with EmailJS! The settings in `js/script.js` show:
- **Service ID:** `service_himh7h4`
- **Template ID:** `template_yl4iyna`
- **Public Key:** `321MpVWTjpnfyEAxQ`
- **Recipient Email:** `dheeraj8453@gmail.com`

## ✅ What's Already Working

Your contact form will:
1. Collect client information (name, email, phone, service type, message)
2. Validate all inputs (email format, phone number)
3. Send emails via EmailJS to `dheeraj8453@gmail.com`
4. Show success/error messages to users
5. Reset the form after successful submission

## 🔧 To Verify EmailJS is Working

1. **Login to EmailJS Dashboard:**
   - Go to [EmailJS.com](https://emailjs.com)
   - Login with your account
   - Check that service `service_himh7h4` is active
   - Verify template `template_yl4iyna` exists

2. **Test the Contact Form:**
   - Once your website is live, fill out the contact form
   - Check if emails are received at `dheeraj8453@gmail.com`
   - If not working, check browser console for errors

## 📨 Email Template Variables

Your email template should include these variables:
- `{{to_email}}` - Recipient email (dheeraj8453@gmail.com)
- `{{from_name}}` - Client's full name
- `{{from_email}}` - Client's email
- `{{phone}}` - Client's phone number
- `{{service}}` - Selected legal service
- `{{message}}` - Client's message
- `{{subject}}` - Email subject line

## 🚨 If EmailJS Needs Setup

If the current EmailJS account isn't working, here's how to set up a new one:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://emailjs.com)
2. Sign up with your email (recommend using `dheeraj8453@gmail.com`)
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, click "Add New Service"
2. Choose "Gmail" (recommended)
3. Connect your Gmail account
4. Note the Service ID

### Step 3: Create Email Template
1. Click "Create New Template"
2. Set up template with these fields:
   ```
   Subject: New Legal Consultation Request - {{service}}
   
   From: {{from_name}} <{{from_email}}>
   Phone: {{phone}}
   Service Requested: {{service}}
   
   Message:
   {{message}}
   
   ---
   This inquiry was submitted through aparajithalaw.co.in
   ```
3. Note the Template ID

### Step 4: Update JavaScript
Update these values in `js/script.js`:
```javascript
// Line 78: Replace with your Public Key
emailjs.init("YOUR_NEW_PUBLIC_KEY");

// Line 152: Replace with your Service ID and Template ID
emailjs.send('your_service_id', 'your_template_id', emailContent)
```

## 📧 Email Notifications

When the form works correctly, you'll receive emails like:

**Subject:** New Legal Consultation Request - Corporate Law

**From:** John Doe \<john@example.com\>  
**Phone:** +91-9876543210  
**Service Requested:** Corporate Law  

**Message:**  
I need help with company registration and legal compliance for my startup. Please advise on the process and fees.

---
This inquiry was submitted through aparajithalaw.co.in

## ✅ Current Configuration is Ready!

Your website is already properly configured. The contact form should work immediately once deployed!
