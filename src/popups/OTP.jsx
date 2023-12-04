import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import TextInput from '../components/TextInput';
import YellowButton from '../components/YellowButton';
import axios from 'axios';
import api from '../apiConfig';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HideInput from '../components/HideInput';

export default function LoginPopup(props) {
  const navigate = useNavigate();
  const { user, userType, login, logout } = useContext(AuthContext);
  const { onClose, open } = props;
  const [nic, setNic] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [accountSelect, setAccountSelect] = React.useState(0);

  const handleButtonClick = (goToAccount) => {
    setAccountSelect(goToAccount);
  };

  const handleClose = () => {
    onClose(true);
  };

  const handleNicChange = (newNic) => {
    setNic(newNic);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleLogin = () => {
    const data = {
      NIC: nic,
      password: password,
    };

    api
      .post('/user/login', data)
      .then((response) => {
        if (response.data.approved) {
          console.log('Login successful!', response.data);
          login('user');
          navigate('/account');
        } else {
          console.log('Login unsuccessful!', response.data);
        }
        onClose(true);
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          backgroundColor: 'black',
          margin: 0.1,
          padding: 0,
          boxShadow: 'none',
        }}
        alignItems={'center'}
        flex={'row'}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: 30,
            fontWeight: 600,
            padding: '0px 0px 20px 0px',
          }}
          fontFamily={'Inter'}
          align="center"
        >
          OTP Verification
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: 'white',
                fontSize: 18,
                fontWeight: 400,
                padding: '20px 70px',
              }}
              fontFamily={'Inter'}
            >
              Enter the OTP:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={'20px 0px'}>
              <TextInput onValueChange={handleNicChange} />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            padding: '20px',
            borderRadius: '20px',
            justifyContent: 'center',
            justifyItems: 'center',
            display: 'flex',
          }}
        >
          <YellowButton text="Verify" onClick={handleLogin} />
        </Box>
      </Box>
    </Dialog>
  );
}

LoginPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
