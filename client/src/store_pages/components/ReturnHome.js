//==================================================================
//            BACK BUTTON
//------------------------------------------------------------------
//   Redirects user to previous page in history
//==================================================================

import React from 'react'
import { useHistory } from "react-router-dom";

function ReturnHome(){
    let history = useHistory();
    return (
        <div className="back-button">

          <button onClick={() => history.push('/')}>Return Home</button>
        </div>
    );
};


export default ReturnHome
