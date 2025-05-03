export default defineEventHandler(async () => {
  const response = await fetch('http://localhost:3000/pages');

  return await response.json();
});
