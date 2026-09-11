import { NavLink } from 'react-router-dom';
import stylles from './../Dialogs.module.css';

function DialogItem(props) {
    let path = '/messages/' + props.id

    return (
        <div className={stylles.dialog}>
            <NavLink className={({ isActive }) => isActive ? stylles.active : ''
            } to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;