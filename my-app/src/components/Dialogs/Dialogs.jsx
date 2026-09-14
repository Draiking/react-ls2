import stylles from './Dialogs.module.css';
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';

function message(props) {
    return (
        <div className={stylles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)

    let messagesElements =
        props.messagesData.map(m => <Message key={m.id} message={m.message} />)

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