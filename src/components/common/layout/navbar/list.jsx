import React from "react";
import { LinkItem, ListContainer, Lister, ListItem } from "./ListStyles";

const List = () => {
    const listItems = [
        {
            label: "Home",
            source: '#landing'
        },
        // {
        //     label: "Events",
        //     source: '/events'
        // },
        {
            label: "About",
            source: '#aboutUs'
        },
        {
            label: "Contact Us",
            source: '#contactUs'
        }
    ];

    return (
        <ListContainer>
            <Lister>
                {
                    listItems.map(item =>
                        <ListItem key={item.source}>
                            <LinkItem href={item.source}>{item.label}</LinkItem>
                        </ListItem>
                    )
                }
            </Lister>
        </ListContainer>
    )
}

export default List;