import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="hero h-full">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-9xl font-bold">Hola 👋</h1>
          <p className="text-3xl mb-12 mt-6">
            Unite a la comunidad de aprendizaje online en vivo más grande de Latinoamérica. <span className="text-primary">Clases online en vivo dictadas por expertos de la industria</span>, enfoque 100% práctico , mentorías personalizadas y acceso a
            una comunidad de +180.000 estudiantes.
          </p>
          <Link to="/list" className="btn btn-primary btn-lg normal-case">
            VER CURSOS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
