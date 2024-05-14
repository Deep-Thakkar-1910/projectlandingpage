"use client";
import { useRouter } from "next/navigation";

interface NeonButtonProps {
  content: string;
}
const NeonButton = ({ content }: NeonButtonProps) => {
  const router = useRouter();
  return (
    <button
      className="neon-button rounded-lg"
      onClick={() => router.push("/home")}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {content}
    </button>
  );
};
export default NeonButton;
