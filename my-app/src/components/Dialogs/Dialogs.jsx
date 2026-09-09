import { NavLink } from 'react-router-dom';
import stylles from './Dialogs.module.css';

function DialogItem(props) {
    let path = '/messages/' + props.id

    return (
        <div className={stylles.dialog + ' ' + stylles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    
    return(
        <div className={stylles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={stylles.dialogs}>
            <div className={stylles.dialogsItems}>
                <DialogItem name='Dimych' id='1' />
                <DialogItem name='Sveta' id='2' />
                <DialogItem name='Andrey' id='3' />
                <DialogItem name='Sasha' id='4' />
                <DialogItem name='Viktor' id='5' />
            </div>
            <div className={stylles.messages}>
                <Message message='hi'/>
                <Message message='how are you'/>
                <Message message='word'/>
            </div>
        </div>

    )
}

export default Dialogs;