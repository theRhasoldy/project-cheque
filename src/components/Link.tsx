import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

const LinkBehaviour = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehaviour(props, ref) {
    return <Link ref={ref} {...props} />;
  }
);

export default LinkBehaviour;
