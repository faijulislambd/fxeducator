import Container from "../utils/Container";
import Title from "../utils/Title";
import {
  PiChartPieSliceBold,
  PiCurrencyDollarBold,
  PiUserGear,
} from "react-icons/pi";
import { BsCurrencyExchange } from "react-icons/bs";
const HowToTrade = () => {
  return (
    <section className="py-32">
      <Container>
        <Title className="text-center text-3xl before:left-1/2 before:-translate-x-1/2 before:w-2/12 mb-24">
          Our Trading Process
        </Title>
        <div className="flex flex-wrap items-center justify-center -mx-5">
          <div className="flex flex-col px-5 lg:w-1/4 sm:w-1/2 w-full mb-5 lg:mb-0">
            <div className="h-[200px] text-center space-y-5 cursor-pointer group px-10 pt-5 pb-32 border-2 rounded-lg transition-all duration-300 border-slate-50 relative overflow-hidden shadow-lg hover:border-amber-500">
              <div className="p-3 inline-flex items-center justify-center border-2 border-gray-100 rounded-full mx-auto text-4xl scale-100 shadow-md  group-hover:scale-0 group-hover:-translate-y-32 transition-all duration-300">
                <PiUserGear></PiUserGear>
              </div>
              <h3 className="font-semibold text-xl capitalize text-center transition-all duration-300 group-hover:-translate-y-[5rem]">
                Account Opening
              </h3>
              <p className="-translate-y-20 opacity-0 transition-all duration-500 group-hover:opacity-100">
                At first you would need to register a account with us
              </p>
              <button className="px-5 py-2 border border-b-0 rounded-t-lg transition-all duration-300 border-slate-50 text-center font-semibold inline-block absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:bg-amber-500 group-hover:border-amber-500">
                Step 1
              </button>
            </div>
          </div>
          <div className="flex flex-col px-5 lg:w-1/4 sm:w-1/2 w-full mb-5 lg:mb-0">
            <div className="h-[200px] text-center space-y-5 cursor-pointer group px-10 pt-5 pb-32 border-2 rounded-lg transition-all duration-300 border-slate-50 relative overflow-hidden shadow-lg hover:border-amber-500">
              <div className="p-3 inline-flex items-center justify-center border-2 border-gray-100 rounded-full mx-auto text-4xl scale-100 shadow-md  group-hover:scale-0 group-hover:-translate-y-32 transition-all duration-300">
                <BsCurrencyExchange></BsCurrencyExchange>
              </div>
              <h3 className="font-semibold text-xl capitalize text-center transition-all duration-300 group-hover:-translate-y-[5rem]">
                Currency pair
              </h3>
              <p className="-translate-y-20 opacity-0 transition-all duration-500 group-hover:opacity-100">
                Select a currency pain that you will trade upon.
              </p>
              <button className="px-5 py-2 border border-b-0 rounded-t-lg transition-all duration-300 border-slate-50 text-center font-semibold inline-block absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:bg-amber-500 group-hover:border-amber-500">
                Step 2
              </button>
            </div>
          </div>
          <div className="flex flex-col px-5 lg:w-1/4 sm:w-1/2 w-full mb-5 lg:mb-0">
            <div className="h-[200px] text-center space-y-5 cursor-pointer group px-10 pt-5 pb-32 border-2 rounded-lg transition-all duration-300 border-slate-50 relative overflow-hidden shadow-lg hover:border-amber-500">
              <div className="p-3 inline-flex items-center justify-center border-2 border-gray-100 rounded-full mx-auto text-4xl scale-100 shadow-md  group-hover:scale-0 group-hover:-translate-y-32 transition-all duration-300">
                <PiChartPieSliceBold></PiChartPieSliceBold>
              </div>
              <h3 className="font-semibold text-xl capitalize text-center transition-all duration-300 group-hover:-translate-y-[5rem]">
                Market Analysis
              </h3>
              <p className="-translate-y-20 opacity-0 transition-all duration-500 group-hover:opacity-100">
                After selecting your pair it is very important to analyze the
                market status.
              </p>
              <button className="px-5 py-2 border border-b-0 rounded-t-lg transition-all duration-300 border-slate-50 text-center font-semibold inline-block absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:bg-amber-500 group-hover:border-amber-500">
                Step 3
              </button>
            </div>
          </div>
          <div className="flex flex-col px-5 lg:w-1/4 sm:w-1/2 w-full mb-5 lg:mb-0">
            <div className="h-[200px] text-center space-y-5 cursor-pointer group px-10 pt-5 pb-32 border-2 rounded-lg transition-all duration-300 border-slate-50 relative overflow-hidden shadow-lg hover:border-amber-500">
              <div className="p-3 inline-flex items-center justify-center border-2 border-gray-100 rounded-full mx-auto text-4xl scale-100 shadow-md  group-hover:scale-0 group-hover:-translate-y-32 transition-all duration-300">
                <PiCurrencyDollarBold></PiCurrencyDollarBold>
              </div>
              <h3 className="font-semibold text-xl capitalize text-center transition-all duration-300 group-hover:-translate-y-[5rem]">
                Start Trading
              </h3>
              <p className="-translate-y-20 opacity-0 transition-all duration-500 group-hover:opacity-100">
                Now start trading and earn money.
              </p>
              <button className="px-5 py-2 border border-b-0 rounded-t-lg transition-all duration-300 border-slate-50 text-center font-semibold inline-block absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:bg-amber-500 group-hover:border-amber-500">
                Final Step
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowToTrade;
