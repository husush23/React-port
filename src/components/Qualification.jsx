import SkillSecion from "./SkillSecion";

function Qualification() {
  return (
    <div className="flex flex-col space-x-6 space-y-6 pr-3 md:mx-12 md:mt-48 md:flex md:flex-col">
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
              I design from the ground up ultricies et eu vestibulum sagittis,
              laoreet massa risus fermentum, netus sed arcu vitae viverra
              rhoncus dignissim. Velit ornare maecenas diam vel ac aliquet
              morbi.
            </p>
          </div>
          <div className="gap-x-8 md:grid md:grid-cols-2">
            <div>
              <SkillSecion>
                <h4 className="text-2xl font-semibold">Art director</h4>
                <p>
                  Tellus enim eget massa est lorem amet, integer feugiat vivamus
                  egestas nam adipiscing tortor arcu ultrices eget vitae tortor
                  sapien faucibus sit venenatis.
                </p>
              </SkillSecion>
            </div>
            <div>
              <SkillSecion>
                <h4 className="text-2xl font-semibold">Visual identity</h4>
                <p>
                  Semper tortor tortor scelerisque egestas amet, in ridiculus
                  integer elit urna, ultrices velit accumsan scelerisque aliquam
                  egestas risus leo dignissim.
                </p>
              </SkillSecion>
            </div>
            <div>
              <SkillSecion>
                <h4 className="text-2xl font-semibold">Brand experience</h4>
                <p>
                  Aliquam sed nam amet, id tincidunt blandit porta ut commodo ut
                  odio non morbi pellentesque consequat felis sollicitudin in
                  ultricies nibh ut
                </p>
              </SkillSecion>
            </div>
            <div>
              <SkillSecion>
                <h4 className="text-2xl font-semibold">Motion design</h4>
                <p>
                  Pulvinar tellus sit mauris duis ipsum, at consequat, sed
                  accumsan, sed aliquam, accumsan, velit sed sagittis, phasellus
                  parturient sed sit id tempus
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
