import React from 'react';
import './InputFile.css'

function InputFile({file,addFile}){
    const fileHtml = file ? <div className='area__info info'><p className='info__name'>{file.name}</p><p className='info__length'>Количество символов: </p><p onClick={()=>addFile()} className='info__back'>завантажте файл</p></div> : null

    return(
        <div>{fileHtml}</div> 
    )
}

export default InputFile