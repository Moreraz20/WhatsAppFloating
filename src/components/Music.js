// import { useEffect } from "react";


const Music = () => {
    // useEffect(() => {
    //     const audioEl = document.getElementsByClassName("audio-player")[0];
    //     audioEl.play();
    // })

    return (
        <div>
            <h1>Welcome Music</h1>
            <audio controls className="audio-player">
                <source src="https://music-web-app.s3.us-east-2.amazonaws.com/musicFiles/neverGonna.wav" type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default Music;