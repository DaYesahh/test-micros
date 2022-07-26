import React, { useEffect, useTransition } from 'react';
import actions from '../../shared/actions';

const BookTypeList = () => {
    useEffect(() => {
        actions.onGlobalStateChange((state, prev) => {
            console.log(state);
            console.log(prev);
        }, true);
    }, [])
    const handleClick = () => {
        actions.setGlobalState({
            bookTypes: ["from son"]
        })
    };
    return (
        <div className='book-type-list' onClick={() => handleClick()}>
            这里是哈哈哈哈
        </div>
    );
};

export default BookTypeList;