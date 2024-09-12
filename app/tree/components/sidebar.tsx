import { useRouter } from "next/navigation";

interface SidebarProps {
    path: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ path }) => {
    const router = useRouter();

    return (

        <div className="sidebar">
            <div className="sidebar_folder_title">
                <h2>{path.toUpperCase()}</h2>
            </div>
            {path === "campaign" && (
                <div className="folder_holder">
                <button onClick={() => router.push('/tree/campaign/overview')}>OverView</button>
                <button onClick={() => router.push('/tree/campaign/notes')}>Notes</button>
                <button onClick={() => router.push('/tree/campaign/sources')}>Sources</button>
                <button onClick={() => router.push('/tree/campaign/maps')}>Maps</button>
            </div>
            )}
        </div>
    );
};