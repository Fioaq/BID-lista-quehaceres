import React from 'react';
import styles from './List.module.css';

const List = props => {
    const {chores, setChores}= props;

    const handleCheck= (value, index) => {
        let aux= [...chores];
        aux[index].status= value;
        setChores(aux);
    }

    const handleDelete= index => {
        let aux= [...chores];
        let filtered= aux.filter((item, idx) => idx !== index);
        setChores(filtered);
    }

    return (
        <div className={styles.box}>
            {chores.map((item, idx) => (
                <div key={idx}>
                    {item.status ? <span><s>{item.name}</s></span> : <span>{item.name}</span>}
                    <input onChange={e => handleCheck(e.target.checked,idx)} type='checkbox' />
                    <button onClick={e => handleDelete(idx)}>Delete</button>
                </div>))}
        </div>
    )
}

export default List;