import Container from "../../components/container/Container";
// import Typed from "react-typed";
import heroImageMobile from "../../assets/heroImageMobile.jpg";
import heroImageDesktop from "../../assets/heroImageDesktop.jpg";

export default function Home() {
  return (
    <>
      <Container>
        <div className="bg-gray-100 sm:hidden">
          <div
            className="py-36 "
            style={{
              backgroundImage: `url(${heroImageMobile})`,
              backgroundSize: "cover",
            }}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                Check Your Mental Health Now.
              </h1>
              <br></br>
              {/* <p className="md:text-3xl sm:text-2xl text-xl font bold text-gray-100">
              Embracing&nbsp;
              <Typed
                className="md:text-3xl sm:text-2xl text-xl font bold"
                strings={["Wellness", "Fitness", "Vitality"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </p> */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="./check"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="./portfolio"
                  className="text-md font-semibold leading-6 text-gray-100"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 hidden sm:block">
          <div
            className="py-36 "
            style={{
              backgroundImage: `url(${heroImageDesktop})`,
              backgroundSize: "cover",
            }}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                Check Your Mental Health Now.
              </h1>
              <br></br>
              {/* <p className="md:text-3xl sm:text-2xl text-xl font bold text-gray-100">
              Embracing&nbsp;
              <Typed
                className="md:text-3xl sm:text-2xl text-xl font bold"
                strings={["Wellness", "Fitness", "Vitality"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </p> */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="./check"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="./portfolio"
                  className="text-md font-semibold leading-6 text-gray-100"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
