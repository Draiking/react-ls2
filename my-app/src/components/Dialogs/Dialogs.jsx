import stylles from './Dialogs.module.css';
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';


function message(props) {

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

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'word' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ]

    let messagesElements = messagesData
        .map(m => <Message message={m.message} />)


    return (
        <div className={stylles.dialogs}>
            <div className={stylles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stylles.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;