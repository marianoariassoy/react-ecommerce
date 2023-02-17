import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="text-center h-full flex items-center justify-center">
      <div>
        <h1 className="text-9xl font-bold">Hola 👋</h1>
        <p className="text-3xl mb-12 mt-6">
          Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br />
          In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <Link to="/list" className="btn btn-primary btn-lg">
          VER CURSOS
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
