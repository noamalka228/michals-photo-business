'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SendIcon from '@mui/icons-material/Send';
import { PALETTE } from '@/theme/theme';

// ─────────────────────────────────────────────────────────────────────────────
//  CONTACT CONFIGURATION — replace these values with your own:
// ─────────────────────────────────────────────────────────────────────────────
const OWNER_EMAIL = 'owner@example.com';           // ← YOUR EMAIL ADDRESS HERE
const OWNER_PHONE = '+1 (555) 000-0000';            // ← YOUR PHONE (or remove)
const OWNER_INSTAGRAM = '@michal.studio';            // ← YOUR INSTAGRAM HANDLE
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // ← FORMSPREE ID

// HOW TO ENABLE THE CONTACT FORM:
// Option A — Formspree (recommended for static/Next.js sites):
//   1. Sign up at https://formspree.io (free tier available)
//   2. Create a new form and copy your Form ID
//   3. Replace 'YOUR_FORM_ID' in FORMSPREE_ENDPOINT above
//   4. The form action will automatically POST to Formspree
//
// Option B — EmailJS (client-side, no backend needed):
//   1. Sign up at https://emailjs.com
//   2. Install: npm install @emailjs/browser
//   3. Replace the handleSubmit function below with EmailJS logic
//
// Option C — Mailto fallback (already included in the email link below)
// ─────────────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const ContactDetail = ({
    icon,
    label,
    value,
    href,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
  }) => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
      <Box sx={{ color: PALETTE.softGold, mt: 0.2 }}>{icon}</Box>
      <Box>
        <Typography variant="caption" sx={{ color: PALETTE.dustyGray, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.65rem', display: 'block' }}>
          {label}
        </Typography>
        {href ? (
          <Typography
            component="a"
            href={href}
            variant="body2"
            sx={{ color: PALETTE.cream, textDecoration: 'none', '&:hover': { color: PALETTE.softGold }, transition: 'color 0.2s' }}
          >
            {value}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ color: PALETTE.cream }}>{value}</Typography>
        )}
      </Box>
    </Stack>
  );

  return (
    <Box id="contact" component="section" sx={{ backgroundColor: PALETTE.darkBrown, py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography variant="overline" sx={{ color: PALETTE.softGold, letterSpacing: '0.3em', fontSize: '0.7rem', display: 'block', mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="h2" sx={{ color: PALETTE.cream, fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
            Let&apos;s Create Something{' '}
            <Box component="em" sx={{ color: PALETTE.softGold }}>Timeless</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: PALETTE.warmGray, maxWidth: 480, mx: 'auto', lineHeight: 1.8 }}>
            Whether you have a specific vision or just a feeling you want to capture — reach out. We&apos;d love to hear your story.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 10 }}>
          {/* Contact details */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={4}>
              <ContactDetail icon={<EmailOutlinedIcon />} label="Email" value={OWNER_EMAIL} href={`mailto:${OWNER_EMAIL}`} />
              <Divider sx={{ borderColor: PALETTE.mediumBrown }} />
              <ContactDetail icon={<InstagramIcon />} label="Instagram" value={OWNER_INSTAGRAM} href={`https://instagram.com/${OWNER_INSTAGRAM.replace('@', '')}`} />
              <Divider sx={{ borderColor: PALETTE.mediumBrown }} />
              <ContactDetail icon={<PhoneOutlinedIcon />} label="Phone" value={OWNER_PHONE} href={`tel:${OWNER_PHONE.replace(/\D/g, '')}`} />
              <Box sx={{ mt: 2, p: 3, borderRadius: 2, border: `1px solid ${PALETTE.mediumBrown}`, backgroundColor: 'rgba(15,10,6,0.3)' }}>
                <Typography variant="body2" sx={{ color: PALETTE.warmGray, lineHeight: 1.8, fontStyle: 'italic' }}>
                  &ldquo;Availability is limited to ensure every project receives full attention and care. Book early.&rdquo;
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Contact form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              component="form"
              id="contact-form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, border: `1px solid ${PALETTE.mediumBrown}`, backgroundColor: 'rgba(15,10,6,0.3)' }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField id="contact-name" label="Your Name" name="name" value={form.name} onChange={handleChange} fullWidth required autoComplete="name" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField id="contact-email" label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} fullWidth required autoComplete="email" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    id="contact-message"
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    multiline
                    rows={6}
                    placeholder="Tell me about your project, the mood you have in mind, or anything you'd like to share..."
                  />
                </Grid>

                {status === 'sent' && (
                  <Grid size={{ xs: 12 }}>
                    <Alert severity="success" sx={{ backgroundColor: 'rgba(201,168,76,0.15)', color: PALETTE.softGold, border: `1px solid ${PALETTE.softGold}` }}>
                      Message sent! I&apos;ll get back to you within 48 hours.
                    </Alert>
                  </Grid>
                )}
                {status === 'error' && (
                  <Grid size={{ xs: 12 }}>
                    <Alert severity="error" sx={{ backgroundColor: 'rgba(200,50,50,0.15)', border: '1px solid rgba(200,50,50,0.4)' }}>
                      Something went wrong. Please email directly at{' '}
                      <a href={`mailto:${OWNER_EMAIL}`} style={{ color: PALETTE.softGold }}>{OWNER_EMAIL}</a>
                    </Alert>
                  </Grid>
                )}

                <Grid size={{ xs: 12 }}>
                  <Button id="contact-submit-btn" type="submit" variant="contained" size="large" disabled={status === 'sending'} endIcon={<SendIcon />} sx={{ minWidth: 200 }}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
