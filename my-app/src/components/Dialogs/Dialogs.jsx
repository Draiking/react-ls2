import stylles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={stylles.dialogs}>
            <div className={stylles.dialogsItems}>
                <div className={stylles.dialog + ' ' + stylles.active}>
                    Dimych
                </div>
                <div className={stylles.dialog}>
                    Sveta
                </div>
                <div className={stylles.dialog}>
                    Andrey
                </div>
                <div className={stylles.dialog}>
                    Sasha
                </div>
                <div className={stylles.dialog}>
                    Viktor
                </div>
            </div>
            <div className={stylles.messages}>
                <div className={stylles.message}>hi</div>
                <div className={stylles.message}>how are you</div>
                <div className={stylles.message}>word</div>
            </div>
        </div>

    )
}

export default Dialogs;