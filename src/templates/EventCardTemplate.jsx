import React from "react";
import { graphql } from "gatsby";
import SmallEventCard from "../components/common/SmallEventCard";

export default function EventCardTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const event = data.markdownRemark;
  return <SmallEventCard event={event} color="#5a8bea" />;
}

export const eventCardQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
