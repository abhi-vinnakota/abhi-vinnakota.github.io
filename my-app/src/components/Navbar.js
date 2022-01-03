import { Button } from "@mui/material";
import React from "react";
import "../css/Navbar.css"


var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }
    
class Navbar extends React.Component {
    
    render() {
        return (
            <div id = "navbar">
                <div className = "topnav">
                    <a href = "#about">
                        About
                    </a>

                    <a href = "#experience">
                        Experience
                    </a>

                    <a href = "#contact">
                        Contact
                    </a>

                    <a href = "AbhiVinnakotaResume.pdf">
                        Resume
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;