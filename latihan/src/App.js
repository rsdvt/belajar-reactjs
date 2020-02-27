import React from 'react';
import InteraktifState from './HelloWorld';
import MenanganiEvent from './Event';
import AccessJson from './AccessJson'

function App() {
  return (
    <div>
      <InteraktifState nama="Ris" belakang="Davit" />
      <InteraktifState nama="Davit" belakang="Ari" />
      <InteraktifState nama="Ramdona" belakang="Wleee" />

      <MenanganiEvent />

      <AccessJson />
    </div>
  );
}

export default App;
