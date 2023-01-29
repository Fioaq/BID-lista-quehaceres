import React, {useState} from 'react';
import './Add.module.css';

const Add = props => {
    const [chore, setChore] = useState('');
    const {list, setList}= props;

    const handleSubmit= e => {
        e.preventDefault();
        if(chore !== ""){
            let aux= [...list];
            aux.push({name: chore, status: false});
            setList(aux);
            setChore('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={chore} onChange={e => setChore(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default Add;