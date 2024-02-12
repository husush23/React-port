import SkillSecion from "./SkillSecion";

function Qualification() {
  return (
    <div className="flex flex-col space-x-6 space-y-6 pr-3 md:mx-12 md:mt-48 md:flex md:flex-col md:px-10">
      <div className="px-6">
        <h3 className="w-[100%] font-beVietnamPro text-2xl font-medium">03.</h3>
      </div>
      <div className="mx-6 space-x-6 md:flex md:flex-row">
        <h3 className=" w-[51%] py-4 font-beVietnamPro text-3xl font-semibold md:text-4xl">
          What I am awesome at
        </h3>
        <div className="">
          <div>
            <p className=" py-4 text-2xl">
              I excel in full-stack development, from system architecture to
              interactive web design, integrating APIs, and database management
              for seamless functionality. My work ensures engaging user
              experiences and robust backend support.
            </p>
          </div>
          <div className="gap-x-8 md:grid md:grid-cols-2">
            <div>
              <SkillSecion>
                <h4 className="text-2xl font-semibold">
                  System Architecture Design
                </h4>
                <p>
                  Lead web architecture planning and implementation, ensuring
                  seamless front-end to back-end integration for scalable
                  solutions.
                </p>
              </SkillSecion>
            </div>
            <div>
              <SkillSecion>
                <h4 className="text-2xl font-semibold">
                  Interactive Web Development
                </h4>
                <p>
                  Develop responsive, user-centric web applications using the
                  latest front-end technologies, focusing on mobile-first
                  design.
                </p>
              </SkillSecion>
            </div>
            <div>
              <SkillSecion>
                <h4 className="text-2xl font-semibold">API Development</h4>
                <p>
                  Create and integrate RESTful APIs for efficient client-server
                  communication, enhancing application functionality.
                </p>
              </SkillSecion>
            </div>
            <div>
              <SkillSecion>
                <h4 className="text-2xl font-semibold">Database Management</h4>
                <p>
                  Manage and optimize databases for peak performance, ensuring
                  data integrity and support for scalable application growth.
                </p>
              </SkillSecion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
