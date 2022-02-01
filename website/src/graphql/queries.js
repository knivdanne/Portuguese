/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGlosor = /* GraphQL */ `
  query GetGlosor($id: ID!) {
    getGlosor(id: $id) {
      id
      word_pt
      word_en
      sessionname
      sentence_pt
      sentence_en
      createdAt
      updatedAt
    }
  }
`;
export const listGlosors = /* GraphQL */ `
  query ListGlosors(
    $filter: ModelGlosorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGlosors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        word_pt
        word_en
        sessionname
        sentence_pt
        sentence_en
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVerbs = /* GraphQL */ `
  query GetVerbs($id: ID!) {
    getVerbs(id: $id) {
      id
      verb
      mode
      tense
      person
      conjugation
      createdAt
      updatedAt
    }
  }
`;
export const listVerbs = /* GraphQL */ `
  query ListVerbs(
    $filter: ModelVerbsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVerbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        verb
        mode
        tense
        person
        conjugation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
