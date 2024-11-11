import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"div"> {}

const Container = ({ children, className, ...props }: Props) => {
  return (
    <div {...props} className={cn("max-w-5xl mx-auto px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
