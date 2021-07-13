import { gql, useMutation } from "@apollo/client";

export const TESLA_QUERY = `
  {
    vehicles {
      id
      mileage
      year
      name
      price
      vin
      description
      image {
        url
        fileName
      }
    }
  }
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder(
    $customerName: String!
    $customerEmail: String!
    $vehicleId: ID
  ) {
    createOrder(
      data: {
        customerName: $customerName
        customerEmail: $customerEmail
        vehicle: { connect: { id: $vehicleId } }
      }
    ) {
      id
    }
  }
`;

const useOrderMutation = (options) => {
  const [result] = useMutation(CREATE_ORDER_MUTATION, options);

  console.log(result);
};

export default useOrderMutation;
