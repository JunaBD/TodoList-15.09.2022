import  React,{useState}  from 'react'
import { v4 as uuidv4} from 'uuid'
import { Row, Col, Button, FormControl} from 'react-bootstrap'
import s from './AddTodo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

function AddTodo ({todo,setTodo}) {

    const [value,setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuidv4,
                tittle: value,
                status: true
            }]
        )
        setValue('')
    }
    return (
       <Row>
         <Col className={s.addTodoForm}>
            <FormControl placeholder='Введите задачу' value={value} onChange={ (e)=>setValue(e.target.value) } />
            <Button onClick={saveTodo} className={s.btn}><FontAwesomeIcon icon={faSave}></FontAwesomeIcon></Button>
            </Col>
            </Row>
    )
}

export default AddTodo;