'use client'
import { useEffect } from 'react';

import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

function valuetext(value) {
  return `${value}`;
}
const PrettoSlider = styled(Slider)({
    color: '#6CBDCD',
    height: 16,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 30,
      width: 30,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.6,
      fontSize: 26,
      fontweight: 600,
      background: 'unset',
      padding: 0,
      width: 45,
      height: 45,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#4682B4',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
export default function DiscreteSlider() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 pt-32   ">
        <div className="w-2/5 flex flex-col items-center space-y-0 pb-48 pr-8 mr-10 ">
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 pb-10">Breathe Cycle Settings</h1>
        <div className="w-5/6 h-5/6 "> 
          <dotlottie-player
            src="https://lottie.host/f554e50d-6291-421f-8e13-e8b6aa02c0ac/zBdTwuBX1C.json"
            background="transparent"
            speed="1"
            className="w-full h-full"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-lg rounded-2xl ">
        <div className="w-96">
          <p className="text-4xl pb-6 font-semibold">Reps</p>
          <PrettoSlider
            className="mb-6"
            defaultValue={5}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={1}
            marks
            min={1}
            max={8}
          />

          <p className="text-4xl pb-6 font-semibold">Inhale</p>
          <PrettoSlider
            className="mb-6"
            defaultValue={4}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={1}
            marks
            min={1}
            max={8}
          />

          <p className="text-4xl pb-6 font-semibold">Hold</p>
          <PrettoSlider
            className="mb-6"
            defaultValue={7}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={1}
            marks
            min={1}
            max={8}
          />

          <p className="text-4xl pb-6 font-semibold">Exhale</p>
          <PrettoSlider
            defaultValue={8}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={1}
            marks
            min={1}
            max={8}
          />
        </div>
      </div>
    </div>
  );
}
