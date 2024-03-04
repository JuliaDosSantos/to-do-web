import React, {useState, useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from  '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task({match}) {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescripition] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:111:111:111:11');
 
    async function lateVerify(){
      await api.get(`/task/filter/late/11:11:111:111:111:11`)
      .then(response =>{
        setLateCount(response.data.length)
        console.log(response);
      })
    }

    async function LoadTaskDetails(){
      console.log(match)
      await api.get(`/task/${match.params.id}`)
      .then(response => {
        setType(response.data.type)
        setTitle(response.data.title)
        setDescripition(response.data.description)
        setDate(new Date(response.data.when))
        setHour(new Date(response.data.when))
      })
    }

    async function Save(){
      await api.post('/task', {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() =>
        alert('TAREFA CADASTRADA COM SUCESSO')
      )
    }
  

  useEffect(() => {
    lateVerify();
    LoadTaskDetails();
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
          <input type="text" placeholder = "Título da tarefa..." onChange={e => setTitle(e.target.value)} value={title}/>
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
          <button type = "button" onClick={Save}>SALVAR</button>
        </S.Save>

      </S.Form>

        <Footer/>
    </S.Container>
  )
}

export default Task;