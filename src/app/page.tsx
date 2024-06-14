import Header from "./header";
import InputBox from "./inputBox";
import MicSVG from "./micSVG";
import SendIcon from "./sendIcon";

export default function HomePage() {
  return (
    <main className="h-screen">
      <div className="flex h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center bg-[rgb(17,20,24)] bg-cover bg-center text-white">
          <InputBox />
        </div>
      </div>
    </main>
  );
}
