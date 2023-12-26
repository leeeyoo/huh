import Link from "next/link";
import Container from "../Container";
import { Poppins } from 'next/font/google'
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

const logo = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

const NavBar = async () => {
  const currentUser = await getCurrentUser()

  return (
    <div className="sticky top-0 w-full bg-white z-30">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className={`${logo.className} text-2xl`}>
              <span className="font-normal">HYEIN</span>
              <span className="font-bold ml-[2px]">HUH</span>
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}

export default NavBar;