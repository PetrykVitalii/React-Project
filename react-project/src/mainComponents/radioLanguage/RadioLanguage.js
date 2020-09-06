import React from 'react';
import './RadioLanguage.css'

function RadioLanguage({checkLang}){
    return(
        <div className='choose-language section'>
            <label>
                <input
                  value="ukr"
                  onChange={checkLang}
                  name="lang"
                  className="choose-language__radio"
                  type="radio"
                ></input>
                <span>Українська</span>
              </label>
              <label>
                <input
                  value="rus"
                  onChange={checkLang}
                  name="lang"
                  className="choose-language__radio"
                  type="radio"
                ></input>
                <span>Російська</span>
              </label>
              <label>
                <input
                  value="eng"
                  onChange={checkLang}
                  name="lang"
                  className="choose-language__radio"
                  type="radio"
                ></input>
                <span>Англійська</span>
              </label>
        </div>
    )
}

export default RadioLanguage