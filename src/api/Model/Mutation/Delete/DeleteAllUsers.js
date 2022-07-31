import { gql } from "@apollo/client";

export const DELETE_ALL_USER = gql`
  mutation DeleteUser($prodi: String!, $roles_id: Int!) {
    delete_users(where: { study_programs_id: { _eq: $prodi }, _and: { roles_id: { _eq: $roles_id } } }) {
      returning {
        username
      }
    }
  }
`;
