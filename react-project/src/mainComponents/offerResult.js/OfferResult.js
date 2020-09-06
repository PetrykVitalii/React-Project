import React from 'react';
import './OfferResult.css'

function OfferResult ({priceResult,timeResult}){
    return(
        <article className="order__result result">
            <div className="result__price">{priceResult} грн</div>
            {timeResult ? <div className="result__time"><p className='result__info'>Термін виконання:</p><p className='result__info'>{timeResult}</p></div> : null}
            <div className="check result__check">
              <button type="submit" className="check__button">
                Замовити
              </button>
            </div>
          </article>
    )
}

export default OfferResult