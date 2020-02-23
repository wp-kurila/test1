import React, {useState, useEffect} from 'react';
import BlockListItem from './BlockListItem';
import { styled } from '@material-ui/core/styles';

import 'typeface-roboto';

const BlockListDiv = styled('div')({
    padding: '8px 4px 8px 8px',
    boxSizing: 'border-box',
    background: '#e6e6e6',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
})

const BlockList = () => {

    const [blocks, setBlocks] = useState([])

    const getResours = async (url) => {
        const res = await fetch (url);
        return await res.json();
    }

    useEffect(() => {
        getResours('http://localhost:3000/blocks/')
            .then(res => setBlocks(res))
    }, [])

    return (
        <BlockListDiv>
            {
                blocks.map((block, i) => {
                    return (
                        <BlockListItem key={i} block={block} />
                    )
                })
            }
        </BlockListDiv>
    )
}

export default BlockList;