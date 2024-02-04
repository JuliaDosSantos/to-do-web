import React from 'react';
import * as S from './styles';

import iconDefault from '../../assets/default.png';

function TaskCard({type, title, date, hour}) {
  return (
    <S.Container>
      <S.TopCard>
        <img src={iconDefault} alt="Icone da Tarefa"/>
        <h3>Título da Tarefa</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>17/10/2020</strong>
        <span>10:00</span>
      </S.BottomCard>
    </S.Container>
  )
   
}

export default TaskCard;