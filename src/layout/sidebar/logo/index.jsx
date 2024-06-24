import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

export default function Logo() {
    return (
        <div className="py-0.5">
            <Link to="/" className="w-[52px] h-[52px] rounded-full  flex items-center justify-center hover:bg-[#eff3f41a] transition-colors">
            <FaXTwitter className="w-[30px] h-[30px]" />
        </Link>
        </div>
    )
}