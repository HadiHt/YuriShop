export const localStorage = async (
  userCredentials,
  userAddress,
  allProducts
) => {
  try {
    window.localStorage.setItem("USER_DATA", JSON.stringify(userCredentials));
    window.localStorage.setItem("USER_ADDRESS", JSON.stringify(userAddress));
    window.localStorage.setItem("ALL_PRODUCTS", JSON.stringify(allProducts));
  } catch (error) {
    console.log(error);
  }
};
