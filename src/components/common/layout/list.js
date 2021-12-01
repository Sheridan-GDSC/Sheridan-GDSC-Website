import React from "react";
import "./list.css";

const List = () => {
    const listItems = [
        {
            label: "Home",
            source: '/'
        },
        {
            label: "Events",
            source: '/events'
        },
        {
            label: "About",
            source: '/about'
        },
        {
            label: "Contact Us",
            source: '/contact'
        }
    ];

    // // function createItem (item) {
    // //     return (
    //     <li>
    //     <a src={item.source}>{item.label}</a>
    // </li>
    // //     )
    // // }

    return (
            <div className="list">
                <ul className="listItemUL">
                {
                    listItems.map(item =>
                        <li className="listItemLI">
                            <a src={item.source}>{item.label}</a>
                        </li>
                    )
                }
                </ul>
            </div>
    )
}

export default List;