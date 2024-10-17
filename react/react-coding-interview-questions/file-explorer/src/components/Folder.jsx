
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaFolder, FaFile, FaCaretRight, FaCaretDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa'; 
// import { fileIconMap } from '../config/constant';

const Folder = ({ explorer }) => {

    const [expand, setExpand] = useState(false)

    const expandFolder = () => {
        setExpand(!expand)
    }
    const fileIconMap = {
        '.js': <FaJs style={{ color: 'yellow', textColor: 'black' }} />,   // JS Icon
        '.html': <FaHtml5 style={{ color: 'orange'}} />,  // HTML Icon
        '.css': <FaCss3 style={{ color: 'blue' }} />, // CSS Icon
      }

    const fileData = !explorer.isFolder && {
        icon: fileIconMap[explorer.name?.substring(explorer.name?.lastIndexOf('.'))] || <FaFile style={{ color: 'red' }}/>,
        name: explorer.name
    }
    return (
        <>
            {explorer.isFolder ? 
            <div style={{ margin: 5}}>
                <div className='folder' onClick={expandFolder}>
                    <span>{expand ? <FaCaretDown /> : <FaCaretRight />}<FaFolder style={{ color: 'grey' }}/> {explorer.name}</span>
                </div>
                <div style={{ display: expand ? 'block': 'none', paddingLeft: 20}}>
                    {explorer.items.map((item)=>{
                        return <Folder key={item.id}explorer={item} />
                    })}
                </div>
                
            </div> : <span className='file'> {fileData.icon}{fileData.name}</span>}
        </>
    )
}

export default Folder