import Container from "../../components/container/Container";
// import Typed from "react-typed";
import heroImageMobile from "../../assets/heroImageMobile.jpg";
import heroImageDesktop from "../../assets/heroImageDesktop.jpg";
import { Accordion } from "flowbite-react";
import { Blockquote } from "flowbite-react";

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
                {/* <a
                  href="./portfolio"
                  className="text-md font-semibold leading-6 text-gray-100"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
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
                  className="rounded-md bg-indigo-600 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-16"
                >
                  Get started
                </a>
                {/* <a
                  href="./portfolio"
                  className="text-md font-semibold leading-6 text-gray-100"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <figure className="mx-auto max-w-screen-md text-center py-10">
          <svg
            className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
              &quot;The brain, a trillion interconnected marvel, governs
              thoughts, feelings, actions, and memories. Despite its
              extraordinary power, it&apos;s vulnerable to trauma, stress, and
              diseases. Intriguingly, the brain&apos;s complexity relies on the
              overall health, balance, and vitality of the entire body.&quot;
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                Dr. Oliver Sacks
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                British neurologist and naturalist
              </cite>
            </div>
          </figcaption>
        </figure>

        <Accordion className="m-10">
          <Accordion.Panel>
            <Accordion.Title>Why Prioritize Mental Health?</Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">
                <span className="font-bold"> Overall Well-being: </span>
                Mental health is an integral component of overall well-being. A
                healthy mind contributes to a person&apos;s ability to cope with
                stress, maintain positive relationships, and make sound
                decisions.
              </p>
              <p className="text-gray-500 dark:text-gray-400 py-2">
                <span className="font-bold">Physical Health Connection: </span>
                Mental and physical health are interconnected. Mental health
                issues can contribute to physical health problems, and vice
                versa. Prioritizing mental well-being can positively impact
                one&apos;s physical health and immune system.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <span className="font-bold">Quality of Life: </span>
                Good mental health enhances the quality of life. It allows
                individuals to enjoy life, pursue meaningful goals, and engage
                in fulfilling relationships and activities. Mental well-being is
                a key factor in leading a satisfying and purposeful life.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What type of Mental Problem?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Mental health problems can encompass a wide range of conditions,
                each with its own set of symptoms and challenges. Here are some
                common types of mental health disorders:
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <span className="font-bold">Anxiety Disorders: </span>
                Conditions characterized by excessive worry, fear, or anxiety.
                This category includes Generalized Anxiety Disorder (GAD), Panic
                Disorder, Social Anxiety Disorder, and specific phobias.
              </p>
              <p className="text-gray-500 dark:text-gray-400 py-2">
                <span className="font-bold">Bipolar Disorder: </span>
                Episodes of extreme mood swings, including manic highs and
                depressive lows. Individuals with bipolar disorder may
                experience periods of elevated energy and impulsivity followed
                by periods of deep sadness.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <span className="font-bold">
                  Obsessive-Compulsive Disorder (OCD):{" "}
                </span>
                Persistent, intrusive thoughts (obsessions) and repetitive
                behaviors or mental acts (compulsions) aimed at reducing anxiety
                or preventing a feared event.
              </p>
              <p className="text-gray-500 dark:text-gray-400 py-2">
                <span className="font-bold">
                  Post-Traumatic Stress Disorder (PTSD):{" "}
                </span>
                Occurs in individuals who have experienced or witnessed a
                traumatic event. Symptoms may include flashbacks, nightmares,
                and severe anxiety.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <span className="font-bold">
                  Attention-Deficit/Hyperactivity Disorder (ADHD):{" "}
                </span>
                A neurodevelopmental disorder characterized by difficulties with
                attention, impulsivity, and hyperactivity. It often begins in
                childhood but can persist into adulthood.
              </p>
              <p className="text-gray-500 dark:text-gray-400 py-2">
                <span className="font-bold">Schizophrenia: </span>A severe
                mental disorder characterized by disruptions in thinking,
                emotions, and perceptions of reality. It may involve
                hallucinations, delusions, and impaired cognitive function.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Mental Health Support System Overview:
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="font-bold">Personalized Assessments: </span>
                Conducts personalized mental health assessments to help users
                understand their emotional well-being. Offers insights into
                potential areas of concern and provides tailored
                recommendations.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400 py-2">
                <span className="font-bold">User-Friendly Interface: </span>
                Promotes a user-friendly and intuitive interface for seamless
                navigation. Prioritizes accessibility and inclusivity to
                accommodate users with varying needs.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="font-bold">Privacy and Confidentiality: </span>
                Ensures the highest standards of privacy and confidentiality to
                create a safe space for users. Adheres to ethical guidelines in
                handling sensitive user data.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Container>
    </>
  );
}
