export async function getOrders(company: any) {
    console.log(company)
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + company.accessToken,
      "Content-Type": "application/json",
      "X-Company": company.id,
    },
  };

  fetch("https://api-staging.genuka.com/2023-11/admin/orders/", options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}