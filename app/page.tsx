import { Inter } from "@next/font/google";
import TroubleComponent from "@/components/TroubleComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <p>
          Get started by editing&nbsp;
          <code>app/page.tsx</code>
        </p>
        <TroubleComponent />
      </div>
    </main>
  );
}
