import React, { useEffect } from 'react';
import '../css/Feed.css';

function Feed() {
    let feedList = [];
    useEffect(() => {
        for(let i=0; i<10; i++) {
            feedList.push(
                1000
            );
        }
        console.log(feedList)
    });

    return (
        <div className="feedTab">
            <div className='feedBox'>
                <p>This is message.</p>
            </div>
            <div className='feedBox'>
                <p>This is message.</p>
            </div>
            <div className='feedBox'>
                <p>This is message.</p>
            </div>
            <div className='feedBox'>
                <p>This is message.</p>
            </div>
            <div className='feedBox'>
                <p>This is message.</p>
            </div>
            { feedList }
        </div>
    );
}

export default Feed;