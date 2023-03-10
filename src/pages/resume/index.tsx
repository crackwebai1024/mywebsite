import { Card } from "../../components/Card";
import { WorkHistory } from "../../components/WorkHistory";

export default function Resume() {
  return (
    <Card>
      <div className="space-y-8">
        <div>
          <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
            Education History
          </p>
          <WorkHistory period="Apr. 2006 ~ Oct. 2010">
            <p className="my-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
              Nankai University
            </p>
            <p className="my-2 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              ( Bachelor's degree, Mathematics and Computer Science)
            </p>
          </WorkHistory>
        </div>
        <div className="space-y-4">
          <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
            Work History
          </p>
          <WorkHistory period="Jun. 2010 ~ Nov. 2015">
            <div>
              <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
                Dalian Shipbuilding Industry
              </p>
              <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
                (full time, local)
              </p>
            </div>

            <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              (Front end Web Developer)
            </p>
          </WorkHistory>

          <WorkHistory period="Mar. 2017 ~ Sep. 2018">
            <div>
              <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
                CuddlyNest
              </p>
              <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
                (full time, remote)
              </p>
            </div>

            <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              (Full-Stack Web Developer)
            </p>
          </WorkHistory>

          <WorkHistory period="Jan. 2019 ~ Apr. 2021">
            <div>
              <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
                Bitwage Company
              </p>
              <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
                (remote, full time, part time)
              </p>
            </div>

            <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              (Full Stack web developer)
            </p>
          </WorkHistory>

          <WorkHistory period="Jul. 2021 ~ Aug. 2022">
            <div>
              <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
                Mlabs Company
              </p>
              <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
                (remote, full time, contract)
              </p>
            </div>

            <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              (Frontend Web Developer)
            </p>
          </WorkHistory>
        </div>
        <div className="flex justify-between ">
          <div></div>
          <a href="./CV/CV-2022-latest.pdf" target="_blank" download>
            <button className="bottom-auto p-2 text-white bg-green-500 border border-green-300 rounded-md shadow hover:bg-green-400 focus:outline-none">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </Card>
  );
}
