import React from 'react';
import '../css/Profile.css'

function Profile() {
    return(
        <div className="profSide">
            <div className="profPic">
                <img src="https://www.wmpg.org/wp-content/uploads/2019/03/default-avatar.jpg" alt="userPic" className="uPic"/>
            </div>
            <div className="profInfo">
                <h3>Soros Seingpaiord</h3>
                <h4><i>@diamondvr</i></h4>
                <p>Email: soros.spr@gmail.com</p>
                <p>Phone: 080-5729895</p>
            </div>
        </div>
    );
}

export default Profile;