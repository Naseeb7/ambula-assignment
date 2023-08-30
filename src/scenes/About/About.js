import todoAnimation from "assets/todoAnimation.json";
import Lottie from "react-lottie-player";

const About = () => {
  return (
    // Main container for the about component
    <div className="flex flex-col sm:flex-row justify-around items-start">
      {/* Left section containing the animation */}
      <div className="flex flex-col items-center">
        {/* Display the Lottie animation */}
        <Lottie play loop animationData={todoAnimation} />
      </div>
      {/* Right section containing the text content */}
      <div className="flex flex-col gap-4 text-zinc-700 bg-teal-50 p-4">
        {/* Introduction to the webpage */}
        <div className="flex flex-col">
          <span className="flex text-2xl font-bold text-teal-700">
            Welcome to Your Ultimate Web Companion: To-Do List, Shopping Cart,
            and Weather App
          </span>
          <span className="flex">
            Imagine a virtual space where productivity, shopping, and weather
            updates come together for your convenience. Our webpage is designed
            to cater to your diverse needs, providing you with three essential
            functionalities in one user-friendly platform.
          </span>
        </div>
        {/* Explanation of the To-Do List feature */}
        <div className="flex flex-col">
          <span className="flex flex-col">
            <span className="flex text-xl font-semibold">To-Do List :</span>
            Manage Tasks with Ease Stay on top of your daily tasks effortlessly
            with our integrated to-do list feature.
          </span>
          <span className="flex">Here's how it works:</span>
          {/* Details of how the To-Do List works */}
          <span className="flex">
            Task Addition: Quickly jot down new tasks as they come to mind,
            ensuring nothing slips through the cracks.
          </span>
          <span className="flex">
            Task Tracking: Easily mark tasks as completed and witness your
            progress unfold in real time.
          </span>
          <span className="flex">
            Task Removal: If tasks become obsolete, remove them swiftly to keep
            your list clutter-free.
          </span>
        </div>
        {/* Explanation of the Shopping Cart feature */}
        <div className="flex flex-col">
          <span className="flex flex-col">
            <span className="flex text-xl font-semibold">Shopping Cart :</span>
            Shopping Made Simple Revolutionize your shopping experience with our
            intuitive shopping cart.
          </span>
          <span className="flex">Explore its benefits:</span>
          {/* Details of how the Shopping Cart works */}
          <span className="flex">
            Item Addition: Add items you intend to purchase to your cart as you
            shop online, keeping your selections organized.
          </span>
          <span className="flex">
            Item Removal: Modify your choices on the fly – remove items you
            change your mind about without any hassle.
          </span>
          <span className="flex">
            Subtotal Display: Always stay aware of your spending with the
            dynamically calculated subtotal.
          </span>
        </div>
        {/* Explanation of the Weather App feature */}
        <div className="flex flex-col">
          <span className="flex flex-col">
            <span className="flex text-xl font-semibold">Weather App :</span>
            Stay Informed and Prepared Stay updated with real-time weather
            information through our weather app integration.
          </span>
          <span className="flex">Live Weather Data: Access up-to-the-minute weather forecasts,
            ensuring you're prepared for the day ahead.
          </span>
          <span className="flex">
            Visual Representation: Dive into a visually appealing display of
            weather details, making it easy to grasp the conditions at a glance.
          </span>
        </div>
        <div className="flex flex-col text-teal-700">
          <span className="flex font-semibold text-xl">
            Simplicity in Navigation :
          </span>
          <span>
            <span className="font-semibold">Seamless Transition :</span>
            Navigate between these functionalities effortlessly thanks to our
            user-friendly design.
          </span>
          <span>
            <span className="font-semibold">Clear Sections :</span> Each
            feature is neatly organized into dedicated sections, ensuring a
            clutter-free experience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
