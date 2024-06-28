import Logo from "./logo";
import Menu from "./menu";
import Account from "./menu/account";
import More from "./menu/more";

export default function Sidebar() {
    return (
        <aside className="w-[275px] min-h-screen px-2 max-h-screen flex flex-col ">
            <Logo />
            <Menu />
            <More />
            <Account />
        </aside>
    )
}