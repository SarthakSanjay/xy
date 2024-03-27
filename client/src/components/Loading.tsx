import { Loader2 } from "lucide-react";

const Loading = () => {
  console.log("loading rendered");
  return (
    <div className="w-full flex justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-sky-500" />
    </div>
  );
};

export default Loading;
