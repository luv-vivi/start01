import { forwardRef } from 'react';
import '../css/main.css'
import { TbArrowBigDownLinesFilled } from "react-icons/tb";

export const Main = forwardRef(({ data }, ref )=>{
    const highlight = data.highlight_text === undefined ?'': data.highlight_text
    const row = data.row_text === undefined ?'': data.row_text
    const from = data.from === undefined ?[] :data.from
    return(<>
        <div className='main' ref={ref}>
            <h2>{ highlight }</h2>
            <h3>{ row }</h3>
            { from.map((o,k)=>{return(<>
                <p key={k}>{o}</p>
            </>)})}
            { data.pace_img !== undefined && (
                <div>
                    <img src={`/${data.pace_img}.png`} alt={data.pace_img} />
                </div>
            )}
            <TbArrowBigDownLinesFilled />
        </div>
    </>)
})