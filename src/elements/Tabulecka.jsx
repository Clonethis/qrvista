import React from "react";
import { FaCocktail } from "react-icons/fa";
import { GiTheater } from "react-icons/gi";
import { IoMdResize } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { MdGroups, MdOutlineSquareFoot, MdSchool } from "react-icons/md";
import LinkAway from "./LinkAway";
export default function Tabulecka(props) {
  return (
    <React.Fragment>
      <table className="conference-table">
        <tbody>
          <tr className="first">
            <th className="upper first">Název místnosti</th>
            <th className="upper">
              <span className="icon">
                <IoMdResize />
              </span>
              Plocha salónku
            </th>
            <th className="upper">
              <span className="icon">
                <IoSunnyOutline />
              </span>
              Denní světlo
            </th>
            <th className="upper">
              <span className="icon">
                <MdOutlineSquareFoot />
              </span>
              Rozměry
            </th>
            <th className="upper">
              <span className="icon icon-wine">
                <FaCocktail />
              </span>{" "}
              Koktejl
            </th>
            <th className="upper">
              <span className="icon icon-theatre">
                <GiTheater />
              </span>{" "}
              Divadlo
            </th>
            <th className="upper">
              <span className="icon icon-school">
                <MdSchool />
              </span>{" "}
              Škola
            </th>
            <th className="upper">
              <span className="icon icon-meeting"></span> U
            </th>
            <th className="upper">
              <span className="icon icon-meeting-o">
                <MdGroups />
              </span>{" "}
              Ženeva
            </th>
          </tr>
          <tr>
            <th>Velký sál</th>
            <td>
              120 m<sup>2</sup>
            </td>
            <td>Ano</td>
            <td>20 × 6 m</td>
            <td>130</td>
            <td>130</td>
            <td>90</td>
            <td>60</td>
            <td>60</td>
            {/* <td><a className="conference-gallery" data-gallery="13" href="/cs/fotogalerie">GALERIE</a></td> */}
          </tr>
          <tr>
            <th>Sál A</th>
            <td>
              60 m<sup>2</sup>
            </td>
            <td>Ano</td>
            <td>10 × 6 m</td>
            <td>50</td>
            <td>50</td>
            <td>40</td>
            <td>25</td>
            <td>30</td>
            {/* <td><a className="conference-gallery" data-gallery="14" href="/cs/fotogalerie">GALERIE</a></td> */}
          </tr>
          <tr>
            <th>Sál B</th>
            <td>
              60 m<sup>2</sup>
            </td>
            <td>Ano</td>
            <td>10 × 6 m</td>
            <td>50</td>
            <td>50</td>
            <td>40</td>
            <td>25</td>
            <td>30</td>
            {/* <td><a className="conference-gallery" data-gallery="15" href="/cs/fotogalerie">GALERIE</a></td> */}
          </tr>
          <tr>
            <th>Revista</th>
            <td>
              100 m<sup>2</sup>
            </td>
            <td>Ano</td>
            <td>14 × 7 m</td>
            <td>60</td>
            <td>60</td>
            <td>50</td>
            <td>35</td>
            <td>40</td>
            {/* <td><a className="conference-gallery" data-gallery="12" href="/cs/fotogalerie">GALERIE</a></td> */}
          </tr>
          <tr>
            <th>Salónek 1</th>
            <td>
              21 m<sup>2</sup>
            </td>
            <td>Ano</td>
            <td>7 × 3 m</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>10</td>
            <td>12</td>
            {/* <td><a className="conference-gallery" data-gallery="10" href="/cs/fotogalerie">GALERIE</a></td> */}
          </tr>
          <tr>
            <th>Salónek 2</th>
            <td>
              21 m<sup>2</sup>
            </td>
            <td>Ano</td>
            <td>7 × 3 m</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>10</td>
            <td>12</td>
            {/* <td><a className="conference-gallery" data-gallery="11" href="/cs/fotogalerie">GALERIE</a></td> */}
          </tr>
        </tbody>
        {/* <Images className="table-images"/> */}
      </table>
      <LinkAway />
    </React.Fragment>
  );
}
