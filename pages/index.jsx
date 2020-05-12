import Head from "next/head";
import Nav from "components/nav";
import PropTypes from "prop-types";
import { get } from "lodash";
import Link from "next/link";
import withAuthUser from "utils/wrappers/withAuthUser";
import withAuthUserInfo from "utils/wrappers/withAuthUserInfo";

const IndexPage = (props) => {
  const { AuthUserInfo } = props;
  const authUser = get(AuthUserInfo, "AuthUser");

  return (
    <div className="container">
      <Head>
        <title>Open PPE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Nav /> */}
        {authUser ? (
          <div>logged in</div>
        ) : (
          <>
            <div>
              <Link href="/login">
                <a>Login</a>
              </Link>
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </div>
          </>
        )}
        <div className="hero flex-center">
          <img src="/Logox2.png" alt="logo" />
          <h2 className="text-lg font-semibold">
            Share resources with those who need them the most
          </h2>
          <Link href="/browse">
            <a className="rounded bg-gray-800 text-white py-2 px-4 hover:opacity-75 mt-4">
              Browse Requests
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

IndexPage.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired,
    }),
    token: PropTypes.string,
  }),
};

IndexPage.defaultProps = {
  AuthUserInfo: null,
};

export default withAuthUser(withAuthUserInfo(IndexPage));
