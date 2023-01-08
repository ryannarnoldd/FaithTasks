import React from 'react';
// import styling
import '../style.css';

const DateDropdown = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    // Number of days in each month.
    let days = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  return (
    months.map((month, index) => {
        return (
            <div className="dropdown">
                <button className="dropbtn">{month}</button>
                <div className="dropdown-content">
                    {Array.from(Array(days[index]), (e, i) => {
                        return (
                            <a href={`/${index +
                                1}/${i + 1}`}>{i + 1}</a>
                        );
                    })}
                </div>
            </div>
        );
    })
    );
};

export default DateDropdown;

// .dropbtn {
//     background-color: #04AA6D;
//     color: white;
//     padding: 16px;
//     font-size: 16px;
//     border: none;
//   }
  
//   /* The container <div> - needed to position the dropdown content */
//   .dropdown {
//     position: relative;
//     display: inline-block;
//   }
  
//   /* Dropdown Content (Hidden by Default) */
//   .dropdown-content {
//     display: none;
//     position: absolute;
//     background-color: #f1f1f1;
//     min-width: 160px;
//     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//     z-index: 1;
//   }
  
//   /* Links inside the dropdown */
//   .dropdown-content a {
//     color: black;
//     padding: 12px 16px;
//     text-decoration: none;
//     display: block;
//   }
  
//   /* Change color of dropdown links on hover */
//   .dropdown-content a:hover {background-color: #ddd;}
  
//   /* Show the dropdown menu on hover */
//   .dropdown:hover .dropdown-content {display: block;}
  
//   /* Change the background color of the dropdown button when the dropdown content is shown */
//   .dropdown:hover .dropbtn {background-color: #3e8e41;}