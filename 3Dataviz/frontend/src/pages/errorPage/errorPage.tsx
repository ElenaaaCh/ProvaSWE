import "./errorPage.css";

function ErrorPage() {
  return (
    <>
      <div className="containerError">
        <h1 id="titleError">404</h1>
        <h2>Pagina non trovata</h2>
        <p>La pagina che hai cercato non esiste.</p>
        <a href="/">Torna alla HomePage</a>
      </div>
    </>
  );
}

export default ErrorPage;
