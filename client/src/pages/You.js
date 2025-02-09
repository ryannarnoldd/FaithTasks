import React from 'react';
import '../style.scss';
import { useState, useEffect } from 'react';
import { getStreak } from '../Utils';

const You = () => {
    const [translation, setTranslation] = useState(localStorage.getItem("translation") || 114);

    // const translations = {
    //     1: "KJV",
    //     59: "ESV",
    //     111: "NIV",
    //     114: "NKJV",
    //     116: "NLT"
    // }

    useEffect(() => {
        localStorage.setItem("translation", translation);
    }, [translation]);    

  return (
    <div className='you'>
        <label>Select a translation:
            <select name="translation" id="translation" value={ translation } onChange={(e) => setTranslation(e.target.value)}>
                <option value="59">English Standard Version</option>
                <option value="1">King James Version</option>
                <option value="114">New King James Version</option>
                <option value="111">New International Version</option>
                <option value="116">New Living Translation</option>
                <option value="97">The Message</option>
            </select>
        </label>

        <br /> <br />

        <h1 id="streak">Streak: { getStreak() }</h1>
        <br /> <br />



        



    </div>
  );
};

export default You;