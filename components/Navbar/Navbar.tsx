'use client';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { PALETTE } from '@/theme/theme';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Scroll trigger — AppBar becomes opaque after scrolling past 80px
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 80 });

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled
            ? `rgba(15, 10, 6, 0.95)`
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${PALETTE.mediumBrown}`
            : '1px solid transparent',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box
            component="a"
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover .logo-icon': { color: PALETTE.softGold },
            }}
          >
            <CameraAltOutlinedIcon
              className="logo-icon"
              sx={{ color: PALETTE.softGold, fontSize: 28, transition: 'color 0.3s' }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  lineHeight: 1.1,
                  color: PALETTE.cream,
                  letterSpacing: '0.02em',
                }}
              >
                Michal Studio
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: PALETTE.softGold,
                  letterSpacing: '0.18em',
                  fontSize: '0.58rem',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                Photography
              </Typography>
            </Box>
          </Box>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                sx={{
                  color: PALETTE.warmGray,
                  fontWeight: 400,
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  '&:hover': {
                    color: PALETTE.cream,
                    backgroundColor: 'rgba(201, 168, 76, 0.08)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="outlined"
              size="small"
              onClick={() => scrollTo('#contact')}
              sx={{
                ml: 1,
                borderColor: PALETTE.softGold,
                color: PALETTE.softGold,
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                px: 2.5,
                py: 0.75,
                '&:hover': {
                  borderColor: PALETTE.cream,
                  color: PALETTE.cream,
                  backgroundColor: 'rgba(201, 168, 76, 0.1)',
                },
              }}
            >
              Book Now
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            id="navbar-menu-btn"
            edge="end"
            color="inherit"
            aria-label="open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: PALETTE.cream }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              backgroundColor: PALETTE.filmBlack,
              borderLeft: `1px solid ${PALETTE.mediumBrown}`,
            },
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: PALETTE.cream,
              fontSize: '1.1rem',
              fontWeight: 700,
            }}
          >
            Michal Studio
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: PALETTE.warmGray }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ borderBottom: `1px solid ${PALETTE.mediumBrown}`, mb: 2 }} />

        <List>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                onClick={() => scrollTo(link.href)}
                sx={{
                  px: 3,
                  py: 1.5,
                  '&:hover': { backgroundColor: 'rgba(201, 168, 76, 0.08)' },
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: {
                        color: PALETTE.warmGray,
                        fontFamily: '"Lato", sans-serif',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        '&:hover': { color: PALETTE.cream },
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ px: 3, mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => scrollTo('#contact')}
            sx={{ py: 1.5 }}
          >
            Book a Session
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
