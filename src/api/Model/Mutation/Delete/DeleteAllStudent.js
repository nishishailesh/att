import { gql } from "@apollo/client";

export const DELETE_ALL_STUDENT = gql`
  mutation DeleteStudent($prodi: String!) {
    delete_students(where: { study_programs_id: { _eq: $prodi } }) {
      returning {
        npm
      }
    }
  }
`;
