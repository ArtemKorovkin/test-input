import {useState} from "react";

import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#f1f4f5',
        border: 'none',
        padding: '0',
        '& .MuiInputLabel-shrink': {
            display: 'none'
        }
    },
    labelList: {
        transform: 'translate(14px, 12px) scale(1)',
        border: 'none',
    },
    selectEmpty: {
        backgroundColor: '#f1f4f5',
        border: 'none',
        height: '33px',
        '& .PrivateNotchedOutline-root-5': {
            border: 'none',
            padding: '0',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
    },
    markerList: {
        display: 'inline-block',
        width: '8px',
        height: '8px',
        border: '2px solid #ced2da',
        borderRadius: '3px',
        margin: '0 5px 1px 0'
    }
}));


export const SelectList = ({focused}) => {
    const classes = useStyles()
    const [listItem, setListItem] = useState('');
    const listOptions = ['Example 1', 'Example 2', 'Example 3']

    const handleChange = (event) => {
        setListItem(event.target.value)
    };
    return (
        <FormControl className={classes.formControl}
                     variant="outlined"
                     style={focused ? {display: 'none'} : {display: 'inline-flex'}}
        >
            <InputLabel className={classes.labelList}><span className={classes.markerList}></span>No List</InputLabel>
            <Select
                className={classes.selectEmpty}
                value={listItem}
                onChange={handleChange}
            >
                {
                    listOptions.map((itemList, index) => {
                        return <MenuItem key={index} value={itemList}>{itemList}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}