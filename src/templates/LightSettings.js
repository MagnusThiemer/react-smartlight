
import { useState } from 'react';
import ColorPicker from '../components/ColorPicker';

import LightSlider from '../components/LightSlider';
import OnOffButton from '../components/OnOffButton';
import ThemePicker from '../components/ThemePicker';

const LightSettings = () => {

    return ( 
        <div className="bg-background-offwhite pb-10 w-full rounded-t-3xl relative">
            <OnOffButton />
            <LightSlider />
            <ColorPicker />
            <ThemePicker />
        </div>
     );
}
 
export default LightSettings;