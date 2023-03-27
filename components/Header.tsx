import styled from "styled-components";

export default function Header(props: any) {
  return (
    <div className="shadow-2 h-5rem flex align-items-center px-4">
      <SimpleSkeleton className="w-6 h-1rem"/>
      <div className="ml-auto">
        <Profile>LT</Profile>
      </div>
    </div>
  );
}

const SimpleSkeleton = styled.div`
  background-color: #d9d9d9;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f1871b;
  margin-left: auto;
  font-size: 0.85rem;
`;
