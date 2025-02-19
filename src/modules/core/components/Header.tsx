import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../assets/images/logo.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect, useState } from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';

export const Header = () => {
  const [textColor, setTextColor] = useState("inherit");
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const color = useSelector((state: RootState) => state.color.color); // Selecting the inputed color

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  useEffect(() => {
    if(color === "#FFFFFF") {
      setTextColor("secondary"); // Example of adapting text to the background in order to be visible
    } else {
      setTextColor("inherit"); // If background is not that bright text can remain default
    }
  }, [color]);
  
  //todo Refactor the MUI code, it takes to much lines

    return (
      <Box sx={{ flexGrow: 1 }}>
        {/* Background gets set to the color that has been inputed */}
      <AppBar position="static" sx={{ alignItems: "center", backgroundColor: color }}> 
        <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <IconButton
                  size="large"
                  edge="start"
                  color={textColor}
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  {...bindTrigger(popupState)}
                >
                  <MenuIcon />
                </IconButton>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography sx={{ p: 2 }}>This content is currently unavailable.</Typography>
                </Popover>
              </div>
            )}
          </PopupState>
          <Box component="img" src={logo} alt="Logo" sx={{ width: 100, height: "auto" }} />
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Button 
                  aria-describedby={id} 
                  type="button" 
                  onClick={handleClick} 
                  color={textColor}
                  {...bindTrigger(popupState)}
                >
                  Login
                </Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography sx={{ p: 2 }}>This content is currently unavailable.</Typography>
                </Popover>
              </div>
            )}
          </PopupState>
        </Toolbar>
      </AppBar>
    </Box>
    )
}