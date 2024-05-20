import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const HeadingFont = localFont({ src: "../public/fonts/Neuropol.otf" });

export { inter, HeadingFont };
