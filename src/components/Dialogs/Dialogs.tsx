import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <div className={s.dialog + ' ' + s.active}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Ivan 2
                </div>
                <div className={s.dialog}>
                    Ivan 3
                </div>
                <div className={s.dialog}>
                    Ivan 4
                </div>
                <div className={s.dialog}>
                    Ivan 5
                </div>
                <div className={s.dialog}>
                    Ivan 6
                </div>
                <div className={s.dialog}>
                    Ivan 7
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What you do?</div>
                <div className={s.message}>yo</div>
            </div>
        </div>
    );
};

export default Dialogs;