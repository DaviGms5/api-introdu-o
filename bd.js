//bd.js
import pkg from "pg";
//bd.js
export { selectUsuarios, selectUsuario };
const { Pool } = pkg;

async function connect() 
{
  const pool = new Pool(
  {
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}

//bd.js
async function selectUsuario(id) 
{
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE id = $1";
  const usuario = [id];
  const res = await client.query(query, usuario);
  return res.rows;
}

async function selectUsuarios() 
{
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}

export { selectUsuarios };