import React from 'react';  
import './style.css';  

class WinPopup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
<button className="popup-btn" onClick={this.props.closeWinPopup}>Ok</button>  
</div>  
</div>  
);  
}  
}  

export default WinPopup;