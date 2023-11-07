import React from 'react';
import '../style.scss';
import { useState, useEffect } from 'react';
import { getStreak } from '../Utils';

const You = () => {
    const [translation, setTranslation] = useState(localStorage.getItem("translation") || 114);

    useEffect(() => {
        localStorage.setItem("translation", translation);
    }, [translation]);

  return (
    <div className='you'>
        <label>Select a translation:
            <select name="translation" id="translation" value={ translation } onChange={(e) => setTranslation(e.target.value)}>
                <option value="1">King James Version</option>
                <option value="114">New King James Version</option> 
                <option value="111">New International Version</option> 
                <option value="116">New Living Translation</option> 
                <option value="59">English Standard Version</option> 
            </select>
        </label>

        <br /> <br />

        {/* Create a section where it sayas the perosn's current streak based on the complete */}
        <h2>Current Streak: {getStreak()}</h2>

    </div>
  );
};

export default You;