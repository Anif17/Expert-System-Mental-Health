import { Footer } from "flowbite-react";

function Footers() {
  return (
    <Footer container>
      <Footer.Copyright
        href="#"
        by="Medical Health"
        year={2023}
        className="py-2"
      />
      <Footer.LinkGroup>
        <Footer.Link href="/" className="px-2">
          Home
        </Footer.Link>
        <Footer.Link href="/check" className="px-2">
          Diagnosis
        </Footer.Link>
        <Footer.Link href="/team" className="px-2">
          Team
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default Footers;
