import React from "react";

const List = ({items}) => {
    return (
            <div class="list">
                <p>Hello</p>
                <ul>
                {
                    items.forEach(item => {
                        <li><a src={item.source}>{item.label}</a></li>
                        console.log({item});
                    })
                }
                </ul>
            </div>
    )
}

export default List;