import Container from "../../components/container/Container";
import Typed from 'react-typed';
export default function Home() {
  return (
    <>
      <div style={{
      backgroundImage: "linear-gradient(lightblue,lightgreen)",
      color: "darkred",
    }} >
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Check your diet planning.
            </h1>
            <br></br>
            <p className="md:text-2xl sm:text-2xl text-xl font bold">
              Embracing&nbsp;
              <Typed 
              className="md:text-2xl sm:text-2xl text-xl font bold"
              strings={['Wellness', 'Fitness', 'Vitality']} typeSpeed={120} backSpeed={140} loop />
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="./services"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="./portfolio"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
