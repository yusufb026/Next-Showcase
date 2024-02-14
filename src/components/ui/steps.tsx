import * as React from 'react';


const steps = ["Identification de l'élève", 'Identification du père', 'Identification du mère'];

export default function Steps({ step }: { step: any }) {
  return (
    <div 
    //sx={{ width: '100%', color: 'red', marginY: '20px' }}
    >
      <div 
      //activeStep={step} alternativeLabel
      >
        {steps.map((label) => (
          <div key={label} color="red">
            <div>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
