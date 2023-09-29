import './loadingBar.scss'

export default function LoadingBar({theme = "red", show = true}) {
    const themes = [theme == "red" ? "bg-red" : "bg-white", theme == "red" ? "bg-white" : "bg-red"]
    return <div style={{height: "15px", opacity: show ? "100%" : "0%"}} className={"loading-bar w-100 rounded-3 position-relative overflow-hidden " + themes[0]}>
        <div className={"loading-bar-move h-100 position-absolute rounded-3 " + themes[1]}></div>
    </div>
}