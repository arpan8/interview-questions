
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaFolder, FaFile, FaCaretRight, FaCaretDown } from 'react-icons/fa'; 


const Folder = ({ explorer }) => {

    const [expand, setExpand] = useState(false)

    const expandFolder = () => {
        setExpand(!expand)
    }
    return (
        <>
            {explorer.isFolder ? 
            <div style={{ margin: 5}}>
                <div className='folder' onClick={expandFolder}>
                    <span>{expand ? <FaCaretDown /> : <FaCaretRight />}<FaFolder /> {explorer.name}</span>
                </div>
                <div style={{ display: expand ? 'block': 'none', paddingLeft: 20}}>
                    {explorer.items.map((item)=>{
                        return <Folder key={item.id}explorer={item}/>
                    })}
                </div>
                
            </div> : <span className='file'><FaFile /> {explorer.name}</span>}
        </>
    )
}

export default Folder