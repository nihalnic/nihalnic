import { reviewInfo } from "../../constans";


const Home = () => {
  return (
    <div className="home-container">
      <div className="top-40 lg:top-24 relative">
        <h1 className=" h1-bold lg:text-[75px]">
          Deep Drive to <br /> Magical Stuff!
        </h1>
        <p className="mt-2 lg:mt-3 h3-medium lg:h1-semibold opacity-85 ">
          Avid Cinematographer.
        </p>

        <div className="mt-8 md:mt-16">
          <ul className="flex-center flex-start">
            {reviewInfo.map((data, index) => (
              <li
                key={data.image}
                style={{ marginLeft: `${index > 0 ? -12 : 0}px` }}
              >
                <img
                  src={data.image}
                  alt={data.alt}
                  width={35}
                  className="border border-white rounded-full"
                />
              </li>
            ))}
            <div className="flex-center gap-2 ml-3">
              <li>
                <img src="/assets/icons/star.png" alt="user-star" width={35} />
              </li>
              <div>
                <h1 className="h3-regular">50+</h1>
                <p className="tiny-light text-zinc-400">Satisfied Client</p>
              </div>
            </div>
          </ul>
          <p className=" tiny-light md:small-regular mt-3 text-zinc-400">
            Many clients are satisfied and happy with <br /> the results I
            provide.
          </p>

          <div className="flex-between w-full gap-36 py-8">
            <div className="experience-card">
              <div className="experience_box">
                <h1 className="h1-regular">100+</h1>
                <p className="small-regular text-zinc-400">Projects</p>
              </div>
              <div className="experience_box">
                <h1 className="text-[28px]">Up work</h1>
                <p className="small-regular text-zinc-400">Top rated seller</p>
              </div>
              <div className="experience_box">
                <span className="flex items-end">
                  <h1 className="h1-regular">3</h1>
                  <span className="block ml-1 small-regular ">Year</span>
                </span>

                <p className="small-regular text-zinc-400">Experience</p>
              </div>
            </div>
            <div className="w-full lg:block hidden">
              <p className=" text-zinc-400 text-[15px] leading-[30px]">
                I have a passion for coding and technology, and I'm eager to
                learn and grow in the field of web development. I enjoy
                working on various projects, experimenting with new
                technologies. and collaborating with others to create innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
