import stylles from './Dialogs.module.css';
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';
import { dialogsData, messagesData } from '../..';


function message(props) {

    return (
        <div className={stylles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)



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