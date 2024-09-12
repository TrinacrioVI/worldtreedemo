import { useRouter } from "next/navigation";

interface InnerSidebarProps {
    innerpath: string;
}

export const InnerSidebar: React.FC<InnerSidebarProps> = ({ innerpath }) => {
    const router = useRouter();

    return (

        <div className="inner_sidebar">
            <div className="sidebar_folder_title">
                <h2>{innerpath.toUpperCase()}</h2>
            </div>
            {innerpath === "first" && (
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