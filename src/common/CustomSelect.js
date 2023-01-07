import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const ReactSelect = ({options}) => {

    

   

    const customStyles = {

        input: (styles) => ({
            ...styles,
            margin: "0",
            color: "black",
            cursor: "pointer",
            border:"none",
            outline: "none",

        }),
        control: (styles) => ({
            ...styles,
            backgroundColor:"#fff",
            width: "100% !important",
            color: "black",
            height: "40px",
            minHeight: "40px",
            position: "relative",
            fontSize: "smaller",
            outline: "none",
            border: "1px solid black",
            borderRadius:"10px",
            padding:"0px 10px 0px 10px",

            // This line disable the blue border
            '&:active': {
                border: '2px solid black',
            }
            
        }),
        menuList: base => ({
            ...base,
            // kill the white space on first and last option
            backgroundColor:"#fff",
            borderRadius: "8px",
            padding: "2px 4px 3px 4px",

            "::-webkit-scrollbar": {
                width: "5px"
            },
            "::-webkit-scrollbar-track": {
                background: "#2f3e53"
            },
            "::-webkit-scrollbar-thumb": {
                background: "#8f959f",
                borderRadius: '5px'
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: "#9ca3af"
            }



        }),









        menu: base => ({
            ...base,
            // kill the white space on first and last option
            backgroundColor: "#ffff",
            borderRadius: "8px",
            marginTop: "2px",
            marginBottom: "2px",
            color:"black"
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isSelected || isFocused ?'#e5e7eba1' : "#ffff",
                // backgroundColor: props.backgroundColorClass ? props.backgroundColorClass : "#1f2937",
                color: "black",
                overflow: "hidden",
                borderRadius: "2px",
                margin: "2px px 2px 0px",
                fontSize: "smaller",
                cursor: 'pointer'
            }
        },
       
        dropdownIndicator: (styles) => ({
            ...styles,
            paddingTop: 0,
            paddingBottom: 0,
            ":hover": {
                color: "#9ca3af",
            },
        }),
        clearIndicator: (styles) => ({
            ...styles,
            paddingTop: 0,
            paddingBottom: 0,
        }),
        indicatorContainer: (styles) => ({
            ...styles,
            color: "#9ca3af",
            ":hover": {
                color: "#cccccc",
            },
        }),
        ValueContainer: (styles) => ({
            ...styles,
            height: "100%",
            minHeight: "100%",
            padding: 0,
            margin: 0
        }),
        singleValue: (styles) => ({
            ...styles,
            color: "#9ca3af",
            margin: "0"

        })
        ,
        indicatorSeparator: (styles) => ({
            ...styles,
            display: "none"

        })
    }
   

   

    return (
        <Select  styles={customStyles} options={options} />
    )
}

export default ReactSelect

