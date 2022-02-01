/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGlosor = /* GraphQL */ `
  mutation CreateGlosor(
    $input: CreateGlosorInput!
    $condition: ModelGlosorConditionInput
  ) {
    createGlosor(input: $input, condition: $condition) {
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
export const updateGlosor = /* GraphQL */ `
  mutation UpdateGlosor(
    $input: UpdateGlosorInput!
    $condition: ModelGlosorConditionInput
  ) {
    updateGlosor(input: $input, condition: $condition) {
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
export const deleteGlosor = /* GraphQL */ `
  mutation DeleteGlosor(
    $input: DeleteGlosorInput!
    $condition: ModelGlosorConditionInput
  ) {
    deleteGlosor(input: $input, condition: $condition) {
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
export const createVerbs = /* GraphQL */ `
  mutation CreateVerbs(
    $input: CreateVerbsInput!
    $condition: ModelVerbsConditionInput
  ) {
    createVerbs(input: $input, condition: $condition) {
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
export const updateVerbs = /* GraphQL */ `
  mutation UpdateVerbs(
    $input: UpdateVerbsInput!
    $condition: ModelVerbsConditionInput
  ) {
    updateVerbs(input: $input, condition: $condition) {
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
export const deleteVerbs = /* GraphQL */ `
  mutation DeleteVerbs(
    $input: DeleteVerbsInput!
    $condition: ModelVerbsConditionInput
  ) {
    deleteVerbs(input: $input, condition: $condition) {
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
