'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { PALETTE } from '@/theme/theme';

const OWNER_EMAIL = process.env.NEXT_PUBLIC_OWNER_EMAIL;

export default function Contact() {
  const mailToLink = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent("Photography Inquiry")}&body=${encodeURIComponent("Hello Michal,\n\nI would love to chat about a potential project.\n\nMy name is: \nProject details: \n")}`;

  return (
    <Box id="contact" component="section" sx={{ backgroundColor: PALETTE.parchmentDark }}>
      {/* ── Section header ─────────────────────────────────────────────── */}
      <Box sx={{ borderBottom: `1px solid ${PALETTE.linen}`, px: { xs: 3, md: 6 }, py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" sx={{ color: PALETTE.inkBrown }}>Contact</Typography>
          <Box sx={{ flex: 1, height: '1px', backgroundColor: PALETTE.linen }} />
        </Box>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3.2rem' }, color: PALETTE.inkBrown, mb: 3 }}>
            Let&apos;s Create Something Timeless
          </Typography>
          <Typography variant="body1" sx={{ color: PALETTE.oliveBrown, mx: 'auto', maxWidth: 460 }}>
            Whether you have a specific vision or just a feeling you want to capture —
            reach out. I&apos;d love to hear your story.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Button
            component="a"
            href={mailToLink}
            variant="contained"
            startIcon={<EmailOutlinedIcon />}
            sx={{ px: { xs: 4, md: 6 }, py: 2, fontSize: '0.9rem' }}
          >
            Send an Email
          </Button>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ color: PALETTE.mutedTaupe, mb: 2 }}>
              {OWNER_EMAIL}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: PALETTE.oliveBrown,
              }}
            >
              &ldquo;Availability is limited to ensure every project receives full attention. Book early.&rdquo;
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
