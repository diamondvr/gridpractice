import React from 'react';
import "../css/People.css";

function People() {
    return (
        <div className="peopleContainer">
            <h1>Let me introduce your new friends</h1>
            <ul className="peopleList">
                <li>
                    <div>
                        <img src="https://www.wmpg.org/wp-content/uploads/2019/03/default-avatar.jpg" alt="userPic" className="uPic"/>
                        <p>Name</p>
                        <p><i>@id</i></p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://www.wmpg.org/wp-content/uploads/2019/03/default-avatar.jpg" alt="userPic" className="uPic"/>
                        <p>Name</p>
                        <p><i>@id</i></p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://www.wmpg.org/wp-content/uploads/2019/03/default-avatar.jpg" alt="userPic" className="uPic"/>
                        <p>Name</p>
                        <p><i>@id</i></p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://www.wmpg.org/wp-content/uploads/2019/03/default-avatar.jpg" alt="userPic" className="uPic"/>
                        <p>Name</p>
                        <p><i>@id</i></p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default People;