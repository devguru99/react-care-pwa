import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

// @third-party
import { motion } from 'framer-motion';
import { Skeleton } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface HeroProps {
  loading?: boolean;
}

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: theme.palette.grey[700],
  }),
}));

export default function Hero(props: HeroProps) {
  const { loading = false } = props;

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '100%' } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.215, 0.61, 0.355, 1]
            }}
          >
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                flexWrap: 'wrap',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="inherit"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  background: 'linear-gradient(30deg, #183871, #88D8FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  ...theme.applyStyles('dark', {
                    background: 'linear-gradient(30deg, #183871, #88D8FF)', // Same gradient for dark mode
                  }),
                })}
              >
                Care Beyond ICU
              </Typography>
              &nbsp;A Virtual Road To Recovery
            </Typography>
          </motion.div>
        </Stack>

          <StyledBox id="video"
            sx={{
              marginTop: '20px !important',
              marginBottom: '20px',
           }}
          >
            {loading ? <Skeleton variant="rectangular"
              width={1150}
              height={698}
            >
                <video
                  src="/hero1.mp4"
                  autoPlay
                  muted
                  loop
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Ensures the video covers the entire box
                  }}
                />
              </Skeleton> : (
              <video
              src="/hero1.mp4"
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensures the video covers the entire box
              }}
            />
          )}
            
          </StyledBox>

        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '90%' } }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: '100%',
            }}
          >
            At Care Beyond ICU, we believe recovery doesn&apos;t end when you leave the hospital. That&apos;s why&nbsp; 
            <Typography
              component="span"
              sx={{
                color: '#183871',
                fontWeight: 700,
              }}
            >
              we provide a range of personalized services designed to meet your unique needs and guide you toward a full and healthy recovery.&nbsp;
            </Typography>
            Our team works closely with you to create a customized care plan, focusing on&nbsp;
            <Typography
              component="span"
              sx={{
                color: '#183871',
                fontWeight: 700,
              }}
            >
              your long-term health and well-being.&nbsp;
            </Typography>
            By offering tailored support and ongoing follow-up, we aim to help&nbsp;
            <Typography
              component="span"
              sx={{
                color: '#183871',
                fontWeight: 700,
              }}
            >
              you regain your strength and prevent unnecessary ICU readmissions.&nbsp;
            </Typography>
            With Care Beyond ICU, you can move forward with confidence, knowing you have&nbsp;
            <Typography
              component="span"
              sx={{
                color: '#183871',
                fontWeight: 700,
              }}
            >
              a trusted partner in your journey to recovery.&nbsp;
            </Typography>
            Helping you&nbsp;
            <Typography
              component="span"
              sx={{
                color: '#183871',
                fontWeight: 700,
              }}
            >
              recover, rebuild, and thrive.&nbsp;
            </Typography>
            Recovery doesn&apos;t end at discharge—it&apos;s where it begins.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '500px' } }}
          >
            <InputLabel htmlFor="name-hero" sx={visuallyHidden}>
              Name
            </InputLabel>
            <TextField
              id="name-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your Name"
              placeholder="Your Name"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your Name',
                },
              }}
            />
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                },
              }}
            />
            <Button
              component={NavLink} 
              to="/contact"
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
            >
              Get Started Today
            </Button>
          </Stack>
          
        </Stack>
        
      </Container>
    </Box>
  );
}
