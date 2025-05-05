export default defineEventHandler(async () => {
  const response = await fetch('http://localhost:4000/pages');

  return await response.json();
});
