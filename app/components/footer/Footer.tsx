import Link from "next/link";
import { Poppins } from 'next/font/google'
import Container from "../Container";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"

const logo = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-neutral-600 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 pb-8 gap-6">
          <div>
            <div className="font-bold mb-3">&copy; {new Date().getFullYear()} Hyein Huh.</div>
            <div className="mb-3 flex flex-col gap-1 text-neutral-500">
              <div>010-1234-5678</div>
              <div>hyeinhuh@email.com</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#">
              <FaFacebookF size={24} />
            </Link>
            <Link href="#">
              <FaTwitter size={24} />
            </Link>
            <Link href="#">
              <FaInstagram size={24} />
            </Link>
            <Link href="#">
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;