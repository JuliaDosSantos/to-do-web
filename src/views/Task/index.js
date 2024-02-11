import React, {useState, useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from  '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

function Task() {
    const [lateCount, setLateCount] = useState();
 
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
              index > 0 && <img src={icon} alt = "Tipo da tarefa"/>

            ))
          }

        </S.TypeIcons>

      </S.Form>

        <Footer/>
    </S.Container>
  )
}

export default Task;