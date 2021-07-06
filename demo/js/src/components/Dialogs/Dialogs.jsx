import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map((d) => {
        return (
            <Dialog id={d.id} name={d.name}/>
        )
    })
    let messageElements = props.state.messages.map((m) => {
        return (
            <Message message={m.message}/>
        )
    })

    let newMessageEl = React.createRef();
    let onButtonClick = () => {
        let result = newMessageEl.current.value;
        props.addMessage(result)
    }

    let onMessageChange = () => {
        let text = newMessageEl.current.value;
        props.updateNewMessages(text);
    }
    debugger
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange} ref={newMessageEl}
                         value={props.newMessage}/>
                <br/>
                <button onClick={onButtonClick}>Add message
                </button>
            </div>
        </div>
    )
}

export default Dialogs

