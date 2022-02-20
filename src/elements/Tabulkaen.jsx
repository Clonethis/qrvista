import {FaCocktail} from "react-icons/fa";
import {GiTheater} from "react-icons/gi";
import {MdSchool,MdOutlineSquareFoot} from "react-icons/md";
import {FaUnderline} from "react-icons/fa";
import {IoMdResize} from "react-icons/io";
import {IoSunnyOutline} from"react-icons/io5";
import {MdGroups} from "react-icons/md";
export default function Tabulkaen(props) {return(
    
<table class="conference-table">
    
            <tbody><tr className="first">
                <th className="upper first">Name of Space</th>
                <th className="upper"><MdOutlineSquareFoot/><br/>Square meters</th>
                <th className="upper"><IoSunnyOutline/><br/>Daily light</th>
                <th className="upper"><IoMdResize/><br/>Dimensions</th>
                <th className="upper"><span class="icon icon-wine"><FaCocktail/> </span>
                <br/> Coctails</th>
                <th className="upper"><span class="icon icon-theatre"><GiTheater/> </span> 
                <br/>Theatre </th>
                <th className="upper"><span class="icon icon-school"><MdSchool/> </span> 
                <br/>School desk </th>
                <th className="upper"><span class="icon icon-meeting"></span> U <div className="fa">
                    
                    {/* <FaUnderline/> */}
                    </div>
                    </th>
                <th className="upper"><span class="icon icon-meeting-o"><MdGroups/></span> O</th>
            </tr>
            <tr>
                <th>Conference hall</th>
                <td>120 m<sup>2</sup></td>
                <td>Yes</td>
                <td>20 × 6 m</td>
                <td>130</td>
                <td>130</td>
                <td>90</td>
                <td>60</td>
                <td>60</td>
                {/* <td><a class="conference-gallery" data-gallery="13" href="/en/fotogallery">GALLERY</a></td> */}
            </tr>
            <tr>
                <th>Conference hall A</th>
                <td>60 m<sup>2</sup></td>
                <td>Yes</td>
                <td>10 × 6 m</td>
                <td>50</td>
                <td>50</td>
                <td>40</td>
                <td>25</td>
                <td>30</td>
                {/* <td><a class="conference-gallery" data-gallery="14" href="/en/fotogallery">GALLERY</a></td> */}
            </tr>
            <tr>
                <th>Conference hall B</th>
                <td>60 m<sup>2</sup></td>
                <td>Yes</td>
                <td>10 × 6 m</td>
                <td>50</td>
                <td>50</td>
                <td>40</td>
                <td>25</td>
                <td>30</td>
                {/* <td><a class="conference-gallery" data-gallery="15" href="/en/fotogallery">GALLERY</a></td> */}
            </tr>
            <tr>
                <th>Revista</th>
                <td>100 m<sup>2</sup></td>
                <td>Yes</td>
                <td>14 × 7 m</td>
                <td>60</td>
                <td>60</td>
                <td>50</td>
                <td>35</td>
                <td>40</td>
                {/* <td><a class="conference-gallery" data-gallery="12" href="/en/fotogallery">GALLERY</a></td> */}
            </tr>
            <tr>
                <th>Meeting room 1</th>
                <td>21 m<sup>2</sup></td>
                <td>Yes</td>
                <td>7 × 3 m</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>10</td>
                <td>12</td>
                {/* <td><a class="conference-gallery" data-gallery="10" href="/en/fotogallery">GALLERY</a></td> */}
            </tr>
            <tr>
                <th>Meeting room 2</th>
                <td>21 m<sup>2</sup></td>
                <td>Yes</td>
                <td>7 × 3 m</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>10</td>
                <td>12</td>
                {/* <td><a class="conference-gallery" data-gallery="11" href="/en/fotogallery">GALLERY</a></td> */}
            </tr>
        </tbody>
        <Images className="table-images"/>
        </table>
)}