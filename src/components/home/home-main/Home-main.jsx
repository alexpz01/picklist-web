import MainRight from "./main-right/Main-right";
import MainLeft from "./main-left/Main-left";

export default function HomeMain() {
    return <div className="home-main row vh-100">
        <div className="col-md-5 row-4">
            <MainLeft></MainLeft>
        </div>
        <div className="col-md-7 bg-red h-md-100 row-8">
            <MainRight></MainRight>
        </div>
    </div>
}