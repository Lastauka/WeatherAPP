import React from 'react';

interface ITemperatureProps {
  value: number;
}

const Temperature: React.FC<ITemperatureProps> = (props) => {

  return <>{props.value}</>;
};

export default Temperature;
