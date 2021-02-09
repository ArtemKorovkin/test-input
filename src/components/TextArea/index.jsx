import {useState} from "react";

import {TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import './textarea.scss'

const useStyle = makeStyles(() => ({
    root: {
        '& .MuiInputBase-input': {
            fontSize: '20px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            padding: '5px 0 0 15px',
            outline: 'none',
            border: 'none',
            letterSpacing: '1.5px',
            lineHeight: '23px',
            borderBottom: 'none',
        },
        flexBasis: '100%'
    },
    '& innerInput': {
        left: '0px'
    },
    unFocusedInput: {
        position: 'relative',
        left: '-45px',
        transition: 'left 3s linear'
    }
}))

export const TextArea = ({onFocus, focused}) => {
    const [text, setText] = useState('')
    const [taskText, setTaskText] = useState('')
    const [comment, setComment] = useState('')
    const classes = useStyle()

    const writeText = (e) => {
        let textValue = e.target.value
        setText(textValue)
        let indexStartComment = textValue.indexOf('//')
        let lastIndexText = indexStartComment - 1
        if (lastIndexText > 0) {
            setComment(textValue.slice(indexStartComment))
            setTaskText(textValue.slice(0, lastIndexText + 1))
        }
    }
    return (
        <div className={`${focused ? classes.unFocusedInput : ''} innerInput`}
             style={{display: 'flex'}}
        >
            <span className='markerInput'></span>
            <TextField
                className={classes.root}
                placeholder='Write a new task'
                multiline
                onChange={writeText}
                onFocus={onFocus}
                value={taskText ? taskText + comment : text}
            />
        </div>
    )
}