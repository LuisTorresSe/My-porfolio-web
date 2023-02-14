import { Icon } from "@iconify/react";
import { StyledArrow } from "./styles";

export default function NavigationArrow() {
  return (
    <StyledArrow to="nav">
      <div className="navigator">
        <Icon
          icon="material-symbols:arrow-downward-rounded"
          className="arrowNavigator"
        />
      </div>
    </StyledArrow>
  );
}
