export const callRandomApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  if (data) {
    console.log(data);
  }
  return true;
};
