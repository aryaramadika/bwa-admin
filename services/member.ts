import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getMemberTransactions() {
    // let params = '';
    // if (valueParams === 'all') {
    //   params = '';
    // } else {
    //   params = `?status=${valueParams}`;
    // }
    const url = `${ROOT_API}/${API_VERSION}/patients/history`;
  
    return callAPI({
      url,
      method: 'GET',
      token: true,
    });
  }