'use client';

import { useState } from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { PALETTE } from '@/theme/theme';

const NAV_LINKS = [
  { label: 'About', href: '#about', },
  { label: 'Portfolio', href: '#portfolio', },
  { label: 'Contact', href: '#contact', },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(234,228,217,0.97)',
          borderBottom: scrolled ? `1px solid ${PALETTE.linen}` : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'background-color 0.4s ease, border-color 0.4s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 3, md: 6 }, py: 1.5, minHeight: '64px !important' }}>
          {/* Logo */}
          <Box
            component="a"
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Image
              src="/assets/logo/app-logo-no-bg.png"
              alt="Kanta Photography logo"
              width={120}
              height={40}
              style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
              priority
            />
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
            {NAV_LINKS.map((link) => (
              <Box
                key={link.href}
                component="button"
                onClick={() => scrollTo(link.href)}
                sx={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'capitalize',
                  color: PALETTE.inkBrown,
                  opacity: 0.8,
                  transition: 'opacity 0.2s',
                  '&:hover': { opacity: 1 },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            id="navbar-menu-btn"
            edge="end"
            aria-label="open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: PALETTE.inkBrown }}
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
              width: 260,
              backgroundColor: PALETTE.parchment,
              borderLeft: `1px solid ${PALETTE.linen}`,
            },
          },
        }}
      >
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image
            src="/assets/logo/app-logo-no-bg.png"
            alt="Kanta Photography logo"
            width={100}
            height={34}
            style={{ objectFit: 'contain', height: '34px', width: 'auto' }}
          />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: PALETTE.inkBrown }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box sx={{ borderBottom: `1px solid ${PALETTE.linen}`, mb: 2 }} />
        <List>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                onClick={() => scrollTo(link.href)}
                sx={{ px: 3, py: 1.5, '&:hover': { backgroundColor: PALETTE.parchmentDark } }}
              >
                <Typography sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400, fontSize: '0.65rem', letterSpacing: '0.15em',
                  textTransform: 'capitalize',
                  color: PALETTE.inkBrown
                }}>
                  {link.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
