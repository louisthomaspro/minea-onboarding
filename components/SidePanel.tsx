import styled from "styled-components";
import MineaLogoSvg from "../public/icons/logos/minea-logo.svg";

export default function Header(props: any) {
  return (
    <div>
      <Svg>
        <MineaLogoSvg />
      </Svg>
    </div>
  );
}

const Svg = styled.div`
  width: 100px;
`;
