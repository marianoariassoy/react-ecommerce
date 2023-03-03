//Data
const url = "/data.json";

async function getItems() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export default getItems;
