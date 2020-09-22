import React, { useState, useRef } from 'react';
import AboutDialog from '../AboutDialog/AboutDialog';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuContainer from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsDialog from '../SettingsDialog/SettingsDialog';
import Typography from '@material-ui/core/Typography';

export default function Menu() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button onClick={() => setMenuOpen(isOpen => !isOpen)} ref={anchorRef}>
        Settings
        <ExpandMoreIcon />
      </Button>
      <MenuContainer open={menuOpen} onClose={() => setMenuOpen(isOpen => !isOpen)} anchorEl={anchorRef.current}>
        <MenuItem onClick={() => setAboutOpen(true)}>
          <Typography variant="body1">About</Typography>
        </MenuItem>
        <MenuItem onClick={() => setSettingsOpen(true)}>
          <Typography variant="body1">Audio and Video Settings</Typography>
        </MenuItem>
      </MenuContainer>
      <AboutDialog
        open={aboutOpen}
        onClose={() => {
          setAboutOpen(false);
          setMenuOpen(false);
        }}
      />
      <SettingsDialog
        open={settingsOpen}
        onClose={() => {
          setSettingsOpen(false);
          setMenuOpen(false);
        }}
      />
    </>
  );
}
