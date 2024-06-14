import Header from "./header";
import SendIcon from "./sendIcon";

export default function HomePage() {
  return (
    <main className="h-screen">
      <div className="flex h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center bg-[rgb(17,20,24)] bg-cover bg-center text-white">
          <div className="relative w-1/2 ">
            <form action="">
              <input
                type="text"
                name="question"
                placeholder="Learn about ThunderLabs"
                className="w-full rounded-2xl border-2 border-[#FF0000] px-4 py-2 text-black"
              />
              <button
                className="absolute right-2 top-1/2 h-[30px] w-[30px] -translate-y-1/2 transform"
                type="submit"
              >
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
