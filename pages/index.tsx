import { SimpleSkeleton } from "../components/SimpleSkeleton";
import TodoList from "../components/TodoList";

export default function Home() {

  return (
    <>
      <div className="grid grid-nogutter">
        <div className="col flex flex-column">
          <h2 className="font-bold text-xl mb-2">
            Discover the full potential of Minea
          </h2>
          <TodoList />

          <div className="p-2"></div>

          <h2 className="font-bold text-xl mb-4">
            Top 10 winning products of the day
          </h2>
          <SimpleSkeleton className="w-full h-20rem" />
        </div>
        <div className="col-12 xl:col-fixed flex flex-column xl:w-18rem xl:ml-5 xl:mt-0 mt-5">
          <SimpleSkeleton
            className="w-full h-16rem opacity-30 mb-5"
            style={{ backgroundColor: "var(--primary-color)" }}
          />
          <SimpleSkeleton
            className="w-full h-16rem"
            style={{ backgroundColor: "#047857" }}
          />
        </div>
      </div>
    </>
  );
}
