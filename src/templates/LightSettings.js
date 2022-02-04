
import { useState } from 'react';
import ColorPicker from '../components/ColorPicker';

import LightSlider from '../components/LightSlider';
import OnOffButton from '../components/OnOffButton';

const LightSettings = () => {

    return ( 
        <div className="bg-background-offwhite pb-10 w-full rounded-t-3xl relative">
            <OnOffButton />
            <LightSlider />
            <ColorPicker />
        </div>
     );
}
 
export default LightSettings;