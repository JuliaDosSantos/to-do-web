import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

import api from '../../services/api';

function Header({clickNotification}) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:111:111:111:11`)
    .then(response =>{
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify();
  })

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RighSide>
        <Link to="/">INÍCIO</Link>
        <span className="dividir" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="dividir" />
        <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
        {
          lateCount &&
          <>
            <span className="dividir" />
            <button onClick={clickNotification} id="notification">
              <img src={bell} alt="Notificação" />
              <span>{lateCount}</span>
            </button>
          </>
        }
      </S.RighSide>
    </S.Container>
  )
   
}

export default Header;