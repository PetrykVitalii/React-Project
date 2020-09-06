import React, { useEffect } from "react";
import "./Offer.css";
import OfferResult from "../offerResult.js/OfferResult";

function Offer() {
  const [radio, setRadio] = React.useState(false);
  const [area, setArea] = React.useState("");
  const [file, setFile] = React.useState("");
  const [strLength, setStrLength] = React.useState(0);
  const [timeResult, setTimeResult] = React.useState('');
  const [priceResult, setPriceResult] = React.useState('0,00');
  const fileHtml = file ? <div className='area__info info'><p className='info__name'>{file.name}</p><p className='info__length'>Количество символов: </p><p onClick={()=>setFile('')} className='info__back'>завантажте файл</p></div> : null

  const detail = {
    language: {
      eng: {
        minPrice: 120,
        timeForHour: 333,
        priceForOne:0.12
      },
      ukr: {
        minPrice: 50,
        timeForHour: 1333,
        priceForOne:0.05
      },
      rus: {
        minPrice: 50,
        timeForHour: 1333,
        priceForOne:0.05
      },
    },
    time: {
      startWork: 10,
      endWork: 19,
      minTimeForWork:60,
      addTime:30,
    },
    percentage:{
      increase: 1.2,
      normal: 1
    }
  }

  useEffect(()=>{
    if(area === ''){
      setPriceResult('0,00')
      setTimeResult('')
    }
    if (radio && area) {
      let finishDate = []
      let timeForWork = 0
      const date = new Date()
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const week = date.getDay();
      const percentage = detail.percentage.normal
      let changeWeek = week
      let changeDay = day
      const hours = (() => (date.getHours() > detail.time.endWork || date.getHours() <  detail.time.startWork || week === 6 || week === 0) ?  detail.time.endWork : date.getHours())()
      const minutes = (() => (date.getHours() === detail.time.endWork || week === 6 || week === 0) ? 0 : date.getMinutes())()

      
      detail.language[radio].priceForOne * percentage * strLength < detail.language[radio].minPrice
      ? setPriceResult(`${detail.language[radio].minPrice}.00`)
      : setPriceResult((detail.language[radio].priceForOne *  percentage * strLength).toFixed(2))

      strLength * percentage / detail.language[radio].timeForHour * 60 < detail.time.minTimeForWork
      ? timeForWork = detail.time.minTimeForWork/ 60 
      : timeForWork = detail.time.addTime / 60 + (strLength * percentage) / detail.language[radio].timeForHour;

      let hoursForWork = Math.floor(minutes / 60 + timeForWork);
      hoursForWork = (() => {
        if ((minutes + timeForWork * 60) % 60 > 30) {
          finishDate[4] = `00`;
          return ++hoursForWork;
        } else {
          finishDate[4] = `30`;
          return hoursForWork;
        }
      })()

      hoursForWork = calculateHours(hoursForWork)
      finishDate[3] = String(hoursForWork);
      getDay()
      finishDate[0] = String((new Date(year,month,changeDay)).getDate()).padStart(2,'0');
      finishDate[1] = String((new Date(year,month,changeDay)).getMonth() + 1).padStart(2,'0');
      finishDate[2] = String((new Date(year,month,changeDay)).getFullYear());
      finishDate = `${finishDate[0]}.${finishDate[1]}.${finishDate[2]} ${finishDate[3]}:${finishDate[4]}`
      setTimeResult(finishDate)

      function getDay(){
        if(changeWeek > 6){
          changeDay += 2
          changeWeek -= 5
          getDay()
        }
        else if(changeWeek === 0){
          changeDay += 1
        }
        else if(changeWeek === 6){
          changeDay += 2
        }
      }

      function calculateHours(hoursForWork){
        if (hoursForWork + hours < detail.time.endWork) {
          hoursForWork = hoursForWork + hours;
        } else {
          if(changeWeek !== 6){
            changeDay++;
            changeWeek++;
          }
          hoursForWork = hoursForWork + hours - detail.time.endWork
          hoursForWork = getHours(hoursForWork,finishDate[4]);
        }
        return hoursForWork
      }

      function getHours(hoursForWork,min) {
        if (hoursForWork + detail.time.startWork > detail.time.endWork) {
          hoursForWork = hoursForWork - detail.time.endWork + detail.time.startWork;
          changeDay++;
          changeWeek++;
          return getHours(hoursForWork, min);
        } else if ((detail.time.endWork - hoursForWork - detail.time.startWork === 0)) {
          if( min !== '30'){
            return detail.time.endWork
          }
          else{
            changeDay++;
            changeWeek++;
            return detail.time.startWork
          }
        } else {
          return hoursForWork + detail.time.startWork;
        }
      }
    }
  })


  function checkData(e) {
    setArea(e.target.value);
    setStrLength(e.target.value.length);
  }
    
  function checkLang(e) {
    setRadio(e.target.value);
  }

  function checkFile(e){
    setFile(e.target.files[0])
    e.persist()
  }

  return (
    <main className="main">
      <div className="main__wrap wrap">
        <form className="order main__wrap wrap">
          <article className="order__detail">
            <section className="section">
              <h3 className="section__title">ЗАМОВИТИ РЕДАГУВАННЯ</h3>
              <p className="section__info">
                Виправимо всі помилки, приберемо всі дурниці, перефразуємо
                невдалі місця, але сильно текст не переписуватимемо. Зайвих
                виправлень не буде.
                <a className="section__link" href="#">
                  Детальніше про редагування
                </a>
              </p>
              <input
                required
                className="section__input"
                placeholder="Ваша ел. пошта"
                type="email"
              ></input>
              <input
                required
                className="section__input"
                placeholder="Ваше імя"
                type="text"
              ></input>
              <div className='area'>
                {!area ? <label className='area__label'>Завантажте файл<input type='file' className='area__file' onChange={checkFile} ></input></label> :null}
              <textarea
                onInput={checkData}
                className="area__textarea"
                placeholder="Уведіть текст або"
              ></textarea>
              {fileHtml}
              </div>
              <p className='section__str-length'>{strLength}</p>
            </section>
            <section className="section">
              <h4 className="section__title">Мова</h4>
              <label>
                <input
                  value="ukr"
                  onChange={checkLang}
                  name="lang"
                  className="section__lang"
                  type="radio"
                ></input>
                <span>Українська</span>
              </label>
              <label>
                <input
                  value="rus"
                  onChange={checkLang}
                  name="lang"
                  className="section__lang"
                  type="radio"
                ></input>
                <span>Російська</span>
              </label>
              <label>
                <input
                  value="eng"
                  onChange={checkLang}
                  name="lang"
                  className="section__lang"
                  type="radio"
                ></input>
                <span>Англійська</span>
              </label>
              <input
                type="text"
                className="section__input"
                placeholder="Стислий коментар або покликання"
              ></input>
            </section>
          </article>
          <OfferResult priceResult={priceResult} timeResult={timeResult}></OfferResult>
        </form>
      </div>
    </main>
  );
}

export default Offer;
