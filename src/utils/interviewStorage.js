export const saveInterviewSession = (session) => {
  sessionStorage.setItem(
    "interviewSession",
    JSON.stringify(session)
  );
};


export const getInterviewSession = () => {
  const session = sessionStorage.getItem(
    "interviewSession"
  );

  return session
    ? JSON.parse(session)
    : null;
};


export const clearInterviewSession = () => {
  sessionStorage.removeItem(
    "interviewSession"
  );
};