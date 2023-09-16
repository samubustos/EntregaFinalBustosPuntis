import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p>&copy; 2023 Q'Yerba. Todos los derechos reservados.</p>
        </div>
        <div className="text-center md:text-right">
          <a
            href="https://www.instagram.com/qyerba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 mr-4"
          >
            Instagram
          </a>
          <a
            href="mailto:qyerba@gmail.com"
            className="text-white hover:text-green-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
