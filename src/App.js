import {useState} from "react";

import {TextArea} from "./components/TextArea";
import {SelectList} from "./components/SelectList";

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles((theme) => ({
    button: {
        minWidth: 'auto',
        backgroundColor: '#f1f4f5',
        borderRadius: '9px',
        marginRight: '7px'
    },
    focusInput: {
        backgroundColor: '#fff',
        boxShadow: '0 0 15px -2px gray'
    }
}))


export const App = () => {
    const classes = useStyle()
    const [focused, setFocused] = useState(true)
    const onFocused = () => {
        setFocused(false)
    }
    const notFocused = () => {
        setTimeout(() => {
            setFocused(true)
        }, 200)
    }

    return (
        <div className="container">
            <div className={`input-inner ${!focused ? classes.focusInput : ''}`}>
                <TextArea onFocus={onFocused} focused={focused}/>
                <div className='input-btn-list' style={focused ? {display: 'none'} : {display: 'flex'}}
                >
                    <Button className={classes.button}
                    >
                        <CalendarTodayIcon/>
                    </Button>
                    <SelectList focused={focused}/>
                </div>
            </div>
        </div>
    )
}

