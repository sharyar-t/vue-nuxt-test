export default defineEventHandler(async (event) => {
  const { slug } = event.context.params!;
  const response = await fetch(`http://localhost:3000/pages?slug=${slug}`);
  const data = await response.json();
  return data[0] || null; // json-server возвращает массив
});
