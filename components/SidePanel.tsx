import Link from "next/link";
import styled from "styled-components";
import MineaLogoSvg from "../public/icons/logos/minea-logo.svg";

export default function Header(props: any) {
  return (
    <Style className="h-screen fixed px-4 py-3">
      <Svg>
        <MineaLogoSvg />
      </Svg>
      <Navbar>
        <ul>
          <li>
            <Link href="/">
              <i className="pi pi-th-large"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="pi pi-eye"></i>
              <span>Adspy</span>
              <i className="pi pi-chevron-down"></i>
            </a>
            <ul className="subsection">
              <li id="target-2">
                <Link href="/adspy">
                  <i className="pi pi-facebook"></i>
                  <span>Facebook Ads</span>
                </Link>
              </li>
              <li>
                <a href="#">
                  <i className="pi pi-stop"></i>
                  <span>Pinterest Ads</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="pi pi-stop"></i>
                  <span>Tiktok Ads</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="pi pi-stop"></i>
              <span>Shops</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="pi pi-stop"></i>
              <span>Business Plan</span>
              <i className="pi pi-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="pi pi-stop"></i>
              <span>Influence Marketing</span>
              <i className="pi pi-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="pi pi-stop"></i>
              <span>Lists</span>
            </a>
          </li>
        </ul>
      </Navbar>
    </Style>
  );
}

const Style = styled.div`
  border-right: 1px solid #e5e7eb;
  background-color: white;
  width: inherit;
`;

const Navbar = styled.nav`
  margin-top: 2rem;

  ul {
    display: flex;
    flex-direction: column;

    &.subsection {
      margin-left: 1.5rem;
    }

    li {
      a {
        padding: 1rem 0;
        font-weight: 600;
        font-size: 0.875rem;
        color: #6b7280;
        letter-spacing: normal;
        display: flex;
        align-items: center;

        span {
          margin-left: 1rem;
          margin-right: 0.8rem;
        }

        i:last-child {
          font-size: 0.75rem;
        }

        &.active {
          color: #1f2937;
        }
      }
    }
  }
`;

const Svg = styled.div`
  width: 100px;
`;
