import { NavLink } from 'react-router-dom';
import stylles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={stylles.dialogs}>
            <div className={stylles.dialogsItems}>
                <div className={stylles.dialog + ' ' + stylles.active}>
                 <NavLink to='/messages/1'>Dimych</NavLink>   
                </div>
                <div className={stylles.dialog}>
                   <NavLink to='/messages/2'>Sveta</NavLink>   
                </div>
                <div className={stylles.dialog}>
                  <NavLink to='/messages/3'>Andrey</NavLink>    
                </div>
                <div className={stylles.dialog}>
                  <NavLink to='/messages/4'>Sasha</NavLink>    
                </div>
                <div className={stylles.dialog}>
                  <NavLink to='/messages/5'>Viktor</NavLink>    
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