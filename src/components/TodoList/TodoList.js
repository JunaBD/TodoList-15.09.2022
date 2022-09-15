import React from "react";
import { Row, Col, Button, FormControl} from 'react-bootstrap'
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave,faCheck, faExpand } from '@fortawesome/free-solid-svg-icons'

function TodoList ({todo, setTodo}){

    function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id!=id)
    setTodo(newTodo)
}
    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status =!item.status
            }
            return item
        })
        setTodo(newTodo)
    }
    return(
        <div>
            {
                todo.map( item => (
                    <div key={item.id} className={s.listItems}>
                    <div className= {!item.status ? s.rdy:''}>{ item.tittle }</div>
                    <Button onClick={ ()=>deleteTodo(item.id)}className={s.btn1}>Удалить</Button>
                    <Button onClick={ ()=>statusTodo(item.id) } className={s.btn}>
                    {
                        item.status ? <FontAwesomeIcon icon={faExpand}></FontAwesomeIcon>  : <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    }
                    </Button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList;