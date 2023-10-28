import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";
const HomeLayout = () => {
  const loading = useNavigation();
  const isLoading = loading.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-elements">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
