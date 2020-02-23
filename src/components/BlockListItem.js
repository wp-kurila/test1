import React from 'react';
import { styled } from '@material-ui/core/styles';

import 'typeface-roboto';

const BlockListItemDiv = styled('div')({
    padding: '8px 4px 8px 8px',
    boxSizing: 'border-box',
    width: '30%',
    height: 'max-content',
    border: '1px solid black',
    '& .header': {
        textAlign: 'center'
    }
})

const BlockListItem = ({block}) => {

    const {header, options, text} = block;

    return (
        <BlockListItemDiv>
            <div className='header'>{header}</div>
            <ul>
                {
                    options.map((option, i) => {
                        return (
                            <li key={i}>{option}</li>
                        )
                    })
                }
            </ul>
            <p>{text}</p>
        </BlockListItemDiv>
    )

}

export default BlockListItem;