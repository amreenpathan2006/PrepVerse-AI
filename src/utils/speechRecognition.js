const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

export const createSpeechRecognition = () => {
    if (!SpeechRecognition) {
        return null;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    return recognition;
};