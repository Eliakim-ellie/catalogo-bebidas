import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Layout() {
    return (
        <div>
            <Header />
            <main className="container mx-auto py-16">
                <Outlet />
            </main>
            <Modal />
        </div>
    )
}
