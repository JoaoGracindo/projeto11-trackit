import logo from "./../../assets/logo.svg";
import StyledMenu from "./StyledMenu";

export default function Menu({}) {
  return (
    <StyledMenu>
      <div className="header">
        <img className="logo" src={`${logo}`} />
        <img
          data-identifier="avatar"
          className="userImg"
          src="https://www.rbsdirect.com.br/imagesrc/25516126.jpg?w=700"
        />
      </div>
      <div className="footer">
        <span data-identifier="habit-page-action">Hábitos</span>
        <div>Hoje</div>
        <span data-identifier="historic-page-action">Histórico</span>
      </div>
    </StyledMenu>
  );
}
