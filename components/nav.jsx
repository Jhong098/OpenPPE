import Link from "next/link";
import { useState } from "react";
import { Bell } from "react-feather";
import { StyledLink } from "components/button";
import { useAuth } from "utils/auth";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home", isPublic: true },
  { href: "/browse", label: "Browse", isPublic: true },
  { href: "/requests", label: "My Requests", isPublic: false },
];

const orderSublinks = [
  { href: "/orders/pending", name: "pending" },
  { href: "/orders/fulfilled", name: "fulfilled" },
  { href: "/orders/cancelled", name: "cancelled" },
];

const Nav = () => {
  const [profileSelected, setProfileSelected] = useState(false);
  const [ordersSelected, setOrdersSelected] = useState(false);

  const auth = useAuth();
  const router = useRouter();

  const editProfile = () => {
    setProfileSelected(false);
  };

  const handleSignout = async (e) => {
    e.preventDefault();
    await auth.signout();
    router.reload();
  };

  const rightNav = () => {
    if (auth.user) {
      return (
        <div className="flex justify-center items-center">
          <Bell />
          <div className="relative pl-8">
            <button
              onClick={() => setProfileSelected(!profileSelected)}
              className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
            >
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                alt="Your avatar"
              />
            </button>
            {profileSelected ? (
              <>
                <button
                  onClick={() => setProfileSelected(false)}
                  className="fixed inset-0 h-full w-full bg-black opacity-0 cursor-default"
                ></button>
                <div className="flex flex-col absolute z-10 right-0 mt-2 py-2 w-48 bg-primary rounded-lg shadow-xl">
                  <Link href="/settings">
                    <a
                      className="block px-4 py-2 hover:bg-dark_primary"
                      onClick={editProfile}
                    >
                      Account Settings
                    </a>
                  </Link>
                  <Link href="/auth/signout">
                    <a
                      className="block px-4 py-2 hover:bg-dark_primary"
                      onClick={handleSignout}
                    >
                      Sign out
                    </a>
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <StyledLink href="/auth/signup">Sign Up</StyledLink>
          <StyledLink href="/auth/signin">Sign in</StyledLink>
        </div>
      );
    }
  };

  return (
    <nav className="flex flex-wrap justify-between items-center text-white bg-dark_primary px-8 h-16">
      <ul className="flex items-center">
        {links.map(({ label, href, isPublic }) => (
          <div key={label}>
            {isPublic || auth.user ? (
              <li key={label} className="px-4">
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ) : null}
          </div>
        ))}
        {auth.user ? (
          <li
            className="px-4 relative cursor-pointer"
            onClick={() => setOrdersSelected(!ordersSelected)}
          >
            My Orders
            {ordersSelected ? (
              <>
                <button
                  onClick={() => setOrdersSelected(false)}
                  className="fixed z-10 inset-0 h-full w-full bg-black opacity-0 cursor-default"
                ></button>
                <div className="absolute z-20 left-0 mt-2 py-2 w-48 bg-primary rounded-lg shadow-xl">
                  <>
                    {orderSublinks.map((option) => (
                      <Link
                        key={option.name}
                        href="/orders/[status]"
                        as={option.href}
                      >
                        <a className="block px-4 py-2 hover:bg-dark_primary">
                          {option.name}
                        </a>
                      </Link>
                    ))}
                  </>
                </div>
              </>
            ) : null}
          </li>
        ) : null}
      </ul>
      {rightNav()}
    </nav>
  );
};

export default Nav;
