console.log("server env: ", process.env.SEVER_ENV_VAR);
console.log("client env: ", process.env.NEXT_PUBLIC_CLIENT_ENV_VAR);

function IndexPage() {
  return (
    <div className="box page">
      <h1>IndexPage</h1>
    </div>
  );
}

export default IndexPage;