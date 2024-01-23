import React from 'react';
import * as S from './styles';

import iconDefault from '../../assets/default.png';

function TaskCard() {
  return (
    <S.Container>
      <S.TopCard>
        <img src={iconDefault} alt="Icone da Tarefa"/>
        <h1>Título da Tarefa</h1>
      </S.TopCard>
      <S.BottomCard>
        <strong>17/10/2020</strong>
        <span>10:00</span>
      </S.BottomCard>
    </S.Container>
  )
   
}

export default TaskCard;