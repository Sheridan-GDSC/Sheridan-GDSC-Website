import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SmallEventCard from "../components/common/SmallEventCard";

export default function EventCardTemplate() {
  return (
    <StaticQuery
      query={graphql`
        query ($slug: String!) {
          markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
              date
              slug
              title
            }
          }
        }
      `}
      render={(data) => <SmallEventCard event={data} color="#5a8bea" />}
    ></StaticQuery>
  );
}

// export const eventCardQuery = graphql`
//   query ($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date
//         slug
//         title
//       }
//     }
//   }
// `;
