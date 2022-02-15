import React from "react";
import { ListContainer, Lister, ListItem } from "./ListStyles";

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

    return (
            <ListContainer>
                <Lister>
                {
                    listItems.map(item =>
                        <ListItem key={item.source}>
                            <a src={item.source}>{item.label}</a>
                        </ListItem>
                    )
                }
                </Lister>
            </ListContainer>
    )
}

export default List;