export async function addToCart(prevState: unknown, queryData: FormData) {
  if (prevState) {
    console.log(prevState);
  }

  const itemID = queryData.get("itemID");
  const random = queryData.get("random");
  console.log(random);

  if (itemID === "1") {
    return "Added to cart";
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    return "Couldn't add to cart: the item is sold out.";
  }
}
