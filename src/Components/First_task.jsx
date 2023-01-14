import React, {useState} from 'react'

export default function First_task() {
  let [name, setName] = useState('Ваня');
  let [surName, setsurName] = useState('Иванов')
  let [count, setCount] = useState(3)
  let [ban, setBan] = useState('не забанен')
  let [banBtn, setbanbtn] = useState('забанить')

  return (
    <div>
      <p>{name}</p>
      <p>{surName}</p>
      <p>{count}</p>
      <p>{ban}</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={() => setName('Вася')}>Изменить имя</button>
        <button onClick={() => setsurName('Кириллов')}>Изменить Фамилию</button>
        <button onClick={() => {
          if (ban === 'забанин') {
            setBan('не забанин')
            setbanbtn('забанить')
          } else {
            setBan('забанин')
            setbanbtn('разбанить')
          }
        }}>{banBtn}</button>
        <button onClick={() => setCount(count+1)}>+1 к возврасту</button>
        <button onClick={() => setCount(count-1)}>1 к возврасту</button>
      </div>
    </div>
  );
}