import "./AIInterviewer.css";

function AIInterviewer({

    state = "ready"

}) {

    const statusText = {

        ready: "Ready to Interview",

        speaking: "Speaking...",

        listening: "Listening...",

        thinking: "Thinking..."

    };

    return (

        <div className="ai-interviewer">

            <div className={`avatar-container ${state}`}>

                <div className="avatar-placeholder">

                    AMREEN

                </div>

            </div>

            <h2>Amreen</h2>

            <p>Senior Technical Interviewer</p>

            <div className={`status ${state}`}>

                ● {statusText[state]}

            </div>

        </div>

    );

}

export default AIInterviewer;