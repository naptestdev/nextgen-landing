import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query MyQuery(
    $skip: Int = 0
    $projectType_in: [ProjectTypes!] = [scratch, game, app, web, cs]
    $_search: String = ""
  ) {
    projectsConnection(
      stage: PUBLISHED
      orderBy: createdAt_DESC
      first: 8
      skip: $skip
      where: { AND: { projectType_in: $projectType_in, _search: $_search } }
    ) {
      edges {
        node {
          id
          title
          description
          projectType
          updatedAt
          createdAt
          youtubeVideoId
          facebookLink
          demoLink
          image {
            url(
              transformation: { image: { resize: { fit: clip, width: 300 } } }
            )
          }
        }
      }
      aggregate {
        count
      }
      pageInfo {
        pageSize
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query MyQuery($id: ID = "") {
    project(where: { id: $id }) {
      id
      title
      description
      projectType
      updatedAt
      createdAt
      youtubeVideoId
      facebookLink
      demoLink
      image {
        url
      }
    }
  }
`;
