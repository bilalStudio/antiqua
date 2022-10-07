import NavBar from "../Components/NavBar";
import PostProgettoStep1 from "../Components/PostProgettoStep1";
import { PostProgettoProvider } from "../context/PostProgettoContext";
export default function PostProgetto() {
    return (
        <PostProgettoProvider>
            <div>
                <main style={{ padding: "1rem 0" }}>
                    <PostProgettoStep1 />
                </main>
            </div>
        </PostProgettoProvider>

    );
}