import Container from "../../components/container/Container";
export default function Portfolio() {
  return (
    <>
      <div   style={{
      backgroundImage: "linear-gradient(lightblue,lightgreen)",
      color: "darkred",
    }}>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to DietCareLine, where we believe that a healthy and balanced diet is the foundation for a vibrant and fulfilling life. 
            Our journey began with a shared passion for helping individuals achieve their wellness goals through mindful nutrition.
            </p>
           
            <p className="mt-8">
        Embark on a transformative journey with DietCareLine. Discover the joy of nourishing your body, mind, and soul. Let us be your partners in health, guiding you every step of the way.
      </p>
          </div>
        </Container>
      </div>
    </>
  );
}