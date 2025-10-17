import { FaFileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaFileAlt size={28} />,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
];

export default function Service() {
  return (
    <section className="py-10 md:py-20 bg-white text-center px-10 lg:px-0">
      <h2 className="text-3xl md:text-4xl text-gray-800 mb-12 font-bold">
        Our <span className="text-[#5067EB]">Service</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w mx-0 md:mx-30">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-gray-200 shadow-sm rounded-t-lg rounded-br-[80px] transition-transform hover:scale-[1.02] hover:shadow-md"
          >
            <div className="flex flex-col items-start text-left">
              <div className="bg-[#DDE2FF] text-[#5067EB] p-3 rounded-full mb-8 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
