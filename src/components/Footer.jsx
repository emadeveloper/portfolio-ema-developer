import { social } from "../data";

const Footer = () => {
  return (
    <footer id="footer" className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex'col lg:flex row space-x-6 lg:space-y-0 items-center justify-between">
          {/* SOCIAL ICONS */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { url, icon } = item;
              return (
                <a
                  className="text-accent text-base"
                  target="_blank"
                  href={url}
                  key={index}
                  rel="noreferrer"
                >
                  {icon}
                </a>
              );
            })}
          </div>
          {/* COPYRIGHT */}
          <p>&copy; 2024 Emanuel Martinez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
