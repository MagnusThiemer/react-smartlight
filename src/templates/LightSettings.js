
import { useState } from 'react';

import LightSlider from '../components/LightSlider';
import OnOffButton from '../components/OnOffButton';

const LightSettings = () => {

    return ( 
        <div className="bg-background-offwhite h-28 w-full rounded-t-3xl relative">
            <OnOffButton />
            <LightSlider />

        </div>
     );
}
 
export default LightSettings;