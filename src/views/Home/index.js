import React, {useState, useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from  '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/11:11:111:111:111:11`)
        .then(response=> {
          console.log('teste');
          console.log(response);
            setTasks(response.data);
        })
    
  }

  useEffect(() => {
    loadTasks();
  }, [filterActived])

  return (
    <S.Container>
     <Header/>
     
     <S.FilterArea>
       <button type="button" onClick = {() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived =='all'}/>
       </button>

       <button type="button" onClick = {() => setFilterActived("today")}> 
         <FilterCard title="Hoje" actived={filterActived =='today'}/>
       </button>

       <button type="button" onClick = {() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived =='week'}/>
       </button>

       <button type="button" onClick = {() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived =='month'}/>
       </button>

       <button type="button" onClick = {() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived =='year'}/>
       </button>
     </S.FilterArea>

     <S.Title>
      <h3>TAREFAS</h3>
     </S.Title>

     <S.Content>
      {  
        tasks.map(t => (
        <TaskCard/>
        ))
      }  
     </S.Content>
     
     <Footer/>
    </S.Container>
  )
}

export default Home;