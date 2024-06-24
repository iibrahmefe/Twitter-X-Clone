import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import classNames from "classnames";
import { RiHomeOfficeLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageAlt } from "react-icons/bi";
import { RiFileListLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";


export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            <NavLink to="/" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl group-hover:bg-[#eff3f41a]", { "font-bold": isActive })}>
                        {isActive && (<GrHomeRounded width={26.25} height={26.25} />)}
                        {!isActive && (<RiHomeOfficeLine width={26.25} height={26.25} />)}
                        <div className="pr-4 text-xl">
                            Ana Sayfa
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink to="/explore" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl group-hover:bg-[#eff3f41a]", { "font-bold": isActive })}>
                        {isActive && (<CiSearch width={26.25} height={26.25} />)}
                        {!isActive && (<CiSearch width={26.25} height={26.25} />)}
                        <div className="pr-4 text-xl">
                            Keşfet
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink to="/notifications" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl group-hover:bg-[#eff3f41a]", { "font-bold": isActive })}>
                        {isActive && (<IoMdNotificationsOutline
                            width={26.25} height={26.25} />)}
                        {!isActive && (<IoMdNotificationsOutline width={26.25} height={26.25} />)}
                        <div className="pr-4 text-xl">
                            Bildirimler
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink to="/notifications" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl group-hover:bg-[#eff3f41a]", { "font-bold": isActive })}>
                        {isActive && (<BiMessageAlt
                            width={26.25} height={26.25} />)}
                        {!isActive && (<BiMessageAlt width={26.25} height={26.25} />)}
                        <div className="pr-4 text-xl">
                            Mesajlar
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink to="/notifications" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl group-hover:bg-[#eff3f41a]", { "font-bold": isActive })}>
                        {isActive && (<RiFileListLine
                            width={26.25} height={26.25} />)}
                        {!isActive && (<RiFileListLine width={26.25} height={26.25} />)}
                        <div className="pr-4 text-xl">
                            Listleler
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink to="/notifications" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl group-hover:bg-[#eff3f41a]", { "font-bold": isActive })}>
                        {isActive && (<CiBookmark
                            width={26.25} height={26.25} />)}
                        {!isActive && (<CiBookmark width={26.25} height={26.25} />)}
                        <div className="pr-4 text-xl">
                            Yer İşaretleri
                        </div>
                    </div>
                )}
                <NavLink to="/notifications" className="py-1 block group">
                    {({ isActive }) => (
                        <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl group-hover:bg-[#eff3f41a]", { "font-bold": isActive })}>
                            {isActive && (<CgProfile
                                width={26.25} height={26.25} />)}
                            {!isActive && (<CgProfile width={26.25} height={26.25} />)}
                            <div className="pr-4 text-xl">
                                Profil
                            </div>
                        </div>
                    )}
                </NavLink>
            </NavLink>
            <NavLink to="/notifications" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl group-hover:bg-[#eff3f41a]", { "font-bold": isActive })}>
                        {isActive && (<CiCircleMore
                            width={26.25} height={26.25} />)}
                        {!isActive && (<CiCircleMore width={26.25} height={26.25} />)}
                        <div className="pr-4 text-xl">
                            Daha Fazla
                        </div>
                    </div>
                )}
            </NavLink>

        </nav>
    );
}
