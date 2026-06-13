'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { PALETTE } from '@/theme/theme';

// ─── CONTACT CONFIGURATION ───────────────────────────────────────────────────
const OWNER_EMAIL = 'mihaliki21@gmail.com';           // ← YOUR EMAIL
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // ← FORMSPREE ID
// HOW TO CONNECT FORM:
//   Option A — Formspree: sign up at formspree.io, replace YOUR_FORM_ID above.
//   Option B — EmailJS: install @emailjs/browser, replace handleSubmit below.
// ─────────────────────────────────────────────────────────────────────────────

interface FormState { name: string; email: string; message: string; }

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <Box id="contact" component="section" sx={{ backgroundColor: PALETTE.parchmentDark }}>

      {/* ── Section header ─────────────────────────────────────────────── */}
      <Box sx={{ borderBottom: `1px solid ${PALETTE.linen}`, px: { xs: 3, md: 6 }, py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" sx={{ color: PALETTE.inkBrown }}>Contact</Typography>
          <Box sx={{ flex: 1, height: '1px', backgroundColor: PALETTE.linen }} />
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {/* Heading */}
        <Box sx={{ mb: { xs: 7, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3.2rem' }, color: PALETTE.inkBrown, mb: 2 }}>
            Let&apos;s Create Something Timeless
          </Typography>
          <Typography variant="body1" sx={{ color: PALETTE.oliveBrown, maxWidth: 460 }}>
            Whether you have a specific vision or just a feeling you want to capture —
            reach out. I&apos;d love to hear your story.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 10 }}>
          {/* Contact details */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { icon: <EmailOutlinedIcon fontSize="small" />, label: 'Email', value: OWNER_EMAIL, href: `mailto:${OWNER_EMAIL}` },
              ].map((item) => (
                <Box key={item.label} sx={{ borderTop: `1px solid ${PALETTE.linen}`, pt: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Box sx={{ color: PALETTE.mutedTaupe }}>{item.icon}</Box>
                    <Typography variant="overline" sx={{ color: PALETTE.mutedTaupe, fontSize: '0.6rem' }}>
                      {item.label}
                    </Typography>
                  </Box>
                  <Typography
                    component="a"
                    href={item.href}
                    variant="body2"
                    sx={{ color: PALETTE.inkBrown, textDecoration: 'none', '&:hover': { color: PALETTE.gold }, transition: 'color 0.2s' }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}

              <Box sx={{ borderTop: `1px solid ${PALETTE.linen}`, pt: 3, mt: 2 }}>
                <Typography
                  variant="caption"
                  sx={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: PALETTE.oliveBrown, lineHeight: 1.7, display: 'block' }}
                >
                  &ldquo;Availability is limited to ensure every project receives
                  full attention. Book early.&rdquo;
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box component="form" id="contact-form" onSubmit={handleSubmit} noValidate>
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
                    fullWidth required multiline rows={7}
                    placeholder="Tell me about your project, the mood you have in mind, or anything you'd like to share..."
                  />
                </Grid>
                {status === 'sent' && (
                  <Grid size={{ xs: 12 }}>
                    <Alert severity="success" sx={{ borderRadius: 0, backgroundColor: 'rgba(44,42,30,0.07)', color: PALETTE.inkBrown, border: `1px solid ${PALETTE.linen}` }}>
                      Message sent! I&apos;ll get back to you within 48 hours.
                    </Alert>
                  </Grid>
                )}
                {status === 'error' && (
                  <Grid size={{ xs: 12 }}>
                    <Alert severity="error" sx={{ borderRadius: 0 }}>
                      Something went wrong. Email me directly at{' '}
                      <a href={`mailto:${OWNER_EMAIL}`} style={{ color: PALETTE.inkBrown }}>{OWNER_EMAIL}</a>
                    </Alert>
                  </Grid>
                )}
                <Grid size={{ xs: 12 }}>
                  <Button id="contact-submit-btn" type="submit" variant="contained" disabled={status === 'sending'}>
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
