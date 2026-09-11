import stylles from './../Dialogs.module.css';

function Message(props) {

    return (
        <div className={stylles.message}>{props.message}</div>
    )
}



export default Message;