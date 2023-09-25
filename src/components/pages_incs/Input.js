import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputNum = ({callBack}) => {
    const [trackNum, setTrackNum] = useState('');

    const HandleInputChange = (event) => {
        setTrackNum(parseInt(event.target.value));
    };

    const navigate = useNavigate();

    const Navigate = () => {
        callBack(trackNum);
        navigate(`/Tracking/${trackNum}`);
    }

    return(
        <div className='input-group mb-3'>
        <input type="number" value={trackNum} onChange={HandleInputChange} class="form-control" placeholder="Tracking No." aria-describedby="button-addon2"/>
        <div class="input-group-append">
           <button class="btn btn-danger" type="button" id="button-addon2" onClick={Navigate}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L28 28" stroke="white" stroke-width="3" stroke-linecap="round"></path><circle cx="13" cy="13" r="11" stroke="white" stroke-width="3"></circle></svg>
            </button>
        </div>
        </div>
    );
}

export default InputNum;