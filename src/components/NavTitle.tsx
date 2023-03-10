import { useRouter } from "next/router";

// const NavItems = ["Projects", "About", "Recommend", "Contact", "Resume"];
const NavItems = [
  "About",
  "Skills",
  "Projects",
  "Recommend",
  "Contact",
  "Resume",
];

interface NavProps {
  clickedTitle: string;
  setTitle: Function;
}
export const NavTitle = (props: NavProps) => {
  const { setTitle, clickedTitle } = props;
  const router = useRouter();

  function titleClick(title: string) {
    const { pathname } = router;
    setTitle(title);

    if (title.toLowerCase() === "resume") {
      router.push("/resume");
      return;
    } else {
      pathname === "/resume" && router.push("/");
    }

    setTimeout(() => {
      const element = document.getElementById(title);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }, 1);
  }

  return (
    <>
      <div className="items-center w-full md:flex">
        {NavItems.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => titleClick(item)}
              className={`block p-2 font-mono text-xl xl:px-8 lg:px-4 focus:outline-none ${
                clickedTitle.toLowerCase() === item.toLowerCase()
                  ? " text-lime-500 "
                  : " text-green-600"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};
