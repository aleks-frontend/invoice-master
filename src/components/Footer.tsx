import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-6 mb-8">
      <Container className="flex justify-between border-t-2 pt-4">
          <p className="text-sm">InvoiceMaster &copy; {new Date().getFullYear()}</p>
          <p className="text-sm">Created by Aleksandar Gojkovic, with Next.js</p>
      </Container>
    </footer>
  );
};

export default Footer;
