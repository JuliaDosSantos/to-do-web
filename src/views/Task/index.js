import React, {useState, useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from  '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task() {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [tittle, setTittle] = useState();
    const [description, setDescripition] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState();
 
    async function lateVerify(){
      await api.get(`/task/filter/late/11:11:111:111:111:11`)
      .then(response =>{
        setLateCount(response.data.length)
        console.log(response);
      })
    }

  useEffect(() => {
    lateVerify();
  }, [])

  return (
    <S.Container>
        <Header lateCount = {lateCount} />

      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 && 
              <button type="button" onClick = {() => setType(index)}>
                <img src={icon} alt = "Tipo da tarefa"
                className = {type && type != index && 'inative'}/>
              </button>
            ))
          }

        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder = "Título da tarefa..." onChange={e => setTittle(e.target.value)} value={tittle}/>
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows = {5} placeholder = "Detalhes da tarefa..." onChange={e => setDescripition(e.target.value)} value={description} />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder = "Título da tarefa..." onChange={e => setDate(e.target.value)} value={date}/>
          <img src = {iconCalendar} alt = "Calendário"/>
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder = "Título da tarefa..." onChange={e => setHour(e.target.value)} value={hour}/>
          <img src = {iconClock} alt = "Relógio"/>
        </S.Input>
        
        <S.Options>
          <div>
            <input type = "checkbox" checked={done} onChange = {() => setDone(!done)}/>
            <span>CONCLUÍDO</span>
          </div>
          <button type = "button">EXCLUIR</button>
        </S.Options>

        <S.Save>
          <button type = "button">SALVAR</button>
        </S.Save>

      </S.Form>

        <Footer/>
    </S.Container>
  )
}

export default Task;