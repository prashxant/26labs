import { Sliding } from "./Sliding";
import { Descripton, Typography } from "./Typography";
//spacing is needed
export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Typography
        variant="h2"
        className=""
        line1="Fueling Growth With"
        line2=""
        popUp="Smart Technology"
      />
      <Descripton
        className="max-w-md "
        description="We partner with industry-leading platforms to help you
        automate, scale, and simplify your business operations - so
        you can focus on what matters most: growth."
      />
      <Sliding />

      <Descripton
        className="max-w-xl "
        description="By combining thoughtful design, smart AI-driven targeting, and modern technology, we ensure your site speaks to the right people at the right time. Every interaction is crafted to build trust, engagement, and clarity. With us, your website doesn't just exist—it performs, connects, and grows your brand."
      />

      {/* GROWTH PLAN */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-orange-500">
          Get personalized <br /> growth plan
        </h2>

        <p className="max-w-xl mx-auto text-sm text-gray-600">
          We'll identify your biggest revenue bottlenecks and map out a proven
          outbound strategy to fix them — based on whats working for our other
          clients.
        </p>

        <div className="flex justify-center gap-10 text-sm font-medium">
          <span className="text-green-500">Discover</span>
          <span className="text-yellow-500">Define</span>
          <span className="text-red-500">Derive</span>
          <span className="text-blue-500">Deliver</span>
        </div>

        <div className="flex justify-center items-center gap-3 pt-4">
          <span className="text-sm text-gray-500">Consultancy Fees</span>
          <span className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm font-semibold">
            149$
          </span>
        </div>

        <div className="space-y-2">
          <button className="px-6 py-2 rounded-md bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
            Book your slot now
          </button>
          <p className="text-xs text-gray-500">
            Booking are filling faster. Book now in a offer price
          </p>
        </div>
      </div>

      {/* LOCATION */}
      <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
        <span>Based in Dubai</span>
        <span className="text-orange-500 text-xl">✳</span>
        <span>Designing Worldwide</span>
      </div>

      {/* FOOTER LINKS */}
      <div className="grid grid-cols-3 gap-12 text-sm text-left max-w-4xl mx-auto">
        <div className="space-y-2">
          <h4 className="font-semibold">Pricing</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Basic</li>
            <li>Standard</li>
            <li>Premium</li>
            <li>Custom</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Resource</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Design</li>
            <li>Development</li>
            <li>Maintenance</li>
            <li>Student program</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Contact</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Blog</li>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">
          We give you more . A monthly <br />
          <span className="text-orange-500">Newsletter</span> to keep you
          updated.
        </h3>

        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 w-64 rounded-md border border-gray-300 text-sm focus:outline-none"
          />
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md">
            →
          </button>
        </div>

        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Be the first to receive ideas, trends, and strategies that help your
          brand grow smarter and stand out.
        </p>
      </div>

      {/* CONNECT */}
      <div className="space-y-4">
        <h2 className="text-5xl font-extrabold leading-none">
          Let’s <br /> Connect
        </h2>

        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Say goodbye to outdated enterprise software and welcome the smoother
          one. We lead you from design to product innovation to shape your path
          from idea to success.
        </p>

        <div className="flex justify-center gap-6 text-gray-500 text-xl">
          <span>in</span>
          <span>X</span>
          <span>▶</span>
          <span>◎</span>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-xs text-gray-500 pt-10">
        © 2026 26labs. All Rights Reserved.
        <div className="flex justify-center gap-4 mt-2">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};


