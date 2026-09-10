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

    return (
        <div className={stylles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
    ]

    let messagesData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'word' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ]


    return (
        <div className={stylles.dialogs}>
            <div className={stylles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />

            </div>
            <div className={stylles.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>

    )
}

export default Dialogs;