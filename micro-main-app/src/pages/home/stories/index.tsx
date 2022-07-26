import React, { useEffect } from 'react';
import actions, { initState } from '@/shared/action';
import { updateBookTypes } from '@/pages/home/homeSlice';
import { useDispatch } from 'react-redux';

const Stories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("gajskghdsakjghaskjd");
    }, [])

    const handleClick = () => {

        dispatch(updateBookTypes(["stories"]));
        actions.setGlobalState({
            ...initState,
            bookTypes: ["stories"],
        });
    };

    return (
        <div className='stories' onClick={() => handleClick()}>
            这里是故事汇
        </div>
    );
};

export default Stories;